"use client"
import React from 'react'
import Carousels from './carousels';
import mainimage from "../../public/01.jpg"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import Homepagemainimg from "../../../public/Homepagemain.png"

const SliderSection = () => {

    return (

        <>
            <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5">
                <div className="pr-2 md:mb-14 py-14 md:py-0" data-aos="fade-right" data-aos-duration="800">
                    <h1 className="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl"><span className="block w-full">Join us on a journey where finance meets innovation.</span></h1>
                    <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
                        Finsensor is a pioneering company founded by a group of accomplished Chartered Accountants dedicated to revolutionizing the Fintech landscape. We combine financial expertise with technological innovation to deliver cutting-edge solutions in the ever-evolving financial sector.
                    </p>
                    <div className="mt-4">
                        {/* <Button variant={"outline"} className='px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"' >Explore More</Button> */}
                        <Link href="/Contectus" legacyBehavior passHref>
                            <span className="cursor-pointer px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"><span>Explore More</span> </span>
                        </Link>
                    </div>
                </div>

                <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0" data-aos="fade-left" data-aos-duration="800">
                    <Image id="heroImg1" className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src={Homepagemainimg} alt="Awesome hero page image" />
                </div>
            </div ></>



    )
}

export default SliderSection