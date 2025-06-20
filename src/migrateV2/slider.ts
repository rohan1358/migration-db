import { eq } from "drizzle-orm";
import { db, db2 } from "../db/index"
import { contentDetailSchema, contentSchema } from "../db/schema"
import * as fs from "fs/promises";
import path from "path";
import { readFileSync } from "fs";
import { addIdChange } from "../addIdChange";



const migrateContentSlider = async () => {
    try {

        let listContent = await db.select().from(contentSchema)
            // .innerJoin(contentSchema, eq(contentSchema.ct_id, contentDetailSchema.ctd_ct_id))
            .where(eq(contentSchema.ct_am_id, 283))

        let allContent = []

        if (listContent) {

            // loop content
            for (let index = 0; index < listContent.length; index++) {
                const content = listContent[index];

                // insert content
                console.log('insert content')
                // let insertContent = await db2.insert(contentSchema).values(content).$returningId()
                addIdChange({
                    table: 'content', before: content.ct_id, after: content.ct_id
                    // insertContent[0].ct_id
                })

                let listContentDetail = await db.select().from(contentDetailSchema)
                    .where(eq(contentDetailSchema.ctd_ct_id, content.ct_id))


                // loop contentDetail
                for (let index = 0; index < listContentDetail.length; index++) {
                    const contentDetail = listContentDetail[index];

                    // insert content detail
                    console.log('insert content detail')
                    // let insertContentDetail = await db2.insert(contentDetailSchema).values({ ...contentDetail, ctd_ct_id: insertContent[0].ct_id }).$returningId()
                    await addIdChange({
                        table: 'contentDetail', before: contentDetail.ctd_id, after: contentDetail.ctd_id
                        // insertContent[0].ct_id
                    })
                }
                allContent.push({ content: content, contentDetail: listContentDetail })

            }
            // listContent.map(ct => {

            // })
        }

        await fs.writeFile("src/data.json", JSON.stringify(allContent, null, 2), "utf-8");

    } catch (err) {

    }
}

// const migrateAccessMenu = async () => {
//     db.select()
// }

export default migrateContentSlider