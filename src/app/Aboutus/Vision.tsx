import React from 'react'
import Vision_image from '../../../public/vision.svg'
import Image from 'next/image'


const Vision = () => {
    return (
        <section className="bg-gray-100">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="max-w-lg" data-aos="fade-right" data-aos-duration="3000">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Vision</h2>
                        <p className="mt-4 text-gray-600 text-lg">At Finsensor&apos; our vision is to be the catalyst for a progressive and inclusive financial ecosystem. We aspire to leverage our deep financial expertise and cutting-edge technological solutions to empower individuals and businesses&apos; fostering financial growth and resilience in an ever-evolving global landscape.</p>
                    </div>
                    <div className="mt-12 md:mt-0" data-aos="fade-left" data-aos-duration="3000">
                        <Image src={Vision_image} alt="About Us Image" className="object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vision