import React from 'react'
import ProductGrid from './ProductCard'
import product1 from "@/../public/FinSoEasy Logo.png"
import product2 from "@/../public/Fixed Asset.png"
import product3 from "@/../public/Vendor Reconcilation.png"
import product4 from "@/../public/LOGO-2.svg"

const Products = () => {
    const dummyProducts = [ 
        {
            id: "FinSoEasy360",
            productName: 'FinSoEasy360',
            logo: product1.src,
            isComingSoon: false,
            description: 'A powerful tool for seamless financial reconciliation and reporting. Automate variance detection, resolve discrepancies, and generate Schedule III-compliant statements with real-time insights and user-friendly dashboards.',
        },
        {
            id: "FamSoEasy360",
            productName: 'FamSoEasy360',
            logo: product2.src,
            isComingSoon: true,
            description: 'Effortlessly manage and verify physical assets, ensuring compliance with Schedule III of the Indian Companies Act 2013. Streamline your Fixed Assets Schedule with accurate tracking and reporting, ensuring alignment with regulatory requirements.',
        },
        {
            id: "ReconSoEasy360",
            productName: "ReconSoEasy360",
            logo: product3.src,
            isComingSoon: true,
            description: 'Identify and resolve discrepancies with detailed reasons for mismatches, ensuring your financial records reflect the true financial position Stay on top of your financial reconciliation with instant, automated reports',
        },
        // {
        //     id: 3,
        //     productName: 'FinSensor Ind AS 116 Lease Management Capsule',
        //     logo: product3.src,
        //     isComingSoon: false,
        //     description: 'From calculation to recognition, our solution covers the entire lease lifecycle, ensuring compliance with accounting standards',
        // },
        // {
        //     id: 4,
        //     productName: 'FinSensor Strick off companies Identifier Capsule',
        //     logo: product4.src,
        //     isComingSoon: false,
        //     description: 'Stay compliant by checking the status of vendors and debtors, ensuring they are not strike-off from the Registrar of Companies (ROC)',
        // },
        // {
        //     id: 5,
        //     productName: 'FinSensor Management Information System (MIS) Capsule',
        //     logo: product4.src,
        //     isComingSoon: false,
        //     description: `Ensure accurate and compliant financial statements in accordance with Schedule 3 of the Indian Companies Act 2013.
        //     Save valuable time with automated generation, reducing manual efforts and minimizing errors
        //     `,
        // },
        // {
        //     id: 6,
        //     productName: 'FinSensor MSME Identifier Capsule',
        //     logo: product4.src,
        //     isComingSoon: false,
        //     description: `Ensure accurate and compliant financial statements in accordance with Schedule 3 of the Indian Companies Act 2013.
        //     Save valuable time with automated generation, reducing manual efforts and minimizing errors
        //     `,
        // },
        // {
        //     id: 7,
        //     productName: 'FinSensor Ind AS Financial Statements Generator',
        //     logo: product4.src,
        //     isComingSoon: false,
        //     description: `Ensure accurate and compliant financial statements in accordance with Schedule 3 of the Indian Companies Act 2013.
        //     Save valuable time with automated generation, reducing manual efforts and minimizing errors
        //     `,
        // },
        // {
        //     id: 8,
        //     productName: 'FinSensor IGAAP Financial Statements Generator',
        //     logo: product4.src,
        //     isComingSoon: false,
        //     description: `Financial Statement Generator: Our flagship product, the Financial Statement Generator, empowers businesses to generate accurate financial statements quickly and efficiently, saving time and resources
        //     `,
        // },
    ];
    return (
        <div className='w-full mb-4 '>
            <ProductGrid products={dummyProducts} />
        </div>
    )
}

export default Products