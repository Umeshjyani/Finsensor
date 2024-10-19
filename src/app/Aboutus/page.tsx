"use client"
import React from 'react'
import Mainsection from './Herosection'
import Vision from './Vision'
import Mission from './Mission'
import WhyUs from '@/app/Aboutus/WhyUs'
import OurStory from './OurValues'
import OurValues from './OurValues'
import Overstory from './Overstory'

const page = () => {
    return (
        <div className='max-w-full'>
            <Mainsection />
            <Overstory />
            {/* <OurValues /> */}
            <Vision />
            <Mission />
            <WhyUs />
        </div>
    )
}
export default page