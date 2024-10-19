import React from 'react'
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
                                <div className='flex flex-col space-y-4 items-start w-full text-lg text-black mt-10'>
                                    <Link href={"/"}>Home</Link>
                                    <Link href={"/"}>Products</Link>
                                    <Link href={"/"}>About us</Link>
                                    <Link href={"/"}>Contact us</Link>
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