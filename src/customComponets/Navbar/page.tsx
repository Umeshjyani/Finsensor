import React from 'react'
import Logo from './Logo'
import { NavigationBar } from './Navigation-bar'
import ActionButtons from './action-buttons'
const Navbar = () => {
    return (
        <div className="flex justify-between item-center px-10 border-b h-16 bg-white sticky  top-0 z-50">
            {/* <Logo /> */}
            <div className='flex items-center'>
                <span className="!font-extrabold text-[#e97944] text-[35px]">FINSENSOR</span>
                <span className="!font-extrabold text-[#0582fd] text-[35px]">.AI</span>
            </div>
            <NavigationBar />
            <ActionButtons />
        </div>
    )
}

export default Navbar