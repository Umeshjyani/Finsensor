'use client'
import * as React from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const LeadersData = ({ user }: any) => {
    const [api, setApi] = React.useState<CarouselApi>();

    return (
        <div id="leaders_page" className="w-full">
            <Carousel
                opts={{ align: "start", loop: true, dragFree: false }}
                plugins={[Autoplay({ delay: 5000 })]}
                setApi={setApi}
                className="w-full m-auto my-6"
            >
                <CarouselContent>
                    {user.map((ele: any, index: number) => (
                        <CarouselItem key={index} className="w-full flex justify-center items-center">
                            <div className="bg-white dark:bg-gray-800 p-2 my-2 mx-8 shadow-xl rounded-lg text-center">
                                {/* Profile Image */}
                                <Image
                                    src={ele?.image || {}}
                                    alt="Profile Image"
                                    className="h-40 w-40 rounded-full border-4 border-blue-500 mx-auto"
                                    width={160}
                                    height={160}
                                />

                                {/* Name & Designation */}
                                <h3 className="text-3xl font-bold mt-6">{ele?.name}</h3>
                                <p className="text-xl text-gray-500">{ele?.designation}</p>
                                <div className="flex justify-center space-x-4 mt-6">
                                    {/* Twitter Icon */}
                                    {ele?.socials?.twitter && (
                                        <a href={ele.socials.twitter} target="_blank" rel="noopener noreferrer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="h-6 w-6 text-blue-500"
                                            >
                                                <path d="M24 4.56c-.88.39-1.83.65-2.82.77a4.92 4.92 0 0 0 2.16-2.71c-.95.56-2 .96-3.12 1.18a4.92 4.92 0 0 0-8.38 4.49A13.94 13.94 0 0 1 1.64 3.16 4.93 4.93 0 0 0 3.17 9.7a4.88 4.88 0 0 1-2.23-.61v.06a4.92 4.92 0 0 0 3.95 4.82 4.88 4.88 0 0 1-2.21.08 4.92 4.92 0 0 0 4.6 3.42A9.86 9.86 0 0 1 .96 19.74a13.9 13.9 0 0 0 7.55 2.21c9.06 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.02-.63A10 10 0 0 0 24 4.56z" />
                                            </svg>
                                        </a>
                                    )}
                                    {/* LinkedIn Icon */}
                                    {ele?.socials?.linkedin && (
                                        <a href={ele.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="h-6 w-6 text-blue-700"
                                            >
                                                <path d="M22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46A1.77 1.77 0 0 0 1.77 24h20.46A1.77 1.77 0 0 0 24 22.23V1.77A1.77 1.77 0 0 0 22.23 0zM7.09 20.45H3.55V9h3.54v11.45zM5.32 7.54a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm14.9 12.91h-3.54v-5.65c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98v5.75h-3.54V9h3.4v1.56h.05a3.74 3.74 0 0 1 3.36-1.85c3.59 0 4.25 2.36 4.25 5.44v6.3z" />
                                            </svg>
                                        </a>
                                    )}
                                    {/* Facebook Icon */}
                                    {ele?.socials?.facebook && (
                                        <a href={ele.socials.facebook} target="_blank" rel="noopener noreferrer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="h-6 w-6 text-blue-600"
                                            >
                                                <path d="M22.675 0H1.325C.594 0 0 .594 0 1.325v21.351C0 23.406.594 24 1.325 24H12.82v-9.293H9.692v-3.62h3.127V8.412c0-3.1 1.892-4.785 4.656-4.785 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.762v2.31h3.587l-.467 3.62h-3.12V24h6.116C23.406 24 24 23.406 24 22.676V1.325C24 .594 23.406 0 22.675 0z" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                                {/* Description */}
                                <p className="text-gray-700 dark:text-gray-300 text-md mt-4 text-justify">
                                    {ele?.description}
                                </p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* Carousel Navigation (optional, remove if only autoplay is required) */}
                <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl p-2">
                    &#10094;
                </CarouselPrevious>
                <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl p-2">
                    &#10095;
                </CarouselNext>
            </Carousel>
        </div>
    );
};

export default LeadersData;
