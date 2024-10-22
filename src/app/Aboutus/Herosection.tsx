import Image from 'next/image'
import React from 'react'
import HeroImage from "../../../public/Herosection.png"

const Mainsection = () => {
    return (
        <div className="sm:flex items-center max-w-screen-xl">
            <div className="sm:w-1/2 p-10" data-aos="fade-right" data-aos-duration="3000">
                <div className="image object-center text-center">
                    <Image src={HeroImage} alt="About Us Image" />
                </div>
            </div>
            <div className="sm:w-1/2 p-5" data-aos="fade-left" data-aos-duration="3000">
                <div className="text">
                    {/* <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span> */}
                    <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
                        About FinSensor:  <span className="text-indigo-600">Streamlining Financial Reporting with SaaS Solutions</span>
                    </h2>
                    <p className="text-gray-700">
                        At FinSensor, we pride ourselves on being at the forefront of innovation in financial reporting. Our mission is simple yet ambitious: to empower businesses with cutting-edge Software as a Service (SaaS) solutions that streamline the preparation of financial statements.
                        {/* Finsensor stands at the forefront of fintech transformation&comma; driven by a team of highly skilled Chartered Accountants committed to reshaping the financial landscape. Our unique blend of financial acumen and technological ingenuity positions us as pioneers in the industry&comma; continually striving to redefine the boundaries of innovation */}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Mainsection