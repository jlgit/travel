"use client"

import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'

const ResponsiveNav = () => {
    const [showNav, setShowNamv] = useState(false);
    const handNavShow = () => setShowNamv(true);
    const handCloseNav = () => setShowNamv(false);

    return (
        <div>
            <Navbar openNav={handNavShow} />
            <MobileNavbar showNav={showNav} closeNav={handCloseNav} />
        </div>
    )
}

export default ResponsiveNav