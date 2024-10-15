import React from 'react'
import ourValues from "../../../public/overvalues.svg"
import Image from 'next/image'


const OurValues = () => {
    return (

        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className='text-center'>

                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Values</h2>

                <p className="mt-4 text-gray-500 text-xl">At the heart of FinSensor lies a set of core values that guide everything we do</p>
            </div>
            <div className="items-center gap-8">
                {/* <div className="mt-12 md:mt-0" data-aos="fade-right" data-aos-duration="3000">
                    <Image src={ourValues} alt="About Us Image" className="object-cover rounded-lg" />
                </div> */}
                <div>

                    {/* <p className="mt-4 text-gray-600 text-lg"></p> */}
                    <div className="container mx-auto px-4 py-8">
                        <div className="relative wrap overflow-hidden" data-aos="fade-right" data-aos-duration="3000">
                            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
                            <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                                </div>
                                <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                    <h3 className="mb-3 font-bold text-gray-800 text-xl">Innovation</h3>
                                    <p className="text-gray-700 leading-tight">We embrace innovation as the driving force behind progress, constantly seeking new ways to enhance our solutions and deliver value to our clients</p>
                                </div>
                            </div>
                            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
                                </div>
                                <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                    <h3 className="mb-3 font-bold text-gray-800 text-xl">Accuracy</h3>
                                    <p className="text-gray-700 leading-tight">We prioritize accuracy in all aspects of our work, ensuring that our solutions provide reliable data and insights that businesses can trust.</p>
                                </div>
                            </div>
                            <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                                </div>
                                <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                    <h3 className="mb-3 font-bold text-gray-800 text-xl">Simplicity</h3>
                                    <p className="text-gray-700 leading-tight">We believe that simplicity is the ultimate sophistication. Our solutions are designed with user-friendly interfaces and intuitive workflows to make financial reporting as straightforward as possible.</p>
                                </div>
                            </div>
                            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">4</h1>
                                </div>
                                <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                    <h3 className="mb-3 font-bold text-gray-800 text-xl">Accuracy</h3>
                                    <p className="text-gray-700 leading-tight">We prioritize accuracy in all aspects of our work, ensuring that our solutions provide reliable data and insights that businesses can trust.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default OurValues