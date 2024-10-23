

import React from 'react';
import { FiCode } from 'react-icons/fi';
import { FaChartLine } from 'react-icons/fa';
import { AiOutlineRise } from 'react-icons/ai';
const WhyUs = () => {
    return (
        <section className="py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900">Why Choose FinSensor ?</h2>
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div data-aos="fade-right"
                        data-aos-duration="1500">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <FiCode />
                        </div>
                        <div className="mt-5">
                            <h3 className="text-lg font-medium text-gray-900" >
                                {/* Innovative Fusion */}
                                Expertise
                            </h3>
                            <p className="mt-2 text-base text-gray-500 break-words hyphens-auto">
                                {/* Join a team where financial expertise seamlessly blends with technological innovation. At Finsensor&comma; you&apos;ll be part of a dynamic environment that encourages creative solutions at the intersection of finance and technology */}
                                With years of experience in the financial reporting field, our team brings a wealth of expertise to every project.
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <FaChartLine />
                        </div>
                        <div className="mt-5">
                            <h3 className="text-lg font-medium text-gray-900">

                                {/* Fintech Leadership */}
                                Innovation
                            </h3>
                            <p className="mt-2 text-base text-gray-500 break-words hyphens-auto">
                                {/* Be a key player in the forefront of the fintech revolution. Working with Finsensor means contributing to pioneering advancements in the financial sector&comma; setting new standards and influencing the industry&apos;s future */}
                                We are committed to staying ahead of the curve with continuous innovation and development of our solutions
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-left"
                        data-aos-duration="1500">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <AiOutlineRise />
                        </div>
                        <div className="mt-5">
                            <h3 className="text-lg font-medium text-gray-900">

                                {/* Impactful Growth */}
                                Reliability
                            </h3>
                            <p className="mt-2 text-base text-gray-500 break-words hyphens-auto">
                                {/* Finsensor prioritizes your professional development. Experience continuous learning&comma; stay updated on industry trends&comma; and contribute to transformative financial solutions that make a lasting impact on businesses and individuals alike */}

                                Our solutions are built on robust technology infrastructure and undergo rigorous testing to ensure reliability and performance.
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-left"
                        data-aos-duration="1500">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <AiOutlineRise />
                        </div>
                        <div className="mt-5">
                            <h3 className="text-lg font-medium text-gray-900">

                                {/* Impactful Growth */}
                                Support
                            </h3>
                            <p className="mt-2 text-base text-gray-500 break-words hyphens-auto">
                                {/* Finsensor prioritizes your professional development. Experience continuous learning&comma; stay updated on industry trends&comma; and contribute to transformative financial solutions that make a lasting impact on businesses and individuals alike */}

                                We provide dedicated support and assistance to our clients, helping them maximize the value of our solutions and achieve their business objectives.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyUs;
