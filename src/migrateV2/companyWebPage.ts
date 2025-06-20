import { readFileSync } from 'fs';
import path from 'path';
import { formatDateToMySQL } from '../insertAnnualReport';
import { addIdChange } from '../addIdChange';
import s, { Sequelize, Transaction } from 'sequelize';

import { defineCompanyWebPage, defineContent, defineContentDetail } from '../db/model';
import db from '../db/sequelize'
import omitKeys from '../omitKeys';
// import { db1, db2 } from '../db1db2'; // Sequelize instances

const migrateCompanyWebPageV2 = async () => {
    const { db1, db2 } = db

    const t1 = await db1.transaction()
    const t2 = await db2.transaction()

    try {
        const filePath = path.join(__dirname, '../../id.json');
        const historyID = JSON.parse(readFileSync(filePath, 'utf-8'));

        const CWPDB1 = defineCompanyWebPage(db1);
        const CWPDB2 = defineCompanyWebPage(db2);
        const ContentDetailDB1 = defineContentDetail(db1);
        const ContentDetailDB2 = defineContentDetail(db2);

        const listCompanyWebPage = await CWPDB1.findAll({
            where: { cwp_c_id: 4 },
            raw: true
        });

        for (const cwp of listCompanyWebPage) {
            console.log('cwp', cwp)
            // const insertCWP = await CWPDB2.create({ ...omitKeys(cwp, ['blablabla']), cwp_c_id: 5 })
            const insertCWP = await CWPDB2.create({ ...omitKeys(cwp, ['cwp_id']), cwp_c_id: 5 })
            if (insertCWP.cwp_id && cwp.cwp_id) {
                addIdChange({ table: 'companywebpage', before: cwp.cwp_id, after: insertCWP.cwp_id })
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

export default migrateCompanyWebPageV2;
