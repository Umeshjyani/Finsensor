import React from 'react'

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'


const Footer = () => {
    return (
        <div>
            {/* <Herosection /> */}
            <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around item-start py-16" >
                <div className='p-5'>
                    <ul>
                        <p className='text-gray-800 font-bold text-3xl pb-6'> <span className='text-blue-600'>Finsensor </span>Limited</p>
                        <div className='flex gap-6 pb-5 '>
                            {/* section for Icones */}
                            <FaInstagram className='text-2xl cursor-pointer hover:text-yellow-600' />
                            <FaTwitter className='text-2xl cursor-pointer hover:text-blue-600' />
                            <FaLinkedin className='text-2xl cursor-pointer hover:text-blue-600' />
                            <FaYoutube className='text-2xl cursor-pointer hover:text-red-600' />
                            <FaFacebook className='text-2xl cursor-pointer hover:text-blue-600' />
                        </div>
                    </ul>
                </div>
                <div className='p-5'>
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">Products</p>
                        <li className='text-gray-600 pb-2 font-semibold hover:text-blue-600 cursor-pointer'><Link href={"/Product/FinSoEasy360"}>FinSoEasy360</Link></li>
                        <li className='text-gray-600 pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Vendor Reconciliation Tool</li>
                        <li className='text-gray-600 pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Fixed Asset Management Tool</li>
                        {/* <li className='text-gray-600 pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Strike Off Companies</li> */}
                        {/* <li className='text-gray-600 pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Asset management</li> */}
                    </ul>
                </div>
                <div className='p-5'>
                    <ul>
                        <p className='text-gray-800 font-bold text-2xl pb-4'>
                        Company
                        </p>
                        <li className='text-gray-600 pb-2 font-semibold hover:text-blue-600 cursor-pointer'><Link href={"/"}>Home</Link></li>
                        <li className='text-gray-600 pb-2 font-semibold hover:text-blue-600 cursor-pointer'><Link href={"/Aboutus"}>About</Link></li>
                        <li className='text-gray-600 pb-2 font-semibold hover:text-blue-600 cursor-pointer'><Link href={"/Contactus"}>Contect us</Link></li>
                        <li className='text-gray-600 pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Products</li>
                    </ul>
                </div>
                <div className='p-5'>
                    <ul>
                        <p className='text-gray-800 font-bold text-2xl pb-4'>
                            Contact Information
                        </p>
                        <li className='text-gray-600 pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Address: G-22, II Floor Sector-3</li>
                        <li className='text-gray-600 pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Noida, Uttar Pradesh-201301</li>
                        <li className='text-gray-600 pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Phone: +91 95559 34205</li>
                        <li className='text-gray-600 pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Email: info@finsensor.in</li>
                        {/* <li className='text-gray-600 pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Press & Media</li> */}
                    </ul>
                </div>
            </div>
            <Separator />
            <div className='flex flex-col justify-center text-center p-5 bg-gray-50'>
                <h1 className='text-gray-800 font-semibold'>© 2024-2025 All right reserved | Build with by <span className='hover:text-blue-600 font-semibold cursor-pointer'> Finsensor Ai Private Limited</span></h1>
            </div>
        </div>
    )
}

export default Footer