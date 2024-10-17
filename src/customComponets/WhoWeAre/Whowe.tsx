import React from 'react'
import overStory from '../../../public/Whowe.svg'
import Image from 'next/image'

const Whowe = () => {
    return (
        <section className="">
            <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="max-w-lg" data-aos="fade-right" data-aos-duration="3000">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Know Us</h2>
                        <p className="mt-4 text-gray-600 text-lg">
                        At FinSensor, we are a team of dedicated chartered accountants, engineers and technicians committed to revolutionizing the finance and reporting landscape. By leveraging cutting-edge automated solutions, we empower businesses to streamline their financial processes, enhance accuracy, and boost productivity. Our expertise ensures that clients can focus on strategic decision-making while we handle the complexities of financial reporting. With a blend of professionalism and innovation, we strive to deliver exceptional value and drive success for our clients in an ever-evolving financial environment.
                        </p>
                    </div>
                    <div className="mt-12 md:mt-0" data-aos="fade-right" data-aos-duration="3000">
                        <Image src={overStory} alt="About Us Image" className="object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Whowe