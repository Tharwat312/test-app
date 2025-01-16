import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Layout() {
    const { pathname } = useLocation();
    return (
        <>
            <Navbar />
            <div className={`${pathname === "/" || pathname === "/about" ? "bg-[#1ABC9C]" : ""} pt-32 min-h-dvh center`}>
                <div className="container text-center">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout