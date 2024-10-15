"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";


const Carousels = ({ children: slides, autoslide = false, autoSlideInterval = 3000 }: any) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const prev = () => {
        setCurrentSlide((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    };

    const next = () => {
        setCurrentSlide((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    };

    useEffect(() => {
        if (!autoslide) return;

        const slideInterval = setInterval(() => {
            setCurrentSlide((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
        }, autoSlideInterval);

        return () => clearInterval(slideInterval);
    }, [autoslide, autoSlideInterval, slides]);
    return (
        <div className='overflow-hidden relative'>
            <div className='flex transition-transform duration-150 ease-out-500' style={{ transform: `translateX(-${currentSlide * 100}%)` }}> {slides}</div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <Button variant="link" className='p-1 rounded-full  bg-white text-gray-800 hover:bg-white'><HiChevronLeft onClick={prev} size={30} />
                </Button>
                <Button variant="link" className='p-1 rounded-full  bg-white text-gray-800 hover:bg-white'><HiChevronRight onClick={next} size={30} /></Button>
            </div>

            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((_: any, index: any) => (
                        <div
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`transation-all w-3 h-3 bg-white rounded-full ${currentSlide === index ? "p-2" : "bg-opacity-50"}`}
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Carousels