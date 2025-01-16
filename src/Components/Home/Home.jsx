import React from 'react'
import Heading from '../Heading/Heading'
import avatarImage from '../../assets/images/Avatar.svg';
function Home() {
    return (
        <>
            <img src={avatarImage} className='w-1/6 mx-auto' alt="" />
            <Heading text={"start framework"} />
        </>
    )
}

export default Home