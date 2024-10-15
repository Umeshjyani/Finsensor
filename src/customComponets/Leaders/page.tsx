"use client"
import * as React from "react"
import LeadersData from "./LeadersData"
import AmitGarg from "@/../public/Amit.jpg"
import SaurabhAggarwal from "@/../public/SaurabhAggarwal.jpg"
import PrashantJha from "@/../public/PrashantJha.jpg"
import Gaurav from "@/../public/Gaurav.jpg"
import Abhinav from "@/../public/Abhinav.jpg"
export function Leaders() {
    const user = [
        {
            name: "Amit Garg",
            designation: "CEO",
            image: AmitGarg,
            description: `Amit is a part of assurance team. He has over 18 years of experience 
            of consulting and audit in varied industrial sectors. He is a mature 
            professional who understands the local market and is appreciated by 
            his clients for his advise in business matters.
            
            He has also worked with E&Y for more than 12 years in statutory audit 
            practice.
            
            He is a fellow member of the Institute of Chartered Accountants of 
            India "ICAI" He specializes in Ind AS/IFRS implementations, statutory 
            audit , internal audit, process reviews, due diligence. He has very good 
            project  management skills having lead large projects which involved  
            multi disciplinary teams and worked against tight deadlines.
            
            Amit also has rich experience in handling capital market transaction also.
            
            In addition to above, Amit is also faculty for IFRS/Ind AS course 
            conducted by Institute of Chartered Accountants of India, Delhi 
            University and large consulting firms.`,
            MediaList: ''
        },
        {
            name: "Saurabh Aggarwal",
            designation: "Director",
            image: SaurabhAggarwal,
            description: `Saurabh is a part of assurance team. He has over 10 years of 
            professional experience in Assurance and Advisory Services. He 
            has extensive experience in IFRS, Ind AS, IGAAP, special audits, 
            IFRS transition, ICFR, SOX Testing,  Business Process re-
            engineering, tax audits, Capital Market transactions, and due 
            diligence.  
            
            Saurabh has worked with S.R.Batliboi & Co. LLP,  (member firm of 
            EY) and BSR & Co. LLP (member firm of KPMG) over a decade.
            
            During his stint at EY and KPMG, he has served a diversified 
            clientele spanning across sector. He was handling public 
            companies and large multinational corporations during his tenure.
            
            Saurabh has worked in Automotive, FMCG, Cement and other 
            sectors.
            
            Saurabh has also handled capital market transaction of JK 
            Cements Limited. 
            `,
            MediaList: ''
        },
        {
            name: "Prashant Jha",
            designation: "Director",
            image: PrashantJha,
            description: `Prashant Jha is a Chartered accountant and leads Tax and Regulatory 
            advisory.
            
            Prashant has 10+ years of professional experience in taxation, 
            Assurance and Regulatory advisory and is known for his technical 
            expertise.
            
            Prashant has worked with  S. R Batliboi & Co. LLP (member firm of EY) 
            for more than three year and served diversified clients including listed 
            corporates, India&apos;s leading real estate developers, Steel, Fertilizer, 
            Aviation, healthcare and service sector etc.
            
            He is a mature professional who understands the  local market and is 
            appreciated by his clients for his advise in business matters.
            
            He specializes in reviews of financial from tax perspective, GST audit, 
            tax litigations, process reviews  from tax perspective, direct taxes, etc. 
            He has very good  project management skills having lead large projects 
            which involved multi disciplinary teams and worked against tight  
            deadlines.
            `,
            MediaList: ''
        },
        {
            name: "CA Gaurav Malik",
            designation: "Technology Lead",
            image: Gaurav,
            description: `8+ years of experience in Financial Planning and Analysis, Data Analytics with organizations like EY, Vedanta Limited, Kotak Mahindra Bank Limited & other global MNCs
            Handled Budgeting , Margin/Profitability Analysis, Financial modelling , Credit Rating , Due Diligence, Internal Management Reporting , External reporting like investor presentation, press release and Annual reports.`,
            MediaList: ''
        },
        {
            name: "CA Abhinav Aggarwal",
            designation: "Technology Lead",
            image: Abhinav,
            description: `8+ years of experience in Financial Planning and Analysis, Business transformation & Tool Implementation with organizations like Infosys Limited, Sumitomo & other global MNCs 
            Handled Finance Transformation Projects, ERP & FP&A Tool Implementations, Process Improvement & Business Analytics projects.`,
            MediaList: ''
        },

    ]

    return (
        <LeadersData user={user} />
    )
}