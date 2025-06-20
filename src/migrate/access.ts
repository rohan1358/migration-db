import { gt, eq } from "drizzle-orm";
import { db, db2 } from "../db/index"
import { accessListSchema, accessMenuAttributeSchema, accessMenuSchema, accessSchema } from "../db/schema"
import { addIdChange } from "../addIdChange";

const migrateAccess = async () => {
    let listAccessMenu = await db.select().from(accessMenuSchema).where(gt(accessMenuSchema.am_id, 282))
    if (listAccessMenu) {
        for (let index = 0; index < listAccessMenu.length; index++) {
            const accessMenu = listAccessMenu[index];
            console.log("accessMenu", accessMenu)

            

            return

            // insert access menu ke production db
            const insertAccessMenu = await db2.insert(accessMenuSchema).values(accessMenu).$returningId()
            console.log('insert accessmenu')

            await addIdChange({ table: 'accessmenu', before: accessMenu.am_id, after: insertAccessMenu[0].am_id });

            // get access by accessMenu
            let listAccess = await db.select().from(accessSchema).where(eq(accessSchema.a_am_id, accessMenu.am_id));

            if (listAccess) {
                for (let index = 0; index < listAccess.length; index++) {
                    const elementAccess = listAccess[index];

                    // insert access ke production db
                    const insertAccess = await db2.insert(accessSchema).values({ ...elementAccess, a_am_id: insertAccessMenu[0].am_id }).$returningId()
                    await addIdChange({ table: 'access', before: elementAccess.a_id, after: insertAccess[0].a_id });

                    let listAccessList = await db.select().from(accessListSchema).where(eq(accessListSchema.al_a_id, insertAccess[0].a_id));

                    if (listAccessList) {
                        // insert accesslist ke production db
                        const insertAccessList = await db2.insert(accessListSchema).values({ ...listAccessList[0], al_a_id: insertAccess[0].a_id }).$returningId()
                        await addIdChange({ table: 'accesslist', before: listAccessList[0].al_id, after: insertAccessList[0].al_id });
                    }
                }
            }

            let listAccessMenuAttribute = await db.select().from(accessMenuAttributeSchema).where(eq(accessMenuAttributeSchema.ama_am_id, accessMenu.am_id))
            if (listAccessMenuAttribute) {
                for (let index = 0; index < listAccessMenuAttribute.length; index++) {
                    const accessMenuAttribute = listAccessMenuAttribute[index];
                    // insert accessmenuattribute ke production db
                    const insertAccessMenuAttribute = await db2.insert(accessMenuAttributeSchema).values({ ...accessMenuAttribute, ama_am_id: insertAccessMenu[0].am_id }).$returningId()
                    await addIdChange({ table: 'accessmenuattribute', before: accessMenuAttribute.ama_id, after: insertAccessMenuAttribute[0].ama_id })
                }
            }


        }
    }
}

export default migrateAccess;