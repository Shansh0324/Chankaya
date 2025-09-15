import React from 'react'
import CircularGallery from '../Animations/CircularGallery'

const Carousel = () => {
  return (
    <>
    <div className='bg-[#FFFFFF] min-h-screen py-[18vw] text-center text-[#333333] tracking-tight'>
        <h1 className='text-[9vw]'>Under <i className='font-mazius text-[#ff9800]'>Development</i></h1>
        <h3 className='text-[2.5vw] text-[#979695] uppercase tracking-tight p-2'>Coming Soon !</h3>
        
        {/* Circular Gallery Section */}
        <div style={{ height: '600px', position: 'relative', width: '100%', marginTop: '4vw' }}>
          <CircularGallery 
            bend={2} 
            textColor="#ffffff" 
            borderRadius={0.05} 
            scrollEase={0.08}
            scrollSpeed={1.5}
          />
        </div>
    </div>
    </>
  )
}

export default Carousel
