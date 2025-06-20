import { db } from "./db/index";
import { contentDetailSchema, contentSchema } from "./db/schema";

const informasiID = [
    {
        "pdf": "content/general/STP%20Investor%20pres_17%20Mar.pdf",
        "title": "Presentasi Investor Maret 2014"
    },
    {
        "pdf": "content/general/STP%20Investor%20pres_3%20April%202014.pdf",
        "title": "Presentasi Investor April 2014"
    },
    {
        "pdf": "content/general/14%20Nov%2014%20STP%20Investor%20Press_FINAL.pdf",
        "title": "Presentasi Investor November 2014"
    },
    {
        "pdf": "content/general/v1%20Revised%202%20Feb%2015%20STP%20Investor%20Press%20-%20FINAL.pdf",
        "title": "Presentasi Investor Februari 2015"
    },
    {
        "pdf": "content/general/Investor%20Presentation%20March%202015.pdf",
        "title": "Presentasi Investor Mei 2015"
    },
    {
        "pdf": "content/general/Investor%20Presentation%20September%202015.pdf",
        "title": "Presentasi Investor September 2015"
    },
    {
        "pdf": "content/general/Investor%20Presentation%20November%202015.pdf",
        "title": "Presentasi Investor November 2015"
    },
    {
        "pdf": "content/general/Investor-Presentation-May-2016-FY-2015.pdf",
        "title": "Presentasi Investor Mei 2016 – FY 2015"
    },
    {
        "pdf": "content/general/Investor-Presentation-May-2016-1Q-2016.pdf",
        "title": "Presentasi Investor Mei 2016 – 1Q 2016"
    },
    {
        "pdf": "content/general/Investor-Presentation-August-2016-2Q-2016.pdf",
        "title": "Presentasi Investor Agustus 2016 – 2Q 2016"
    },
    {
        "pdf": "content/general/STP-9M-2016-results-presentation.pdf",
        "title": "Presentasi Investor Oktober 2016 – 3Q 2016"
    },
    {
        "pdf": "content/general/STP-FY-2016-Results-Presentation.pdf",
        "title": "Presentasi Investor April 2017 – FY 2016"
    },
    {
        "pdf": "content/general/2017-06_STP-Investor-Presentation.pdf",
        "title": "Presentasi Investor Juni 2017 – 1Q 2017"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-1H-2017.pdf",
        "title": "Presentasi Investor Juli 2017 – 2Q 2017"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-3Q-2017.pdf",
        "title": "Presentasi Investor November 2017 – 3Q 2017"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-4Q-2017.pdf",
        "title": "Presentasi Investor April 2018 – FY 2017"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-1Q-2018_v1.pdf",
        "title": "Presentasi Investor Mei 2018 – 1Q 2018"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-2Q-2018.pdf",
        "title": "Presentasi Investor Agustus 2018 – 2Q 2018"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-3Q-2018.pdf",
        "title": "Presentasi Investor November 2018 – 3Q 2018"
    },
    {
        "pdf": "content/general/4Q2018-Investor-Presentation.pdf",
        "title": "Presentasi Investor April 2019 – 4Q 2018"
    },
    {
        "pdf": "content/general/1Q2019-Investor-Presentation.pdf",
        "title": "Presentasi Investor Mei 2019 – 1Q 2019"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-2Q-2019.pdf",
        "title": "Presentasi Investor Juli 2019 – 2Q 2019"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-3Q-2019.pdf",
        "title": "Presentasi Investor Oktober 2019 – 3Q 2019"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-4Q-2019.pdf",
        "title": "Presentasi Investor Mei 2020 – 4Q 2019"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-1Q-2020.pdf",
        "title": "Presentasi Investor Juli 2020 – 1Q 2020"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-2Q-2020.pdf",
        "title": "Presentasi Investor Agustus 2020 – 2Q 2020"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-3Q-2020.pdf",
        "title": "Presentasi Investor November 2020 – 3Q 2020"
    },
    {
        "pdf": "content/general/Investor-Presentation-June-2021-4Q-2020.pdf",
        "title": "Presentasi Investor Juni 2021 – 4Q 2020"
    },
    {
        "pdf": "content/general/Investor-Presentation-July-2021-1Q-2021.pdf",
        "title": "Presentasi Investor Juli 2021 – 1Q 2021"
    },
    {
        "pdf": "content/general/Investor-Presentation-1H21.pdf",
        "title": "Presentasi Investor August 2021 – 2Q 2021"
    }
]

const informasiEN = [
    {
        "pdf": "content/general/STP%20Investor%20pres_17%20Mar.pdf",
        "title": "Investor Presentation March 2014"
    },
    {
        "pdf": "content/general/STP%20Investor%20pres_3%20April%202014.pdf",
        "title": "Investor Presentation April 2014"
    },
    {
        "pdf": "content/general/14%20Nov%2014%20STP%20Investor%20Press_FINAL.pdf",
        "title": "Investor Presentation November 2014"
    },
    {
        "pdf": "content/general/v1%20Revised%202%20Feb%2015%20STP%20Investor%20Press%20-%20FINAL.pdf",
        "title": "Investor Presentation Februari 2015"
    },
    {
        "pdf": "content/general/Investor%20Presentation%20March%202015.pdf",
        "title": "Investor Presentation May 2015"
    },
    {
        "pdf": "content/general/Investor%20Presentation%20September%202015.pdf",
        "title": "Investor Presentation September 2015"
    },
    {
        "pdf": "content/general/Investor%20Presentation%20November%202015.pdf",
        "title": "Investor Presentation November 2015"
    },
    {
        "pdf": "content/general/Investor-Presentation-May-2016-FY-2015.pdf",
        "title": "Investor Presentation May 2016 – FY 2015"
    },
    {
        "pdf": "content/general/Investor-Presentation-May-2016-1Q-2016.pdf",
        "title": "Investor Presentation May 2016 – 1Q 2016"
    },
    {
        "pdf": "content/general/Investor-Presentation-August-2016-2Q-2016.pdf",
        "title": "Investor Presentation August 2016 – 2Q 2016"
    },
    {
        "pdf": "content/general/STP-9M-2016-results-presentation.pdf",
        "title": "Investor Presentation October 2016 – 3Q 2016"
    },
    {
        "pdf": "content/general/STP-FY-2016-Results-Presentation.pdf",
        "title": "Investor Presentation April 2017 – FY 2016"
    },
    {
        "pdf": "content/general/2017-06_STP-Investor-Presentation.pdf",
        "title": "Investor Presentation June 2017 – 1Q 2017"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-1H-2017.pdf",
        "title": "Investor Presentation July 2017 – 2Q 2017"
    },
    {
        "pdf": "https://www.w3schools.com/html/https//stptower.com/wp-content/uploads/STP-Investor-Presentation-3Q-2017.pdf",
        "title": "Investor Presentation November 2017 – 3Q 2017"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-4Q-2017.pdf",
        "title": "Investor Presentation April 2018 – FY 2017"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-1Q-2018_v1.pdf",
        "title": "Investor Presentation May 2018 – 1Q 2018"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-2Q-2018.pdf",
        "title": "Investor Presentation August 2018 – 2Q 2018"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-3Q-2018.pdf",
        "title": "Investor Presentation November 2018 – 3Q 2018"
    },
    {
        "pdf": "content/general/4Q2018-Investor-Presentation.pdf",
        "title": "Investor Presentation April 2019 – 4Q 2018"
    },
    {
        "pdf": "content/general/1Q2019-Investor-Presentation.pdf",
        "title": "Investor Presentation May 2019 – 1Q 2019"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-2Q-2019.pdf",
        "title": "Investor Presentation July 2019 – 2Q 2019"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-3Q-2019.pdf",
        "title": "Investor Presentation October 2019 – 3Q 2019"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-4Q-2019.pdf",
        "title": "Investor Presentation May 2020 – 4Q 2019"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-1Q-2020.pdf",
        "title": "Investor Presentation July 2020 – 1Q 2020"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-2Q-2020.pdf",
        "title": "Investor Presentation August 2020 – 2Q 2020"
    },
    {
        "pdf": "content/general/STP-Investor-Presentation-3Q-2020.pdf",
        "title": "Investor Presentation November 2020 – 3Q 2020"
    },
    {
        "pdf": "content/general/Investor-Presentation-June-2021-4Q-2020.pdf",
        "title": "Investor Presentation June 2021 – 4Q 2020"
    },
    {
        "pdf": "content/general/Investor-Presentation-July-2021-1Q-2021.pdf",
        "title": "Investor Presentation July 2021 – 1Q 2021"
    },
    {
        "pdf": "content/general/Investor-Presentation-1H21.pdf",
        "title": "Investor Presentation August 2021 – 2Q 2021"
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

async function insertInvestorPresentation() {

    const mergeAnnualReport = informasiID.map((item, index) => ({
        pdf: item.pdf,
        subjectID: item.title,
        subjectEN: informasiEN[index]?.title || '',
        pdfEN: informasiEN[index]?.pdf || '',
    }));
    // Insert
    //   await db.insert(contentDetailSchema).values({ name: "Alice", age: 30 });

    for (let index = 0; index < mergeAnnualReport.length; index++) {
        const element = mergeAnnualReport[index];



        // content
        let content = {
            ct_c_id: 4,
            ct_am_id: 41,
            ct_subject: element.subjectID,
            ct_slug_ID: element.subjectID.replace(' ', '-').toLocaleLowerCase(),
            ct_slug_EN: element.subjectEN.replace(' ', '-').toLocaleLowerCase(),
            ct_isPublished: 1,
            ct_publishDate: formatDateToMySQL(new Date()),
            ct_cts_id: 3,
            ct_createdDate: formatDateToMySQL(new Date()),
            ct_createdBy: "Admin",
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
                ctd_createdDate: formatDateToMySQL(new Date),
                ctd_createdBy: "Admin",
            }
        }

        let subjectID = generateContentDetail(element.subjectID, 104)
        let subjectEN = generateContentDetail(element.subjectEN, 105)
        let reportDate = generateContentDetail(formatDateToYMD(new Date()), 101)
        let icon = generateContentDetail("-", 103)
        let fileID = generateContentDetail(element.pdf, 370)
        let fileEN = generateContentDetail(element.pdfEN, 371)

        let contentDetail = [subjectID, subjectEN, reportDate, icon, fileID, fileEN]

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

// insertInvestorPresentation().catch(console.error);
export default insertInvestorPresentation
