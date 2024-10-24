import React from 'react'
import Image from 'next/image'
import HeroImage from "@/../../public/313.jpg"
import ManulEntruy from "@/../../public/ManulEntry.png"
import NotesInof from "@/../../public/NotesInfo.png"
import Faq from '../../../customComponets/Faq/Faq'
import Carousel from '@/customComponets/Carousel/Carousel'
import { Button } from '@/components/ui/button'


const ProductHeroSection = () => {
    return (
        <div>
            <div className="sm:flex items-center max-w-screen-xl justify-between">
                <div className="sm:w-1/2 p-5 w-full" data-aos="fade-left" data-aos-duration="3000">
                    <div className="text ">
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl "> <span className="text-[#2323CE] text-[40px]">FinSoEasy360</span></h2>
                        <h2 className="my-4 font-bold text-3xl  sm:text-2xl ">
                            <a href="https://schedule-iii.finsensor.ai/" target="_blank" rel="noopener noreferrer" className="text-[#2323CE] font-normal">

                                Financial Reporting Tool
                            </a>
                        </h2>
                        <p className="text-[#6a6a92]">
                            Elevate your financial management with
                            <a href="https://schedule-iii.finsensor.ai/" target="_blank" rel="noopener noreferrer" className="text-[#2323CE] font-normal">
                                {" "}FinSoEasy360. {" "}
                            </a>
                            Our advanced, fully automated software simplifies the process of generating and reviewing balance sheets, profit and loss statements, and other financial reports. Users can easily export reports to Excel, allowing for adjustments and modifications to suit their needs. Boost your productivity with powerful reporting tools designed to ensure accuracy and efficiency at every step.
                        </p>
                        <div className="flex justify-center md:block">
                            <a
                                href="https://schedule-iii.finsensor.ai/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="text-md rounded text-white bg-[#2323CE] mt-5 px-4 py-2">
                                    FinSoEasy360
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/2 items-center justify-center flex w-full" data-aos="fade-right" data-aos-duration="3000">
                    <div className="image object-center text-center max-w-[450px]">
                        <Image src={HeroImage} alt="About Us Image" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto p-4 sm:px-6 lg:px-8">
                <div className='text-center'>
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Key Features of FinSoEasy360</h2>
                </div>
                <div className="items-center gap-8">
                    <div>
                        <div className="container mx-auto px-4 py-8">
                            <div className="relative wrap overflow-hidden" data-aos="fade-right" data-aos-duration="3000">
                                <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
                                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                                        <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                                    </div>
                                    <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                        <h3 className="mb-3 font-bold text-gray-800 text-[14px] md:text-xl">Real-Time Consolidation</h3>
                                        <p className="text-gray-700 leading-tight text-[14px] md:text-base">
                                            Automatically consolidates financial data across units, providing accurate and up-to-date consolidated financial statements.
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                                        <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
                                    </div>
                                    <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                        <h3 className="mb-3 font-bold text-gray-800 text-[14px] md:text-xl">Customizable Reporting Templates</h3>
                                        <p className="text-gray-700 leading-tight text-[14px] md:text-base">Create and adjust financial reports to meet statutory requirements and audit standards with fully customizable templates.</p>
                                    </div>
                                </div>
                                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                                        <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                                    </div>
                                    <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                        <h3 className="mb-3 font-bold text-gray-800 text-[14px] md:text-xl">Segment-Wise Reporting</h3>
                                        <p className="text-gray-700 leading-tight text-[14px] md:text-base">Generate detailed, segment-wise financial reports with a single click for easy financial analysis across multiple divisions.</p>
                                    </div>
                                </div>
                                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                                        <h1 className="mx-auto font-semibold text-lg text-white">4</h1>
                                    </div>
                                    <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                        <h3 className="mb-3 font-bold text-gray-800 text-[14px] md:text-xl">Centralized Data Management</h3>
                                        <p className="text-gray-700 leading-tight text-[14px] md:text-base">Access and manage all financial data from one central location, ensuring data integrity and preventing unauthorized changes.</p>
                                    </div>
                                </div>
                                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                                        <h1 className="mx-auto font-semibold text-lg text-white text-[14px] md:text-xl">5</h1>
                                    </div>
                                    <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                        <h3 className="mb-3 font-bold text-gray-800 text-[14px] md:text-xl">Cloud-Based Data Security</h3>
                                        <p className="text-gray-700 leading-tight text-[14px] md:text-base">Powered by AWS, offering robust security features to safeguard sensitive financial information from unauthorized access.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:flex items-center max-w-screen-xl justify-between bg-[#f8faff] p-5">
                <div className="sm:w-1/2 items-center justify-center flex w-full z-10">
                    {/* <div className="image object-center text-center max-w-[550px]"> */}
                    {/* <Image src={ManulEntruy} alt="About Us Image" className='border-1 rounded-sm shadow-custom' /> */}
                    <Carousel slidename="Dashboard&Report" />
                    {/* </div> */}
                </div>
                <div className="sm:w-1/2" data-aos="fade-right" data-aos-duration="3000">
                    <div className="text">
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
                            <span className="text-[#2323CE] text-[30px]">
                                Dashboard and Reports
                            </span>
                        </h2>
                        <ul className="list-disc list-outside space-y-2 text-[#6a6a92] text-lg [text-16px] px-2 break-words hyphens-auto">
                            <li>
                                The dashboards allow users to perform variance analysis with ease, helping identify discrepancies or trends in financial data through intuitive visuals and interactive charts.
                            </li>
                            <li>
                                The tool ensures that financial statements are generated in accordance with Schedule III requirements, providing accurate and compliant reports along with detailed notes to account in Excel format.
                            </li>
                            <li>
                                The same-time analysis feature provides instant updates and analysis, enabling users to make informed financial decisions based on the latest available data, enhancing decision-making efficiency.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sm:flex items-center max-w-screen-xl justify-between p-5">
                <div className="sm:w-1/2" >
                    <div className="text">
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
                            <span className="text-[#2323CE] text-[30px]">
                                Chat With Units & Sync
                            </span>
                        </h2>
                        <ul className="list-disc list-outside space-y-2 text-[#6a6a92] text-lg [text-16px] px-2 ">
                            <li className="break-words hyphens-auto">
                                The chat feature enables real-time communication with various company units, ensuring that important updates or clarifications can be quickly addressed, streamlining the financial reporting process.
                            </li>
                            <li className="break-words hyphens-auto">
                                The sync functionality consolidates unit-level data, allowing for smooth extraction of both standalone and consolidated financial statements, ensuring accuracy across all reporting levels.
                            </li>
                            <li className="break-words hyphens-auto">
                                With consolidated data and communication, the tool reduces delays and discrepancies, facilitating faster and more precise preparation of financial reports across the organization.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sm:w-1/2  sm:p-0 py-2 items-center justify-center flex w-full z-10">
                    {/* <div className="image object-center text-center max-w-[550px]">
                        <Image src={NotesInof} alt="About Us Image" className='border-1 rounded-sm shadow-custom' />
                    </div> */}
                    <Carousel slidename="Unti&Sync" />
                </div>
            </div>
            <div className="sm:flex items-center max-w-screen-xl justify-between bg-[#f8faff] p-5">
                <div className="sm:w-1/2 items-center justify-center flex w-full z-10">
                    <div className="image object-center text-center max-w-[550px]">
                        <Image src={ManulEntruy} alt="About Us Image" className='border-1 rounded-sm shadow-custom' />
                    </div>
                </div>

                <div className="sm:w-1/2" data-aos="fade-right" data-aos-duration="3000">
                    <div className="text">
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
                            <span className="text-[#2323CE] text-[30px]">
                                Manual Entry Enabler
                            </span>
                        </h2>
                        {/* <ul className="list-disc list-inside space-y-2 text-[#6a6a92]">
                            <li className="text-lg text-[16px]">FinSoEasy 360 allow for manual entry posting and sophisticated categorization of these entries. By this the software provides a robust mechanism for tracking any changes in the trial balance.
                            </li>
                            <li className="text-lg text-[16px]">This not only makes the audit process more efficient but also helps in maintaining transparency and accountability in financial reporting.
                            </li>
                            <li className="text-lg text-[16px]">Management can oversee the manual entries posted in different units and subsidiaries from a single platform, improving control and oversight.
                            </li>
                        </ul> */}
                        <ul className="list-disc list-outside space-y-2 text-[#6a6a92] text-lg text-[16px] px-2 break-words hyphens-auto">
                            <li>
                                FinSoEasy 360 allows for manual entry posting and sophisticated categorization of these entries. By this, the software provides a robust mechanism for tracking any changes in the trial balance.
                            </li>
                            <li>
                                This not only makes the audit process more efficient but also helps in maintaining transparency and accountability in financial reporting.
                            </li>
                            <li>
                                Management can oversee the manual entries posted in different units and subsidiaries from a single platform, improving control and oversight.
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="sm:flex items-center max-w-screen-xl justify-between p-5">
                <div className="sm:w-1/2" >
                    <div className="text">
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
                            <span className="text-[#2323CE] text-[30px]">
                                Notes and Footnotes Info Management
                            </span>
                        </h2>
                        <ul className="list-disc list-outside space-y-2 text-[#6a6a92] text-lg [text-16px] px-2 ">
                            <li className="break-words hyphens-auto">
                                FinSoEasy 360 allows users to flow notes information such as Related Party, Contingent Liability, Ageing, etc., into Financial Statements through the software interface. This feature facilitates the easy integration and management of detailed notes-related information.
                            </li>
                            <li className="break-words hyphens-auto">
                                Multiple users can add or edit notes information simultaneously for respective units/subsidiaries, enabling efficient collaboration among team members during the financial reporting process.
                            </li>
                            <li className="break-words hyphens-auto">
                                Notes information of multiple units/subsidiaries can be consolidated on a real-time basis, helping users integrate the data such as ageing, Related Party information, etc., with no additional effort.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sm:w-1/2  sm:p-0 py-2 items-center justify-center flex w-full z-10">
                    {/* <div className="image object-center text-center max-w-[550px]">
                        <Image src={NotesInof} alt="About Us Image" className='border-1 rounded-sm shadow-custom' />
                    </div> */}
                    <Carousel slidename="Notes" />
                </div>
            </div>
            <Faq ShowFaqName={"FaqFinsSoEasy360"} />
        </div>
    )
}

export default ProductHeroSection