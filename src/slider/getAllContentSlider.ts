import { eq } from "drizzle-orm";
import { db } from "../db/index"
import { contentDetailSchema, contentSchema } from "../db/schema"
import * as fs from "fs/promises";

const getAllContentSlider = async () => {
    try {

        let listContent = await db.select().from(contentSchema)
            // .innerJoin(contentSchema, eq(contentSchema.ct_id, contentDetailSchema.ctd_ct_id))
            .where(eq(contentSchema.ct_am_id, 283))
        console.log('listContent', listContent)
        let allContent = []
        if (listContent) {
            for (let index = 0; index < listContent.length; index++) {
                const content = listContent[index];
                let listContentDetail = await db.select().from(contentDetailSchema)
                    .where(eq(contentDetailSchema.ctd_ct_id, content.ct_id))
                allContent.push({ content: content, contentDetail: listContentDetail })
            }
            // listContent.map(ct => {

            // })
        }
        await fs.writeFile("data.json", JSON.stringify(allContent, null, 2), "utf-8");

    } catch (err) {

    }
}

export default getAllContentSlider