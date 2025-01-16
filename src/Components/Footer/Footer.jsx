import React from 'react'

function Footer() {
    return (
        <>
            <div className='bg-[#2C3E50]'>
                <div className="container">
                    <div className="row">
                        <div className='sm:w-full md:w-1/2 lg:w-1/3 text-center text-white py-24'>
                            <h3 className='uppercase font-bold text-4xl'>location</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243
                            </p>
                        </div>
                        <div className='sm:w-full md:w-1/2 lg:w-1/3 text-center text-white py-24'>
                            <h3 className='uppercase font-bold text-4xl'>around the web</h3>
                            <ul className='center gap-x-10 text-xl mt-5'>
                                <li className='border border-white p-5 w-8 h-8 rounded-full center'>
                                    <i className="fa-brands fa-facebook"></i>
                                </li>
                                <li className='border border-white p-5 w-8 h-8 rounded-full center'>
                                    <i className="fa-brands fa-facebook"></i>
                                </li>
                                <li className='border border-white p-5 w-8 h-8 rounded-full center'>
                                    <i className="fa-brands fa-facebook"></i>
                                </li>
                                <li className='border border-white p-5 w-8 h-8 rounded-full center'>
                                    <i className="fa-brands fa-facebook"></i>
                                </li>
                            </ul>
                        </div>
                        <div className='sm:w-full md:w-1/2 lg:w-1/3 text-center text-white py-24'>
                            <h3>location</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='bg-[#1A252F] py-5 text-white text-center'>
                Copyright © Your Website 2021
            </p>
        </>
    )
}

export default Footer