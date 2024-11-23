import React, { useState } from 'react';

const About = () => {
    return (
        <div className=' flex flex-col items-center w-full py-10 bg-[#57660E] rounded-tr-[100px] rounded-tl-[100px]'>
            <div className='font-[ochi4] w-[90%] text-start pb-20'><h1 className='text-[50px] text-[#D3CFCA]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1></div>
            <div className=' h-[1px] w-full bg-[#D3CFCA]'></div>
            <div className='flex gap-9 w-full py-5 px-10 text-white'>
                <h1 className='w-[50%]'>What you can expect:</h1>
                <h1 className='w-[25%] h-[40vh] '>
                    We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                    <br /> <span className='  text-black'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.  </span></h1>
                <h1 className='w-[30%] mt-32 pl-32'>S: <br />
                    <span>
                        Instagram <br />
                        Behance <br />
                        Facebook <br />
                        Linkedin <br />
                    </span>
                </h1>
            </div>
            <div className=' h-[1px] w-full bg-[#D3CFCA]'></div>

            <div className='w-full py-10 px-10 flex justify-between items-start '>
                <div>
                    <h1 className='text-[3vw] text-white'>OUR APPROCH :</h1>
                    <div className="btn gap-5 px-2 w-fit rounded-full bg-[#202324] flex items-center cursor-pointer transition-transform duration-300 hover:scale-105">
                        <h1 className="px-3 text-white text-[30px] pb-1">READ MORE</h1>
                        <div className="h-[15px] w-[15px] rounded-full bg-[#D3CFCA]"></div>
                    </div>

                </div>
                <img className='rounded-3xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
        </div >
    )
}

export default About
