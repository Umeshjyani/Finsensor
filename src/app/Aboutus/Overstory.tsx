import React from 'react'
import overStory from '../../../public/overStory.svg'
import Image from 'next/image'


const Overstory = () => {
    return (
        <section className="bg-gray-100">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="max-w-lg" data-aos="fade-right" data-aos-duration="3000">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Story</h2>
                        <p className="mt-4 text-gray-600 text-lg break-words hyphens-auto">Founded by a team of Ex-Big Four Firms veterans with a shared vision for revolutionizing financial reporting, FinSensor emerged from a recognition of the challenges businesses face in managing their financial data efficiently and accurately. Our journey began with a commitment to developing robust, user-friendly SaaS solutions that simplify complex processes and drive tangible results for our clients</p>
                    </div>
                    <div className="mt-12 md:mt-0" data-aos="fade-left" data-aos-duration="3000">
                        <Image src={overStory} alt="About Us Image" className="object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overstory