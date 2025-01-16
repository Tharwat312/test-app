import React from 'react'
import { useLocation } from 'react-router-dom';

function Heading({ text }) {
    const { pathname } = useLocation();
    return (
        <h1 className={`${pathname === "/" || pathname === "/about" ? "text-white" : "text-[#2C3E50]"}
        uppercase text-5xl font-bold`}>{text}</h1>
    )
}

export default Heading