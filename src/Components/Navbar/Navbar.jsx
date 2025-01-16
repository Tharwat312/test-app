import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const [isScrolling, setIsScrolling] = useState(false);
    const handleScroll = () => {
        window.scrollY > 20 ? setIsScrolling(true) : setIsScrolling(false);
    }
    window.addEventListener("scroll", handleScroll);
    return (
        <>
            <nav className={`${isScrolling === false ? "py-10" : "py-5"} transition-[padding] duration-500 fixed top-0 left-0 right-0 bg-[#2C3E50] z-10`}>
                <div className="container flex justify-between items-center">
                    <h2>
                        <Link className='uppercase text-3xl font-bold text-white' to={"/"}>start framework</Link>
                    </h2>
                    <ul className='center gap-x-7'>
                        <li>
                            <NavLink className='uppercase text-white text-xl font-bold p-3' to={"about"}>about</NavLink>
                        </li>
                        <li>
                            <NavLink className='uppercase text-white text-xl font-bold p-3' to={"portfolio"}>portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink className='uppercase text-white text-xl font-bold p-3' to={"contact"}>contact  </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar