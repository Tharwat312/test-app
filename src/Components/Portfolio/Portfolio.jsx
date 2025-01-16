import React, { useState } from 'react'
import Heading from '../Heading/Heading'
const images = Object.values(import.meta.glob("../../assets/images/*.{png,jpg,JPEG,PNG}", {
  eager: true,
  as: 'url'
}));
function Portfolio() {
  const [modal, setModal] = useState(false);
  const [imgSource, setImageSource] = useState("");
  return (
    <>
      <Heading text={"portfolio component"} />
      <div className="row">
        {images.map((image, index) => <div key={index} className='p-3 sm:w-full md:w-1/2 lg:w-1/3'>
          <img src={image} className='w-full rounded-md' alt=""
            onClick={(e) => {
              setModal(true);
              setImageSource(e.target.getAttribute('src'));
            }
            }
          />
        </div>)}
      </div>
      {modal && <div className='fixed inset-0 z-20 center'>
        <div className='absolute w-full h-full bg-sky-950 opacity-70'
          onClick={() => {
            setModal(false);
          }}
        ></div>
        <img src={imgSource} className='w-1/3 relative z-30 rounded-md' alt="" />
      </div>}
    </>
  )
}

export default Portfolio