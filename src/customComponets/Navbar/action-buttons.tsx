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
                                    <Link
                                        href={"/"}
                                    >Home</Link>
                                    <Link
                                        href={"/"}
                                    >About</Link>
                                    <Link
                                        href={"/"}
                                    >Contect us</Link>
                                    <Link
                                        href={"/"}
                                    >Career</Link>
                                </div>
                            </SheetDescription>

                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

            <div className='hidden md:flex md:space-x-4'>
                <Button className="text-md rounded text-white bg-blue-500" variant="outline">Book a demo</Button>
            </div>




        </div >
    )
}

export default ActionButtons