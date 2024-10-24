"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { LuAlignJustify } from "react-icons/lu";
import Link from 'next/link';
const ActionButtons = () => {
    const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

    const toggleProductMenu = () => {
        setIsProductMenuOpen(!isProductMenuOpen);
    };

    return (
        <div className='flex place-items-center	'>
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger >
                        <LuAlignJustify />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetDescription>
                                <div className='flex flex-col space-y-3 items-start w-full text-lg text-black mt-10'>
                                    <Link href={"/"} className="w-full text-left py-2 px-4 bg-gray-100 rounded-md shadow hover:bg-gray-200 focus:outline-none flex justify-between">
                                        Home
                                    </Link>
                                    <div className="w-full">
                                        <button
                                            onClick={toggleProductMenu}
                                            className="w-full text-left py-2 px-4 bg-gray-100 rounded-md shadow hover:bg-gray-200 focus:outline-none flex justify-between"
                                        >
                                            <span>
                                                Products
                                            </span>
                                            <span className='text-sm pt-1'>
                                                {isProductMenuOpen ? '▲' : '▼'}
                                            </span>
                                        </button>
                                        {isProductMenuOpen && (
                                            <div className="ml-4 mt-2 flex flex-col space-y-2 bg-gray-50 p-2 rounded-md shadow-inner">
                                                <Link href={"/Product/FinSoEasy360"} className='text-left text-[17px]'>FinSoEasy360</Link>
                                                <Link href={"/"} className='text-left text-[17px]'>FamSoEasy360</Link>
                                                <Link href={"/"} className='text-left text-[17px]'>ReconSoEasy360</Link>
                                            </div>
                                        )}
                                    </div>
                                    <Link href={"/Aboutus"} className="w-full text-left py-2 px-4 bg-gray-100 rounded-md shadow hover:bg-gray-200 focus:outline-none flex justify-between">
                                        About us
                                    </Link>
                                    <Link href={"/Contactus"} className="w-full text-left py-2 px-4 bg-gray-100 rounded-md shadow hover:bg-gray-200 focus:outline-none flex justify-between">
                                        Contact us
                                    </Link>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            <div className='hidden md:flex md:space-x-4'>
                <Link href={"/Contactus"}>
                    <Button className="text-md rounded text-white bg-[#2323CE]" variant="outline">Book a Demo</Button>
                </Link>
            </div>
        </div >
    )
}

export default ActionButtons