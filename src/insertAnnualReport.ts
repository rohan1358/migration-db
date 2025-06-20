import { db } from "./db/index";
import { contentDetailSchema, contentSchema } from "./db/schema";

const annualReportID = [
    { pdf: "content/general/Laporan-Tahunan-STP-2011.pdf", title: "LAPORAN TAHUNAN 2011" },
    { pdf: "content/general/Annual-Report-2012-STP_FINAL.pdf", title: "LAPORAN TAHUNAN 2012" },
    { pdf: "content/general/Annual_Report_STP_2013_IND.pdf", title: "LAPORAN TAHUNAN 2013" },
    { pdf: "content/general/Annual_Report_STP_2014_IND.pdf", title: "LAPORAN TAHUNAN 2014" },
    { pdf: "content/general/Annual_Report_STP_2015_IND.pdf", title: "LAPORAN TAHUNAN 2015" },
    { pdf: "content/general/STP_AR_Bahasa_12May2017.pdf", title: "LAPORAN TAHUNAN 2016" },
    { pdf: "content/general/STP_AR2017_ID.pdf", title: "LAPORAN TAHUNAN 2017" },
    { pdf: "content/general/1.-Laporan-Tahunan-STP-2018-Bahasa.pdf", title: "LAPORAN TAHUNAN 2018" },
    { pdf: "content/general/Laporan-Tahunan-STP-2019.pdf", title: "LAPORAN TAHUNAN 2019" },
    { pdf: "content/general/AR-STP-2020-ID.pdf", title: "LAPORAN TAHUNAN 2020" },
    { pdf: "content/general/Laporan-Tahunan-STP-2021.pdf", title: "LAPORAN TAHUNAN 2021" },
    { pdf: "content/general/Annual-Report-2022.pdf", title: "LAPORAN TAHUNAN 2022" },
    { pdf: "content/general/Laporan-Tahunan-2023-SUPR-1.pdf", title: "LAPORAN TAHUNAN 2023" },
    { pdf: "content/general/Artwork-AR-STP-2024-2603.pdf", title: "LAPORAN TAHUNAN 2024" }
];

const annualReportEN = [
    { pdf: "content/general/Laporan-Tahunan-STP-2011.pdf", title: "ANNUAL REPORT 2011" },
    { pdf: "content/general/Annual-Report-2012-STP_FINAL.pdf", title: "ANNUAL REPORT 2012" },
    { pdf: "content/general/Annual_Report_STP_2013_IND.pdf", title: "ANNUAL REPORT 2013" },
    { pdf: "content/general/Annual_Report_STP_2014_ENG.pdf", title: "ANNUAL REPORT 2014" },
    { pdf: "content/general/Annual_Report_STP_2015_ENG.pdf", title: "ANNUAL REPORT 2015" },
    { pdf: "content/general/STP_AR_English_15May2017.pdf", title: "ANNUAL REPORT 2016" },
    { pdf: "content/general/STP_AR2017_EN.pdf", title: "ANNUAL REPORT 2017" },
    { pdf: "content/general/2.-Annual-Report-STP-2018-English.pdf", title: "ANNUAL REPORT 2018" },
    { pdf: "content/general/Annual-Report-STP-2019.pdf", title: "ANNUAL REPORT 2019" },
    { pdf: "content/general/AR-STP-2020-English.pdf", title: "ANNUAL REPORT 2020" },
    { pdf: "content/general/Laporan-Tahunan-STP-2021.pdf", title: "ANNUAL REPORT 2021" },
    { pdf: "content/general/Annual-Report-2022.pdf", title: "ANNUAL REPORT 2022" },
    { pdf: "content/general/SUPR-2023-Annual-Report-1.pdf", title: "ANNUAL REPORT 2023" },
    { pdf: "content/general/Artwork-AR-STP-2024-2603.pdf", title: "ANNUAL REPORT 2024" }
];

// const mergeAnnualReport = [{ pdf: "content/general/Laporan-Tahunan-STP-2011.pdf", subjectID: "LAPORAN TAHUNAN 2011", subjectEN: "ANNUAL REPORT 2011" }]

export function formatDateToMySQL(date: Date): string {
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

async function insertAnnualReport() {

    const mergeAnnualReport = annualReportID.map((item, index) => ({
        pdf: item.pdf,
        subjectID: item.title,
        subjectEN: annualReportEN[index]?.title || '',
    }));
    // Insert
    //   await db.insert(contentDetailSchema).values({ name: "Alice", age: 30 });

    for (let index = 0; index < mergeAnnualReport.length; index++) {
        const element = mergeAnnualReport[index];



        // content
        let content = {
            ct_c_id: 4,
            ct_am_id: 37,
            ct_subject: element.subjectID,
            ct_slug_ID: element.subjectID.replace(' ', '-').toLocaleLowerCase(),
            ct_slug_EN: element.subjectEN.replace(' ', '-').toLocaleLowerCase(),
            ct_isPublished: 1,
            ct_publishDate: formatDateToMySQL(new Date()),
            ct_cts_id: 3,
            ct_createdDate: formatDateToMySQL(new Date()),
            ct_createdBy: "Admin",
        }
        const insertContent = await db.insert(contentSchema).values(content).$returningId()
        console.log('ct_id', insertContent[0].ct_id)
        const generateContentDetail = (ctd_value: string, ctd_ama_id: number) => {
            return {
                ctd_ct_id: insertContent[0].ct_id,
                ctd_ama_id: ctd_ama_id,
                ctd_value: ctd_value,
                ctd_rec_status: 1,
                ctd_createdDate: formatDateToMySQL(new Date),
                ctd_createdBy: "Admin",
            }
        }

        let subjectID = generateContentDetail(element.subjectID, 84)
        let subjectEN = generateContentDetail(element.subjectEN, 85)
        let reportDate = generateContentDetail("2012-11-11", 81)
        let icon = generateContentDetail("-", 83)
        let fileID = generateContentDetail(element.pdf, 362)
        let fileEN = generateContentDetail(element.pdf, 363)

        let contentDetail = [subjectID, subjectEN, reportDate, icon, fileID, fileEN]

        for (let index = 0; index < contentDetail.length; index++) {
            const cd = contentDetail[index];
            await db.insert(contentDetailSchema).values(cd)
        }

    }

    // insertContent[0]

    // Select
    // const result = await db.select().from(contentDetailSchema);
    // console.log(result);
}

// insertAnnualReport().catch(console.error);
// export default insertAnnualReport