import { formatDateToMySQL } from "../insertAnnualReport";
import { addIdChange } from "../addIdChange";
import { db, db2 } from "../db/index"
import { contentDetailSchema, contentSchema } from "../db/schema"
import { eq } from "drizzle-orm";
import { readFileSync } from "fs";
import path from "path";

const migrateContent = async () => {
    const filePath = path.join(__dirname, '../../id.json');
    let historyID = JSON.parse(readFileSync(filePath, 'utf-8'));
    const listContent = await db.select().from(contentSchema).where(eq(contentSchema.ct_c_id, 4))
    // console.log('listContent', listContent)
    // return
    if (listContent) {
        for (let index = 0; index < listContent.length; index++) {
            const content = listContent[index];

            console.log('ctd_ama_id', historyID['accessmenuattribute']['2476'])


            const insertContent = await db2.insert(contentSchema).values({ ...content, ct_createdBy: 'MigrationSTP', ct_createdDate: formatDateToMySQL(new Date()), ct_publishDate: formatDateToMySQL(new Date()), ct_c_id : 5 }).$returningId()
            console.log('insert content', insertContent[0].ct_id)
            await addIdChange({ table: 'content', before: content.ct_id, after: insertContent[0].ct_id })

            const listContentDetail = await db.select().from(contentDetailSchema).where(eq(contentDetailSchema.ctd_ct_id, content.ct_id));
            if (listContentDetail) {
                for (let index = 0; index < listContentDetail.length; index++) {
                    const contentDetail = listContentDetail[index];

                    // console.log('contentDetail', contentDetail.ctd_ama_id)
                    // return

                    const ctd_ama_id = historyID['accessmenuattribute'][contentDetail.ctd_ama_id.toString()]
                    let body = { ...contentDetail, ctd_ct_id: insertContent[0].ct_id }
                    if (ctd_ama_id) {
                        body = { ...body, ctd_ama_id: historyID['accessmenuattribute'][contentDetail.ctd_ama_id] }
                    }
                    const insertContentDetail = await db2.insert(contentDetailSchema).values(body).$returningId()
                    console.log('insert content', insertContentDetail[0].ctd_id)
                    await addIdChange({ table: 'contentdetail', before: contentDetail.ctd_id, after: insertContentDetail[0].ctd_id })


                }
            }
        }
    }
}

export default migrateContent
