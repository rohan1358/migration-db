import { db } from "./db/index";
import { contentDetailSchema, contentSchema } from "./db/schema";




const financialReportID = [
    {
        "pdf": "content/general/Audited_FS_STP_FY2011-2010.pdf",
        "title": "LAPORAN KEUANGAN 2010-2011"
    },
    {
        "pdf": "content/general/STP-Financial-2012-2011.pdf",
        "title": "LAPORAN KEUANGAN 2012"
    },
    {
        "pdf": "content/general/STP-Financial-Q1-2013.pdf",
        "title": "LAPORAN KEUANGAN Q1 2013"
    },
    {
        "pdf": "content/general/STP-Financial-Q2-2013.pdf",
        "title": "LAPORAN KEUANGAN Q2 2013"
    },
    {
        "pdf": "content/general/STP-Financial-Q3-2013.pdf",
        "title": "LAPORAN KEUANGAN Q3 2013"
    },
    {
        "pdf": "content/general/STP-Audited-Financial-Report-2013.pdf",
        "title": "LAPORAN KEUANGAN 2013"
    },
    {
        "pdf": "content/general/STP-Financial-Q1-2014.pdf",
        "title": "LAPORAN KEUANGAN Q1 2014"
    },
    {
        "pdf": "content/general/STP-Financial-Q2-2014.pdf",
        "title": "LAPORAN KEUANGAN Q2 2014"
    },
    {
        "pdf": "content/general/STP-Financial-Q3-2014.pdf",
        "title": "LAPORAN KEUANGAN Q3 2014"
    },
    {
        "pdf": "content/general/STP-Financial-2014.pdf",
        "title": "LAPORAN KEUANGAN 2014"
    },
    {
        "pdf": "content/general/STP%20Financial%20Q1%202015.pdf",
        "title": "LAPORAN KEUANGAN Q1 2015"
    },
    {
        "pdf": "content/general/STP-Financial-Q2-2015.pdf",
        "title": "LAPORAN KEUANGAN Q2 2015"
    },
    {
        "pdf": "content/general/STP-Financial-Q3-2015.pdf",
        "title": "LAPORAN KEUANGAN Q3 2015"
    },
    {
        "pdf": "content/general/STP-Financial-2015.pdf",
        "title": "LAPORAN KEUANGAN 2015"
    },
    {
        "pdf": "content/general/STP-Financial-Q1-2016.pdf",
        "title": "LAPORAN KEUANGAN Q1 2016"
    },
    {
        "pdf": "content/general/STP-Financial-Statement-1H-2016.pdf",
        "title": "LAPORAN KEUANGAN Q2 2016"
    },
    {
        "pdf": "content/general/STP-Financial-Statement-9M-2016.pdf",
        "title": "LAPORAN KEUANGAN Q3 2016"
    },
    {
        "pdf": "content/general/STP-Financial-Statement-FY-2016.pdf",
        "title": "LAPORAN KEUANGAN 2016"
    },
    {
        "pdf": "content/general/STP-Financial-Statement-1Q-2017.pdf",
        "title": "LAPORAN KEUANGAN 1Q 2017"
    },
    {
        "pdf": "content/general/STP-Financial-Statement-1H-2017.pdf",
        "title": "LAPORAN KEUANGAN 2Q 2017"
    },
    {
        "pdf": "content/general/STP-Financial-Statement-3Q-2017.pdf",
        "title": "LAPORAN KEUANGAN 3Q 2017"
    },
    {
        "pdf": "content/general/STP-Financial-Statement-4Q-2017.pdf",
        "title": "LAPORAN KEUANGAN 2017"
    },
    {
        "pdf": "content/general/STP-Maret-2018.pdf",
        "title": "LAPORAN KEUANGAN 1Q 2018"
    },
    {
        "pdf": "content/general/STP-Financial-Statement-2Q-2018.pdf",
        "title": "LAPORAN KEUANGAN 2Q 2018"
    },
    {
        "pdf": "content/general/FS-STP-30-SEPT-2018.pdf",
        "title": "LAPORAN KEUANGAN 3Q 2018"
    },
    {
        "pdf": "content/general/Solusi-Tunas-Pratama-GA-31-Des-2018.pdf",
        "title": "LAPORAN KEUANGAN 2018"
    },
    {
        "pdf": "content/general/Solusi-Tunas-Pratama-Q1-Mar19.pdf",
        "title": "LAPORAN KEUANGAN 1Q 2019"
    },
    {
        "pdf": "content/general/STP-Financial-Statement-2Q-2019.pdf",
        "title": "LAPORAN KEUANGAN 2Q 2019"
    },
    {
        "pdf": "content/general/2019Q3.pdf",
        "title": "LAPORAN KEUANGAN 3Q 2019"
    },
    {
        "pdf": "content/general/2019Q4-STP-Financial-Statements.pdf",
        "title": "LAPORAN KEUANGAN 2019"
    },
    {
        "pdf": "content/general/2020Q1-STP-Financial-Statements.pdf",
        "title": "LAPORAN KEUANGAN 1Q 2020"
    },
    {
        "pdf": "content/general/2020Q2-STP-Financial-Statements.pdf",
        "title": "LAPORAN KEUANGAN 2Q 2020"
    },
    {
        "pdf": "content/general/2020Q3-STP-Financial-Statements.pdf",
        "title": "LAPORAN KEUANGAN 3Q 2020"
    },
    {
        "pdf": "content/general/Solusi-Tunas-Pratama-GA-31-Des-2020.pdf",
        "title": "LAPORAN KEUANGAN 2020"
    },
    {
        "pdf": "content/general/2021Q1-STP-Financial-Statements.pdf",
        "title": "LAPORAN KEUANGAN 1Q 2021"
    },
    {
        "pdf": "content/general/2021Q2-STP-Financial-Statements.pdf",
        "title": "LAPORAN KEUANGAN 2Q 2021"
    },
    {
        "pdf": "content/general/Financial-Report-STP-Consol-Q3-30-September-2021.pdf",
        "title": "LAPORAN KEUANGAN 3Q 2021"
    },
    {
        "pdf": "content/general/Final-Release-Audit-Report-STP-Desember-2021.pdf",
        "title": "LAPORAN KEUANGAN 2021"
    },
    {
        "pdf": "content/general/FS-Konsolidasi-STP-31-Maret-2022.pdf",
        "title": "LAPORAN KEUANGAN 1Q 2022"
    },
    {
        "pdf": "content/general/Financial-Report-STP-Consol-Q2-30-Juni-2022.pdf",
        "title": "LAPORAN KEUANGAN 2Q 2022"
    },
    {
        "pdf": "content/general/Report-STP-Sept-2022-Final.pdf",
        "title": "LAPORAN KEUANGAN 3Q 2022"
    },
    {
        "pdf": "content/general/Final-Report_STP-Tbk_31-Desember-2022_completed.pdf",
        "title": "LAPORAN KEUANGAN 4Q 2022"
    },
    {
        "pdf": "content/general/Final-Report_STP_31-March-2023_final.pdf",
        "title": "LAPORAN KEUANGAN 1Q 2023"
    },
    {
        "pdf": "content/general/Final-Report-PT-STP-Tbk-30-Juni-2023.pdf",
        "title": "LAPORAN KEUANGAN 2Q 2023"
    },
    {
        "pdf": "content/general/Final-Report-STP-Tbk-30-Sept-23.pdf",
        "title": "LAPORAN KEUANGAN 3Q 2023"
    },
    {
        "pdf": "content/general/FS-Audit-Report-PT-Solusi-Tunas-Pratama-Tbk_2023.pdf",
        "title": "LAPORAN KEUANGAN 4Q 2023"
    },
    {
        "pdf": "content/general/Final-Report-Q1-2024-PT-Solusi-Tunas-Pratama-Tbk.pdf",
        "title": "LAPORAN KEUANGAN 1Q 2024"
    },
    {
        "pdf": "content/general/Final-Report-PT-Solusi-Tunas-Pratama-Tbk-Q2-2024.pdf",
        "title": "LAPORAN KEUANGAN 2Q 2024"
    },
    {
        "pdf": "content/general/Final-Report-SUPR-30-September-2024.pdf",
        "title": "LAPORAN KEUANGAN 3Q 2024"
    },
    {
        "pdf": "content/general/Final-Audit-Report-SUPR-31-Des-2024.pdf",
        "title": "LAPORAN KEUANGAN 4Q 2024"
    },
    {
        "pdf": "content/general/Final-Report-SUPR_31-Maret-2025.pdf",
        "title": "LAPORAN KEUANGAN 1Q 2025"
    }
]

const financialReportEN = [
    {
        "pdf": "content/general/Audited_FS_STP_FY2011-2010.pdf",
        "title": "FINANCIAL REPORT 2010-2011"
    },
    {
        "pdf": "content/general/STP-Financial-2012-2011.pdf",
        "title": "FINANCIAL REPORT 2012"
    },
    {
        "pdf": "content/general/STP-Financial-Q1-2013.pdf",
        "title": "FINANCIAL REPORT Q1 2013"
    },
    {
        "pdf": "content/general/STP-Financial-Q2-2013.pdf",
        "title": "FINANCIAL REPORT Q2 2013"
    },
    {
        "pdf": "content/general/STP-Financial-Q3-2013.pdf",
        "title": "FINANCIAL REPORT Q3 2013"
    },
    {
        "pdf": "content/general/STP-Audited-Financial-Report-2013.pdf",
        "title": "FINANCIAL REPORT 2013"
    },
    {
        "pdf": "content/general/STP-Financial-Q1-2014.pdf",
        "title": "FINANCIAL REPORT Q1 2014"
    },
    {
        "pdf": "content/general/STP-Financial-Q2-2014.pdf",
        "title": "FINANCIAL REPORT Q2 2014"
    },
    {
        "pdf": "content/general/STP-Financial-Q3-2014.pdf",
        "title": "FINANCIAL REPORT Q3 2014"
    },
    {
        "pdf": "content/general/STP-Financial-2014.pdf",
        "title": "FINANCIAL REPORT 2014"
    },
    {
        "pdf": "content/general/STP%20Financial%20Q1%202015.pdf",
        "title": "FINANCIAL REPORT Q1 2015"
    },
    {
        "pdf": "content/general/STP-Financial-Q2-2015.pdf",
        "title": "FINANCIAL REPORT Q2 2015"
    },
    {
        "pdf": "content/general/STP-Financial-Q3-2015.pdf",
        "title": "FINANCIAL REPORT Q3 2015"
    },
    {
        "pdf": "content/general/STP-Financial-2015.pdf",
        "title": "FINANCIAL REPORT 2015"
    },
    {
        "pdf": "content/general/STP-Financial-Q1-2016.pdf",
        "title": "FINANCIAL REPORT Q1 2016"
    },
    {
        "pdf": "content/general/STP-Financial-Statement-1H-2016.pdf",
        "title": "FINANCIAL REPORT Q2 2016"
    },
    {
        "pdf": "content/general/STP-Financial-Statement-9M-2016.pdf",
        "title": "FINANCIAL REPORT Q3 2016"
    },
    {
        "pdf": "content/general/STP-Financial-Statement-FY-2016.pdf",
        "title": "FINANCIAL REPORT 2016"
    },
    {
        "pdf": "content/general/STP-Financial-Statement-1Q-2017.pdf",
        "title": "FINANCIAL REPORT 1Q 2017"
    },
    {
        "pdf": "content/general/STP-Financial-Statement-1H-2017.pdf",
        "title": "FINANCIAL REPORT 2Q 2017"
    },
    {
        "pdf": "content/general/STP-Financial-Statement-3Q-2017.pdf",
        "title": "FINANCIAL REPORT 3Q 2017"
    },
    {
        "pdf": "content/general/STP-Financial-Statement-4Q-2017.pdf",
        "title": "FINANCIAL REPORT 2017"
    },
    {
        "pdf": "content/general/STP-Maret-2018.pdf",
        "title": "FINANCIAL REPORT 1Q 2018"
    },
    {
        "pdf": "content/general/STP-Financial-Statement-2Q-2018.pdf",
        "title": "FINANCIAL REPORT 2Q 2018"
    },
    {
        "pdf": "content/general/FS-STP-30-SEPT-2018.pdf",
        "title": "FINANCIAL REPORT 3Q 2018"
    },
    {
        "pdf": "content/general/Solusi-Tunas-Pratama-GA-31-Des-2018.pdf",
        "title": "FINANCIAL REPORT 2018"
    },
    {
        "pdf": "content/general/Solusi-Tunas-Pratama-Q1-Mar19.pdf",
        "title": "FINANCIAL REPORT 1Q 2019"
    },
    {
        "pdf": "content/general/STP-Financial-Statement-2Q-2019.pdf",
        "title": "FINANCIAL REPORT 2Q 2019"
    },
    {
        "pdf": "content/general/2019Q3.pdf",
        "title": "FINANCIAL REPORT 3Q 2019"
    },
    {
        "pdf": "content/general/2019Q4-STP-Financial-Statements.pdf",
        "title": "FINANCIAL REPORT 2019"
    },
    {
        "pdf": "content/general/2020Q1-STP-Financial-Statements.pdf",
        "title": "FINANCIAL REPORT 1Q 2020"
    },
    {
        "pdf": "content/general/2020Q2-STP-Financial-Statements.pdf",
        "title": "FINANCIAL REPORT 2Q 2020"
    },
    {
        "pdf": "content/general/2020Q3-STP-Financial-Statements.pdf",
        "title": "FINANCIAL REPORT 3Q 2020"
    },
    {
        "pdf": "content/general/Solusi-Tunas-Pratama-GA-31-Des-2020.pdf",
        "title": "FINANCIAL REPORT 2020"
    },
    {
        "pdf": "content/general/2021Q1-STP-Financial-Statements.pdf",
        "title": "FINANCIAL REPORT 1Q 2021"
    },
    {
        "pdf": "content/general/2021Q2-STP-Financial-Statements.pdf",
        "title": "FINANCIAL REPORT 2Q 2021"
    },
    {
        "pdf": "content/general/Financial-Report-STP-Consol-Q3-30-September-2021.pdf",
        "title": "FINANCIAL REPORT 3Q 2021"
    },
    {
        "pdf": "content/general/Final-Release-Audit-Report-STP-Desember-2021.pdf",
        "title": "FINANCIAL REPORT 2021"
    },
    {
        "pdf": "content/general/FS-Konsolidasi-STP-31-Maret-2022.pdf",
        "title": "FINANCIAL REPORT 1Q 2022"
    },
    {
        "pdf": "content/general/Financial-Report-STP-Consol-Q2-30-Juni-2022.pdf",
        "title": "FINANCIAL REPORT 2Q 2022"
    },
    {
        "pdf": "content/general/Report-STP-Sept-2022-Final.pdf",
        "title": "FINANCIAL REPORT 3Q 2022"
    },
    {
        "pdf": "content/general/Final-Report_STP-Tbk_31-Desember-2022_completed.pdf",
        "title": "FINANCIAL REPORT 4Q 2022"
    },
    {
        "pdf": "content/general/Final-Report_STP_31-March-2023_final.pdf",
        "title": "FINANCIAL REPORT 1Q 2023"
    },
    {
        "pdf": "content/general/Final-Report-PT-STP-Tbk-30-Juni-2023.pdf",
        "title": "FINANCIAL REPORT 2Q 2023"
    },
    {
        "pdf": "content/general/Final-Report-STP-Tbk-30-Sept-23.pdf",
        "title": "FINANCIAL REPORT 3Q 2023"
    },
    {
        "pdf": "content/general/FS-Audit-Report-PT-Solusi-Tunas-Pratama-Tbk_2023.pdf",
        "title": "FINANCIAL REPORT 4Q 2023"
    },
    {
        "pdf": "content/general/Final-Report-Q1-2024-PT-Solusi-Tunas-Pratama-Tbk.pdf",
        "title": "FINANCIAL REPORT 1Q 2024"
    },
    {
        "pdf": "content/general/Final-Report-PT-Solusi-Tunas-Pratama-Tbk-Q2-2024.pdf",
        "title": "FINANCIAL REPORT 2Q 2024"
    },
    {
        "pdf": "content/general/Final-Report-SUPR-30-September-2024.pdf",
        "title": "FINANCIAL REPORT 3Q 2024"
    },
    {
        "pdf": "content/general/Final-Audit-Report-SUPR-31-Des-2024.pdf",
        "title": "FINANCIAL REPORT 4Q 2024"
    },
    {
        "pdf": "content/general/Final-Report-SUPR_31-Maret-2025.pdf",
        "title": "FINANCIAL REPORT 1Q 2025"
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

async function insertFinancialReport() {

    const mergeAnnualReport = financialReportID.map((item, index) => ({
        pdf: item.pdf,
        subjectID: item.title,
        subjectEN: financialReportEN[index]?.title || '',
    }));
    // Insert
    //   await db.insert(contentDetailSchema).values({ name: "Alice", age: 30 });

    for (let index = 0; index < mergeAnnualReport.length; index++) {
        const element = mergeAnnualReport[index];



        // content
        let content = {
            ct_c_id: 4,
            ct_am_id: 38,
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

        let subjectID = generateContentDetail(element.subjectID, 89)
        let subjectEN = generateContentDetail(element.subjectEN, 90)
        let reportDate = generateContentDetail(formatDateToYMD(new Date()), 86)
        let icon = generateContentDetail("-", 88)
        let fileID = generateContentDetail(element.pdf, 364)
        let fileEN = generateContentDetail(element.pdf, 365)

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

// insertFinancialReport().catch(console.error)

export default insertFinancialReport