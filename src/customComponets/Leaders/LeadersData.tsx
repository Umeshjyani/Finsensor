// 'use client'
// import * as React from "react"
// import { type CarouselApi } from "@/components/ui/carousel"
// import { Card, CardContent } from "@/components/ui/card"
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"
// import Autoplay from "embla-carousel-autoplay"
// // import AmitGarg from "@/../public/Amit.jpg"
// import Logo from '../../../public/Amit.jpg'
// import Image from "next/image"
// const LeadersData = ({ user }: any) => {
//     const [api, setApi] = React.useState<CarouselApi>()
//     // console.log(AmitGarg)
//     return (
//         <div id="leaders_page" data-aos="fade-down"
//             data-aos-easing="linear"
//             data-aos-duration="1500">
//             <Carousel opts={{
//                 align: "start",
//                 loop: true,
//             }}
//                 plugins={[
//                     Autoplay({
//                         delay: 10000,
//                     }),
//                 ]}
//                 setApi={setApi} className="w-[calc(100vw-200px)]  m-auto my-10">
//                 <CarouselContent>

//                     {user.map((ele: any) => {
//                         return (
//                             <CarouselItem>
//                                 <Card>
//                                     <div className="px-4 pb-6 min-h-96" >
//                                         <div className="text-center my-4">

//                                             <Image
//                                                 src={ele?.image || {}}
//                                                 className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
//                                                 alt="Picture of the author"
//                                             />
//                                             <div className="py-2">
//                                                 <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">{ele?.name}</h3>
//                                                 <div className="text-2xl text-gray-500 font-bold mt-2">
//                                                     {ele?.designation}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <div className="text-gray-700 dark:text-gray-300 text-justify text-md break-words ">
//                                                 {ele.description}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </Card>
//                             </CarouselItem>
//                         )

//                     })}


//                 </CarouselContent>
//                 {/* <CarouselPrevious />
//                 <CarouselNext /> */}
//             </Carousel>

//         </div >
//     )
// }

// export default LeadersData
'use client'
import * as React from "react"
import { type CarouselApi } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Logo from '../../../public/Amit.jpg'
import Image from "next/image"

const LeadersData = ({ user }: any) => {
    const [api, setApi] = React.useState<CarouselApi>()

    return (
        <div id="leaders_page" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
        >
            <Carousel opts={{
                align: "start",
                loop: true,

            }}
                plugins={[
                    Autoplay({
                        delay: 10000,
                    }),
                ]}
                setApi={setApi} className="w-full m-auto my-6">
                <CarouselContent>
                    {user.map((ele: any) => (
                        <CarouselItem key={ele.name} className="w-full min-h-full">
                            <div className="bg-white dark:bg-gray-700 shadow-md rounded-md">
                                {/* <div className="text-center my-4">
                                    <Image
                                        src={ele?.image || {}}
                                        className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                                        alt="Picture of the author"
                                    />
                                    <div className="py-2">
                                        <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">{ele?.name}</h3>
                                        <div className="text-2xl text-gray-500 font-bold mt-2">
                                            {ele?.designation}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-gray-700 dark:text-gray-300 text-justify text-md break-words">
                                    {ele.description}
                                </div> */}
                                <div id="about" className="relative bg-white overflow-hidden">
                                    <div className="max-w-7xl mx-auto">
                                        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                                            <svg
                                                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                                                fill="currentColor"
                                                viewBox="0 0 100 100"
                                                preserveAspectRatio="none"
                                                aria-hidden="true"
                                            >
                                                <polygon points="50,0 100,0 50,100 0,100"></polygon>
                                            </svg>
                                            <div className="pt-1"></div>

                                            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                                <div className="sm:text-center lg:text-left">
                                                    <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                                                        {ele.name}
                                                    </h2>
                                                    <h3 className="my-6 text-2xl tracking-tight font-extrabold text-gray-500 sm:text-3xl md:text-4xl">
                                                        <span className="text-blue-500 ">{ele.designation}</span>
                                                    </h3>
                                                    <p>
                                                        {ele.description}
                                                    </p>
                                                </div>
                                            </main>
                                        </div>
                                    </div>
                                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                                        <Image
                                            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
                                            src={ele.image}
                                            alt=""
                                            width={500}
                                            height={400}
                                        />
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
                <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" /> */}
            </Carousel>
        </div >
    )
}

export default LeadersData
