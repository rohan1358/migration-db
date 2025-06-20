import { db } from "./db/index";
import { contentDetailSchema, contentSchema } from "./db/schema";

const informasiID = [
    // Help of assistance to victims of the Palu and Donggala disasters, Central Sulawesi
    {
        title: "Help of assistance to victims of the Palu and Donggala disasters, Central Sulawesi",
        image: "content/general/DSCN8307-768x576.jpg"
    },
    {
        title: "Help of assistance to victims of the Palu and Donggala disasters, Central Sulawesi",
        image: "content/general/DSCN8302-768x576.jpg"
    },
    {
        title: "Help of assistance to victims of the Palu and Donggala disasters, Central Sulawesi",
        image: "content/general/DSCN8195-768x576.jpg"
    },
    {
        title: "Help of assistance to victims of the Palu and Donggala disasters, Central Sulawesi",
        image: "content/general/DSCN8184-768x576.jpg"
    },
    {
        title: "Help of assistance to victims of the Palu and Donggala disasters, Central Sulawesi",
        image: "content/general/DSCN8163-768x576.jpg"
    },

    // Help of assistance to victims of Lombok
    {
        title: "Help of assistance to victims of Lombok",
        image: "content/general/DSCN9786-768x576.jpg"
    },
    {
        title: "Help of assistance to victims of Lombok",
        image: "content/general/DSCN9782-768x576.jpg"
    },
    {
        title: "Help of assistance to victims of Lombok",
        image: "content/general/DSCN9748-768x576.jpg"
    },
    {
        title: "Help of assistance to victims of Lombok",
        image: "content/general/DSCN9747-768x576.jpg"
    },

    // Help of assistance to victims of Sunda Straits
    {
        title: "Help of assistance to victims of Sunda Straits",
        image: "content/general/Selat-Sunda-2-768x373.jpeg"
    },
    {
        title: "Help of assistance to victims of Sunda Straits",
        image: "content/general/Selat-Sunda-1-768x432.jpeg"
    },
    {
        title: "Help of assistance to victims of Sunda Straits",
        image: "content/general/8.-Loading-bantuan-768x432.jpg"
    },
    {
        title: "Help of assistance to victims of Sunda Straits",
        image: "content/general/7.-Serah-Terima-Lampung-768x432.jpg"
    },
    {
        title: "Help of assistance to victims of Sunda Straits",
        image: "content/general/6.-Serah-Terima-Lampung-768x432.jpg"
    },
    {
        title: "Help of assistance to victims of Sunda Straits",
        image: "content/general/3.-Koordinasi-768x432.jpg"
    },
]

const informasiEN = informasiID



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

async function insertHOA() {

    const mergeAnnualReport = informasiID.map((item, index) => ({
        image: item.image,
        subjectID: item.title,
        subjectEN: informasiEN[index]?.title || '',
        pdfEN: informasiEN[index]?.image || '',
    }));
    // Insert
    //   await db.insert(contentDetailSchema).values({ name: "Alice", age: 30 });

    for (let index = 0; index < mergeAnnualReport.length; index++) {
        const element = mergeAnnualReport[index];



        // content
        let content = {
            ct_c_id: 4,
            ct_am_id: 32,
            ct_subject: element.subjectID,
            ct_slug_ID: element.subjectID.replace(' ', '-').toLocaleLowerCase(),
            ct_slug_EN: element.subjectEN.replace(' ', '-').toLocaleLowerCase(),
            ct_isPublished: 1,
            ct_publishDate: formatDateToMySQL(new Date()),
            ct_cts_id: 3,
            ct_createdDate: formatDateToMySQL(new Date()),
            ct_createdBy: "Admin",
            ct_meta_title_EN : element.subjectEN,
            ct_meta_title_ID : element.subjectID,
            ct_meta_description_ID : "-",
            ct_meta_description_EN : "-",
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

        let subjectID = generateContentDetail(element.subjectID, 104)
        let subjectEN = generateContentDetail(element.subjectEN, 105)
        let reportDate = generateContentDetail(formatDateToYMD(new Date()), 101)
        let icon = generateContentDetail("-", 103)
        let fileID = generateContentDetail(element.image, 370)
        let fileEN = generateContentDetail(element.pdfEN, 371)

        let TitleID = generateContentDetail(element.subjectID, 128)
        let TitleEN = generateContentDetail(element.subjectEN, 127)
        let DescriptionID = generateContentDetail("<p>-</p>", 130)
        let DescriptionEN = generateContentDetail("<p>-</p>", 129)
        let Summary = generateContentDetail("<p>-</p>", 126)
        let Dates = generateContentDetail(formatDateToYMD(new Date()), 131)
        let MediaType = generateContentDetail("Image", 132)
        let Media = generateContentDetail(element.image, 133)

        let contentDetail = [TitleID, TitleEN, DescriptionID, DescriptionEN, Summary, Dates, MediaType, Media]

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

// insertHOA().catch(console.error);
export default insertHOA
