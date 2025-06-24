// migrateAccessV2.ts
import db from '../db/sequelize'; // masing-masing Sequelize instance
import { defineAccessMenu, defineAccessMenuAttribute, defineContent, defineContentDetail, defineAccess, defineAccessList } from '../db/model'; // model harus bisa didaftarkan ulang untuk kedua db
import { addIdChange } from '../addIdChange';
import { Op } from 'sequelize'
import omitKeys from '../omitKeys';
import migrateContentV2 from './content';

export const migrateAccessV2 = async () => {
    const { db1, db2 } = db

    const t1 = await db1.transaction()
    const t2 = await db2.transaction()

    try {


        const AccessMenuDB1 = defineAccessMenu(db1);
        const AccessMenuDB2 = defineAccessMenu(db2);
        const AccessDB1 = defineAccess(db1);
        const AccessDB2 = defineAccess(db2);
        const AccessListDB1 = defineAccessList(db1);
        const AccessListDB2 = defineAccessList(db2);
        const AccessMenuAttributeDB1 = defineAccessMenuAttribute(db1);
        const AccessMenuAttributeDB2 = defineAccessMenuAttribute(db2);

        const listAccessMenu = await AccessMenuDB1.findAll({
            where: {
                am_id: { [Op.gt]: 297 } // mengambil data dengan id diatas 297, ex : 298, 299, dst
            },
            raw: true
        });

        for (const accessMenu of listAccessMenu) {
            console.log("accessMenu", accessMenu);

            // Insert ke DB2
            const newAccessMenu = await AccessMenuDB2.create({ ...omitKeys(accessMenu, ["am_id"]) });
            console.log('insert accessmenu');


            if (accessMenu.am_id && newAccessMenu.am_id) {
                await addIdChange({ table: 'accessmenu', before: accessMenu.am_id, after: newAccessMenu.am_id });
            }


            // Get access dari DB1 berdasarkan accessMenu
            const listAccess = await AccessDB1.findAll({
                where: { a_am_id: accessMenu.am_id },
                raw: true
            });

            for (const access of listAccess) {
                const newAccess = await AccessDB2.create({
                    ...omitKeys({
                        ...access,
                        a_am_id: newAccessMenu.am_id
                    }, ['a_id'])
                });

                if (access.a_id && newAccess.a_id) {
                    await addIdChange({ table: 'access', before: access.a_id, after: newAccess.a_id });
                }


                const listAccessList = await AccessListDB1.findAll({
                    where: { al_a_id: access.a_id },
                    raw: true
                });

                if (listAccessList.length > 0) {
                    const newAccessList = await AccessListDB2.create({
                        ...omitKeys({
                            ...listAccessList[0],
                            al_a_id: newAccess.a_id
                        }, ['al_id'])
                    });

                    if (listAccessList[0].al_id && newAccessList.al_id) {
                        await addIdChange({
                            table: 'accesslist',
                            before: listAccessList[0].al_id,
                            after: newAccessList.al_id
                        });
                    }


                }
            }

            // Migrate AccessMenuAttribute
            const listAttr = await AccessMenuAttributeDB1.findAll({
                where: { ama_am_id: accessMenu.am_id },
                raw: true
            });

            for (const attr of listAttr) {
                const newAttr = await AccessMenuAttributeDB2.create({
                    ...omitKeys({
                        ...attr,
                        ama_am_id: newAccessMenu.am_id
                    }, ['ama_id'])
                });

                if (attr.ama_id && newAttr.ama_id) {
                    await addIdChange({
                        table: 'accessmenuattribute',
                        before: attr.ama_id,
                        after: newAttr.ama_id
                    });
                }


            }
            if (accessMenu.am_id && typeof accessMenu.am_id === 'number') {
                migrateContentV2({ am_id: accessMenu.am_id })
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
