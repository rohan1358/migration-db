import { readFileSync } from 'fs';
import path from 'path';
import { formatDateToMySQL } from '../insertAnnualReport';
import { addIdChange } from '../addIdChange';
import { Sequelize } from 'sequelize';

import { defineContent, defineContentDetail } from '../db/model';
import db from '../db/sequelize'
import omitKeys from '../omitKeys';
// import { db1, db2 } from '../db1db2'; // Sequelize instances

const destroyContentV2 = async () => {
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

        const listContent = await ContentDB2.findAll({
            where: { ct_c_id: 5 },
            raw: true
        });

        for (const content of listContent) {
            console.log('destroy contentdetail with ctd_ct_id :', content.ct_id)
            const destroyContentDetail = await ContentDetailDB2.destroy({
                where: {
                    ctd_ct_id: content.ct_id
                }
            });

            console.log('destroy content with ct_id :', content.ct_id)
            const destroyContent = await ContentDB2.destroy({
                where: {
                    ct_id: content.ct_id
                }
            });
        }
        t1.commit()
        t2.commit()
    } catch (err) {
        t1.rollback()
        t2.rollback()
        console.error('❌ Rollback dilakukan karena error:', err);
    }
};

export default destroyContentV2;
