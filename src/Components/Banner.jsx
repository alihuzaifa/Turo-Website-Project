import React from 'react'
import BannerImage from "../images/banner.jpg"

const Banner = () => {
  return (
    <>
      <div>
        <div>
          <img src={BannerImage} alt="banner" className='banner' />
        </div>
      </div>
    </>
  )
}

export default Banner
