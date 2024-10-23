import React from 'react'
import MissionImage from "../../../public/Mission.svg"
import Image from 'next/image'


const Mission = () => {
    return (
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 ">
                <div className="grid grid-cols-1 md:grid-cols-2  items-center gap-8">
                    <div className="mt-12 md:mt-0" data-aos="fade-right" data-aos-duration="3000">
                        <Image src={MissionImage} alt="About Us Image" className="object-cover rounded-lg" />
                    </div>
                    <div className="max-w-lg" data-aos="fade-left" data-aos-duration="3000">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission</h2>
                        <p className="mt-4 text-gray-600 text-lg break-words hyphens-auto">Our mission at Finsensor is to revolutionize the fintech industry by seamlessly integrating financial expertise with groundbreaking technology. We are dedicated to providing avant-garde solutions that not only meet but exceed the evolving needs of our clients. Through continuous innovation&comma; we aim to simplify financial complexities&comma; drive efficiency&comma; and contribute to the overall advancement of the financial sector. Our commitment to excellence and client satisfaction fuels our journey towards becoming the trusted partner for transformative financial solutions.</p>

                    </div>

                </div>
            </div>
   
    )
}

export default Mission