import { readFileSync } from "fs";
import path from "path";
import * as fs from "fs/promises";

export const addIdChange = async ({ table, before, after }: { table: string, before: string | number, after: string | number }) => {
    try {
        console.log('masuk ke sini gk')
        // let data = require('../../id.json')
        const filePath = path.join(__dirname, '../id.json');
        let data = JSON.parse(readFileSync(filePath, 'utf-8'));

        console.log('data', data)

        if (data[table]) {
            console.log('tambah')
            data[table] = { ...data[table], [before]: after }
        } else if (data) {
            console.log('create baru')
            data[table] = { [before]: after }
        } else {
            data = { [table]: { [before]: after } }
        }

        await fs.writeFile("id.json", JSON.stringify(data, null, 2), "utf-8");
        return
    } catch (err) {
        console.log('failed add id', err)
        return
    }

}