// import { db, db2 } from "./db"
import { Op } from "sequelize";
import { defineAccess } from "./db/access";
import { accessMenuSchema } from "./db/schema"

import db from './db/sequelize'


const testConnection = async () => {

    try {
        await db.db1.authenticate();
        console.log('berhasil akses ke db1')

    } catch (err) {
        console.log('gagal akses ke db1')
    }
    try {
        await db.db2.authenticate();
        console.log('berhasil akses ke db2')

    } catch (err) {
        console.log('gagal akses ke db2')
    }
    // const Content1 = defineAccess(db.db1);
    // const Content2 = defineAccess(db.db2);

    // await db.db1.authenticate();
    // await db.db2.authenticate();

    // const contents = await Content1.findAll();
    // const contents2 = await Content2.findAll();

    // if (contents && contents.length > 0) {
    //     console.log('berhasil akses ke db1')
    // }
    // if (contents2 && contents2.length > 0) {
    //     console.log('berhasil akses ke db2')
    // }

    // try {
    //     let accessMenu = await db.select().from(accessMenuSchema)
    //     console.log('access menu', accessMenu)
    // } catch (err) {
    //     console.log('gagal fetch database')
    // }
}

export default testConnection