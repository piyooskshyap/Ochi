import React from 'react'

const Cards = () => {
  return (
    <div className='w-full gap-5 px-10 py-5 bg-[#27272A] flex '>
      <div className='rounded-xl relative w-[50%] py-5 px-5 bg-[#003E36] flex justify-center items-center'>
        <h1 className=' text-[70px] text-[#CDEA68] font-[ochi5]'>OCHi</h1>
        <h1 className='absolute bottom-10 left-10 border-2 border-black rounded-full py-1 px-3 text-white text-[14px]'>©2019-2022</h1>
      </div>
      <div className='rounded-xl relative w-[25%] py-5 px-5 bg-[#191B1C] flex justify-center items-center'>
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <h1 className='absolute bottom-10 left-10 border-2 border-black rounded-full py-1 px-3 text-white text-[14px]'>RATING 5.0 ON CLUTCH</h1>
      </div>
      <div className='rounded-xl relative w-[25%] py-32 px-5 bg-[#212121] flex justify-center items-center'>
        <img className='w-[100px]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <h1 className='absolute bottom-10 left-10 border-2 border-black rounded-full py-1 px-3 text-white text-[14px]'>BUSINESS BOOTCAMP ALUMNI</h1>
      </div>
    </div>
  )
}

export default Cards