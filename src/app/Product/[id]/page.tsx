"use client"
import React from 'react'
import ProductHeroSection from './ProductHeroSection'
import { NavigationBar } from '@/customComponets/Navbar/Navigation-bar'
import Footer from '@/customComponets/Footer/page'
import Navbar from '@/customComponets/Navbar/page'

const page = ({ params }: any) => {

    return (
        <div>
            <ProductHeroSection />
        </div>
    )
}

export default page