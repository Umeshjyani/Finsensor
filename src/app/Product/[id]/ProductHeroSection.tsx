import React from 'react'
import Image from 'next/image'
import HeroImage from "@/../../public/313.jpg"
import ManulEntruy from "@/../../public/ManulEntry.png"
import NotesInof from "@/../../public/NotesInfo.png"
import FaqFinSoEasy from './FaqFinSoEasy'


const ProductHeroSection = () => {
    return (
        <div>
            <div className="sm:flex items-center max-w-screen-xl justify-between">
                <div className="sm:w-1/2 p-5 w-full" data-aos="fade-left" data-aos-duration="3000">
                    <div className="text">
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl "> <span className="text-[#2323CE] text-[40px]">Financial Reporting Tool - </span></h2>
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
                            <a href="https://schedule-iii.finsensor.ai/" target="_blank" rel="noopener noreferrer" className="text-[#2323CE] font-normal">
                                FinSoEasy360
                            </a>
                        </h2>
                        <p className="text-[#6a6a92]">
                            Elevate your financial management with
                            <a href="https://schedule-iii.finsensor.ai/" target="_blank" rel="noopener noreferrer" className="text-[#2323CE] font-normal">
                                {" "}FinSoEasy360. {" "}
                            </a>
                            Our advanced, fully automated software simplifies the process of generating and reviewing balance sheets, profit and loss statements, and other financial reports. Users can easily export reports to Excel, allowing for adjustments and modifications to suit their needs. Boost your productivity with powerful reporting tools designed to ensure accuracy and efficiency at every step.
                        </p>
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
                                        <h3 className="mb-3 font-bold text-gray-800 text-xl">Real-Time Consolidation</h3>
                                        <p className="text-gray-700 leading-tight">Automatically consolidates financial data across units, providing accurate and up-to-date consolidated financial statements.</p>
                                    </div>
                                </div>
                                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                                        <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
                                    </div>
                                    <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                        <h3 className="mb-3 font-bold text-gray-800 text-xl">Customizable Reporting Templates</h3>
                                        <p className="text-gray-700 leading-tight">Create and adjust financial reports to meet statutory requirements and audit standards with fully customizable templates.</p>
                                    </div>
                                </div>
                                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                                        <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                                    </div>
                                    <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                        <h3 className="mb-3 font-bold text-gray-800 text-xl">Segment-Wise Reporting</h3>
                                        <p className="text-gray-700 leading-tight">Generate detailed, segment-wise financial reports with a single click for easy financial analysis across multiple divisions.</p>
                                    </div>
                                </div>
                                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                                        <h1 className="mx-auto font-semibold text-lg text-white">4</h1>
                                    </div>
                                    <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                        <h3 className="mb-3 font-bold text-gray-800 text-xl">Centralized Data Management</h3>
                                        <p className="text-gray-700 leading-tight">Access and manage all financial data from one central location, ensuring data integrity and preventing unauthorized changes.</p>
                                    </div>
                                </div>
                                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                                        <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
                                    </div>
                                    <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                        <h3 className="mb-3 font-bold text-gray-800 text-xl">Cloud-Based Data Security</h3>
                                        <p className="text-gray-700 leading-tight">Powered by AWS, offering robust security features to safeguard sensitive financial information from unauthorized access.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                        <ul className="list-disc list-inside space-y-2 text-[#6a6a92]">
                            <li className="text-lg text-[16px]">FinSoEasy 360 allow for manual entry posting and sophisticated categorization of these entries. By this the software provides a robust mechanism for tracking any changes in the trial balance.
                            </li>
                            <li className="text-lg text-[16px]">This not only makes the audit process more efficient but also helps in maintaining transparency and accountability in financial reporting.
                            </li>
                            <li className="text-lg text-[16px]">Management can oversee the manual entries posted in different units and subsidiaries from a single platform, improving control and oversight.
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
                        <ul className="list-disc list-inside space-y-2 text-[#6a6a92]">
                            <li className="text-lg text-[16px]">FinSoEasy 360 allow user to flow notes information such as Related Party, Contingent Liability, Ageing etc into Financial Statements through software interface. This feature  facilitates the easy integration and management of detailed notes-related information.
                            </li>
                            <li className="text-lg text-[16px]">Multiple users can add or edit notes information simultaneously for respective units / subsidiaries , enabling efficient collaboration among team members during the financial reporting process.
                            </li>
                            <li className="text-lg text-[16px]">Notes information of multiple units / subsidiaries can be consolidated on real time basis which help user in integration of the data such as ageing, Related party information etc with no addition effort.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sm:w-1/2  sm:p-0 py-2 items-center justify-center flex w-full z-10">
                    <div className="image object-center text-center max-w-[550px]">
                        <Image src={NotesInof} alt="About Us Image" className='border-1 rounded-sm shadow-custom' />
                    </div>
                </div>
            </div>
            <FaqFinSoEasy/>
        </div>
    )
}

export default ProductHeroSection