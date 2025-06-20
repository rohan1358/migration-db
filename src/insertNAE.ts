import { db } from "./db/index";
import { contentDetailSchema, contentSchema } from "./db/schema";

const NAEID = [
    {
        "title": "Penandatangan Perubahan Pertama atas Perjanjian Perubahan dan Pernyataan Kembali atas Perjanjian Fasilitas antara Protelindo, Iforte, SUPR, BIT, VTS, IBST dan IPAY dengan PT Bank SMBC Indonesia Tbk",
        "description": "Penandatangan Perubahan Pertama atas Perjanjian Perubahan dan Pernyataan Kembali atas Perjanjian Fasilitas antara Protelindo, Iforte, SUPR, BIT, VTS, IBST dan IPAY dengan PT Bank SMBC Indonesia Tbk",
        "pdf": "content/general/SUPR-SMBCI-Transaksi-Material.pdf",
        "seqno": "1"
    },
    {
        "title": "Penandatangan Perjanjian Perubahan Kesebelas atas Surat Penawaran Fasilitas-Fasilitas Perbankan Tanpa Komitmen antara Protelindo, Iforte, KIN, SUPR, BIT dan IBST dengan JPMorgan Chase Bank, N.A., Cabang Jakarta.",
        "description": "Penandatangan Perjanjian Perubahan Kesebelas atas Surat Penawaran Fasilitas-Fasilitas Perbankan Tanpa Komitmen antara Protelindo, Iforte, KIN, SUPR, BIT dan IBST dengan JPMorgan Chase Bank, N.A., Cabang Jakarta.",
        "pdf": "content/general/SUPR-Transaksi-Material-JPM.pdf",
        "seqno": "2"
    },
    {
        "title": "Penandatangan Perjanjian Perubahan dan Pernyataan Kembali atas Perjanjian Fasilitas antara Protelindo, Iforte, SUPR, BIT dan IPI dengan PT Bank Permata Tbk",
        "description": "Penandatangan Perjanjian Perubahan dan Pernyataan Kembali atas Perjanjian Fasilitas antara Protelindo, Iforte, SUPR, BIT dan IPI dengan PT Bank Permata Tbk",
        "pdf": "content/general/271224-Permata-SUPR-Transaksi-Material-signed.pdf",
        "seqno": "3"
    },
    {
        "title": "Penandatangan Perjanjian Perubahan atas Perjanjian Fasilitas antara Protelindo, Iforte, SUPR, dan IBST dengan MUFG Bank Ltd., Cabang Jakarta",
        "description": "Penandatangan Perjanjian Perubahan atas Perjanjian Fasilitas antara Protelindo, Iforte, SUPR, dan IBST dengan MUFG Bank Ltd., Cabang Jakarta",
        "pdf": "content/general/271224-SUPR-MUFG-Transaksi-Material-signed.pdf",
        "seqno": "4"
    },
    {
        "title": "Penandatangan Perjanjian Perubahan Fasilitas antara Protelindo, Iforte, SUPR, IEN, BIT dan IBST dengan PT Bank Mizuho Indonesia",
        "description": "Penandatangan Perjanjian Perubahan Fasilitas antara Protelindo, Iforte, SUPR, IEN, BIT dan IBST dengan PT Bank Mizuho Indonesia",
        "pdf": "content/general/Mizuho-SUPR-Material-Transaction-signed.pdf",
        "seqno": "5"
    },
    {
        "title": "Penandatangan Perjanjian Perubahan Kedelapan belas atas Perjanjian Fasilitas antara Protelindo, Iforte, KIN, SUPR, BIT, QTR, GIK, VTS, IFEN, IBST, IPAY dan IGPU dengan PT Bank Central Asia Tbk",
        "description": "Penandatangan Perjanjian Perubahan Kedelapan belas atas Perjanjian Fasilitas antara Protelindo, Iforte, KIN, SUPR, BIT, QTR, GIK, VTS, IFEN, IBST, IPAY dan IGPU dengan PT Bank Central Asia Tbk",
        "pdf": "content/general/231224-SUPR-BCA-Transaksi-Material-signed.pdf",
        "seqno": "6"
    },
    {
        "title": "Perubahan atas Perjanjian Fasilitas antara SUPR, IBST, Protelindo, Iforte, KIN, BIT, QTR, GIK, VTS, IFEN, dan IPAY dengan PT Bank Central Asia Tbk",
        "description": "Perubahan atas Perjanjian Fasilitas antara SUPR, IBST, Protelindo, Iforte, KIN, BIT, QTR, GIK, VTS, IFEN, dan IPAY dengan PT Bank Central Asia Tbk",
        "pdf": "",
        "seqno": "7"
    },
    {
        "title": "Penandatangan Perjanjian Kredit antara SUPR, Protelindo, Iforte, IBST dengan PT Bank CIMB Niaga Tbk",
        "description": "Penandatangan Perjanjian Kredit antara SUPR, Protelindo, Iforte, IBST dengan PT Bank CIMB Niaga Tbk",
        "pdf": "content/general/111224-SUPR-Transaksi-Material-signed.pdf",
        "seqno": "8"
    },
    {
        "title": "Penandatangan Perjanjian Fasilitas Bersama Pembiayaan antara SUPR, Protelindo, Iforte, IBST dengan PT Bank Syariah Indonesia Tbk",
        "description": "Penandatangan Perjanjian Fasilitas Bersama Pembiayaan antara SUPR, Protelindo, Iforte, IBST dengan PT Bank Syariah Indonesia Tbk",
        "pdf": "content/general/281124_SUPR_Informasi-Material-BSI.pdf",
        "seqno": "9"
    },
    {
        "title": "Penandatangan Perubahan dan Pernyataan Kembali atas Perjanjian Fasilitas antara PT Profesional Telekomunikasi Indonesia sebagai Peminjam, PT Iforte Solusi Infotek dan PT Solusi Tunas Pratama Tbk sebagai Penanggung dengan Bank of China, Cabang Jakarta",
        "description": "Penandatangan Perubahan dan Pernyataan Kembali atas Perjanjian Fasilitas antara PT Profesional Telekomunikasi Indonesia sebagai Peminjam, PT Iforte Solusi Infotek dan PT Solusi Tunas Pratama Tbk sebagai Penanggung dengan Bank of China, Cabang Jakarta",
        "pdf": "content/general/11112024_Informasi-Material_SUPR-FN.pdf",
        "seqno": "10"
    }
]

const NAEEN = [
    {
        "title": "Signing of the First Amendment to the Amendment and Restatement Agreement to the Facility Agreement by Protelindo, Iforte, SUPR, BIT, VTS, IBST and IPAY with PT Bank SMBC Indonesia Tbk",
        "description": "Signing of the First Amendment to the Amendment and Restatement Agreement to the Facility Agreement by Protelindo, Iforte, SUPR, BIT, VTS, IBST and IPAY with PT Bank SMBC Indonesia Tbk",
        "pdf": "",
        "seqno": "1"
    },
    {
        "title": "Signing of the Eleventh Amendment Letter to the Uncommitted Banking Facility Offer Letter between Protelindo, Iforte, KIN, SUPR, BIT and IBST with JPMorgan Chase Bank., N.A., Jakarta Branch.",
        "description": "Signing of the Eleventh Amendment Letter to the Uncommitted Banking Facility Offer Letter between Protelindo, Iforte, KIN, SUPR, BIT and IBST with JPMorgan Chase Bank., N.A., Jakarta Branch.",
        "pdf": "",
        "seqno": "2"
    },
    {
        "title": "Signing of Amendment and Restatement Agreement to the Facility Agreement by Protelindo, Iforte, SUPR, BIT and IPI with PT Bank Permata Tbk",
        "description": "Signing of Amendment and Restatement Agreement to the Facility Agreement by Protelindo, Iforte, SUPR, BIT and IPI with PT Bank Permata Tbk",
        "pdf": "",
        "seqno": "3"
    },
    {
        "title": "Signing of Amendment Agreement to the Facility Agreement by Protelindo, Iforte, SUPR and IBST with MUFG Bank Ltd., Jakarta Branch",
        "description": "Signing of Amendment Agreement to the Facility Agreement by Protelindo, Iforte, SUPR and IBST with MUFG Bank Ltd., Jakarta Branch",
        "pdf": "",
        "seqno": "4"
    },
    {
        "title": "Signing of Amendment to the Facility Agreement by Protelindo, Iforte, SUPR, IEN, BIT and IBST with PT Bank Mizuho Indonesia",
        "description": "Signing of Amendment to the Facility Agreement by Protelindo, Iforte, SUPR, IEN, BIT and IBST with PT Bank Mizuho Indonesia",
        "pdf": "",
        "seqno": "5"
    },
    {
        "title": "Signing of the Eighteenth Amendment to the Facility Agreement by Protelindo, Iforte, KIN, SUPR, BIT, QTR, GIK, VTS, IFEN, IBST, IPAY and IGPU with PT Bank Central Asia Tbk",
        "description": "Signing of the Eighteenth Amendment to the Facility Agreement by Protelindo, Iforte, KIN, SUPR, BIT, QTR, GIK, VTS, IFEN, IBST, IPAY and IGPU with PT Bank Central Asia Tbk",
        "pdf": "",
        "seqno": "6"
    },
    {
        "title": "Amendment to the Facility Agreement by SUPR, IBST, Protelindo, Iforte, KIN, BIT, QTR, GIK, VTS, IFEN, and IPAY with PT Bank Central Asia Tbk",
        "description": "Amendment to the Facility Agreement by SUPR, IBST, Protelindo, Iforte, KIN, BIT, QTR, GIK, VTS, IFEN, and IPAY with PT Bank Central Asia Tbk",
        "pdf": "",
        "seqno": "7"
    },
    {
        "title": "Signing of Credit Agreement between SUPR, Protelindo, Iforte, IBST with PT Bank CIMB Niaga Tbk",
        "description": "Signing of Credit Agreement between SUPR, Protelindo, Iforte, IBST with PT Bank CIMB Niaga Tbk",
        "pdf": "",
        "seqno": "8"
    },
    {
        "title": "Signing of Jointly Facility Agreement between SUPR, Protelindo, Iforte, IBST with PT Bank Syariah Indonesia Tbk",
        "description": "Signing of Jointly Facility Agreement between SUPR, Protelindo, Iforte, IBST with PT Bank Syariah Indonesia Tbk",
        "pdf": "",
        "seqno": "9"
    },
    {
        "title": "The signing of Amendment and Restatement of the Facility Agreement between PT Profesional Telekomunikasi Indonesia as the Borrower, PT Iforte Solusi Infotek and PT Solusi Tunas Pratama Tbk as the Guarantor with Bank of China, Jakarta Branch",
        "description": "The signing of Amendment and Restatement of the Facility Agreement between PT Profesional Telekomunikasi Indonesia as the Borrower, PT Iforte Solusi Infotek and PT Solusi Tunas Pratama Tbk as the Guarantor with Bank of China, Jakarta Branch",
        "pdf": "",
        "seqno": "10"
    }
]





// const mergeAnnualReport = [{ pdf: "content/general/Laporan-Tahunan-STP-2011.pdf", subjectID: "LAPORAN TAHUNAN 2011", subjectEN: "ANNUAL REPORT 2011" }]

function formatDateToMySQL(date: Date): string {
    const pad = (n: number) => n.toString().padStart(2, '0');

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1); // bulan dimulai dari 0
    const day = pad(date.getDate());

    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function formatDateToYMD(date: Date): string {
    const pad = (n: number) => n.toString().padStart(2, '0');

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1); // bulan dimulai dari 0
    const day = pad(date.getDate());

    return `${year}-${month}-${day}`;
}

async function insertNAE() {

    const mergeAnnualReport = NAEID.map((item, index) => ({
        description: item.description,
        pdf: item.pdf,
        subjectID: item.title,
        subjectEN: NAEEN[index]?.title || '',
        pdfEN: NAEEN[index]?.pdf || '',
        seqno: item.seqno,
        descriptionEN: NAEEN[index]?.description
    }));
    // Insert
    //   await db.insert(contentDetailSchema).values({ name: "Alice", age: 30 });

    for (let index = 0; index < mergeAnnualReport.length; index++) {
        const element = mergeAnnualReport[index];



        // content
        let content = {
            ct_c_id: 4,
            ct_am_id: 292,
            ct_subject: element.subjectID,
            ct_slug_ID: element.subjectID.replace(' ', '-').toLocaleLowerCase(),
            ct_slug_EN: element.subjectEN.replace(' ', '-').toLocaleLowerCase(),
            ct_isPublished: 1,
            ct_publishDate: formatDateToMySQL(new Date()),
            ct_cts_id: 3,
            ct_createdDate: formatDateToMySQL(new Date()),
            ct_createdBy: "Admin",
            ct_meta_title_EN: null,
            ct_meta_title_ID: null,
            ct_meta_description_ID: "-",
            ct_meta_description_EN: "-",
        }
        // console.log('insert data', content)
        const insertContent = await db.insert(contentSchema).values(content).$returningId()
        console.log('ct_id', insertContent[0].ct_id)
        const generateContentDetail = (ctd_value: string, ctd_ama_id: number) => {
            return {
                // ctd_ct_id: 1,
                ctd_ct_id: insertContent[0].ct_id,
                ctd_ama_id: ctd_ama_id,
                ctd_value: ctd_value,
                ctd_rec_status: 1,
                ctd_createdDate: formatDateToMySQL(new Date()),
                ctd_createdBy: "Admin",
            }
        }

        let seqno = generateContentDetail(element.seqno, 2537)
        let linkPDFEN = generateContentDetail(element.pdf, 2536)
        let linkPDFID = generateContentDetail(element.pdf, 2535)
        let descriptionEN = generateContentDetail(element.descriptionEN, 2534)
        let descriptionID = generateContentDetail(element.description, 2533)
        let titleEN = generateContentDetail(element.subjectEN, 2532)
        let titleID = generateContentDetail(element.subjectID, 2531)


        let contentDetail = [seqno,
            linkPDFEN,
            linkPDFID,
            descriptionEN,
            descriptionID,
            titleEN,
            titleID]

        for (let index = 0; index < contentDetail.length; index++) {
            const cd = contentDetail[index];
            await db.insert(contentDetailSchema).values(cd)
            console.log('content detail', cd)
        }

    }

    // insertContent[0]

    // Select
    // const result = await db.select().from(contentDetailSchema);
    // console.log(result);
}

// insertNAE().catch(console.error);
export default insertNAE
