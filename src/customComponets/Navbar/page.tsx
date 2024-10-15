import React from 'react'
import Logo from './Logo'
import { NavigationBar } from './Navigation-bar'
import ActionButtons from './action-buttons'
const Navbar = () => {
    return (
        <div className="flex justify-between item-center px-10 border-b h-16 backdrop-blur">
            <Logo />
            <NavigationBar />
            <ActionButtons />
        </div>
    )
}

export default Navbar