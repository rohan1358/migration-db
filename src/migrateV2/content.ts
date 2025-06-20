import { readFileSync } from 'fs';
import path from 'path';
import { formatDateToMySQL } from '../insertAnnualReport';
import { addIdChange } from '../addIdChange';
import { Sequelize } from 'sequelize';

import { defineContent, defineContentDetail } from '../db/model';
import db from '../db/sequelize'
import omitKeys from '../omitKeys';
// import { db1, db2 } from '../db1db2'; // Sequelize instances

const migrateContentV2 = async () => {
    const { db1, db2 } = db
    const t1 = await db1.transaction()
    const t2 = await db2.transaction()
    try {



        const filePath = path.join(__dirname, '../../id.json');
        const historyID = JSON.parse(readFileSync(filePath, 'utf-8'));

        const ContentDB1 = defineContent(db1);
        const ContentDB2 = defineContent(db2);
        const ContentDetailDB1 = defineContentDetail(db1);
        const ContentDetailDB2 = defineContentDetail(db2);

        const listContent = await ContentDB1.findAll({
            where: { ct_c_id: 4 },
            raw: true
        });

        for (const content of listContent) {
            const newContent = await ContentDB2.create({
                ...omitKeys({
                    ...content,
                    ct_createdBy: 'MigrationSTP',
                    ct_createdDate: formatDateToMySQL(new Date()),
                    ct_publishDate: formatDateToMySQL(new Date()),
                    ct_c_id: 5
                }, ['ct_id'])
            });

            console.log('insert content', newContent.ct_id);
            if (content.ct_id && newContent.ct_id) {
                await addIdChange({ table: 'content', before: content.ct_id, after: newContent.ct_id });
            }

            const listContentDetail = await ContentDetailDB1.findAll({
                where: { ctd_ct_id: content.ct_id },
                raw: true
            });

            for (const detail of listContentDetail) {
                let body = {
                    ...detail,
                    ctd_ct_id: newContent.ct_id
                };

                if (detail.ctd_ama_id) {
                    const mappedAmaId = historyID['accessmenuattribute']?.[detail.ctd_ama_id?.toString()];
                    if (mappedAmaId) {
                        body.ctd_ama_id = mappedAmaId;
                    }
                }


                const newDetail = await ContentDetailDB2.create({ ...omitKeys(body, ['ctd_id']) });
                console.log('insert contentDetail', newDetail.ctd_id);
                if (detail.ctd_id && newDetail.ctd_id) {
                    await addIdChange({ table: 'contentdetail', before: detail.ctd_id, after: newDetail.ctd_id });
                }
            }
        }
        t1.commit()
        t2.commit()
    } catch (err) {
        t1.rollback()
        t2.rollback()
        console.error('❌ Rollback dilakukan karena error:', err);
    }
};

export default migrateContentV2;
