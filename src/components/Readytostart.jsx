import React, { useEffect, useState } from 'react'

const Readytostart = () => {
    const [rotate, setRotate] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Custom hook to handle mouse movement
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const deltaX = mouseX - window.innerWidth / 2;
            const deltaY = mouseY - window.innerHeight / 2;
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
            let x = (mouseX - window.innerWidth / 2) * 0.03;
            let y = (mouseY - window.innerHeight / 2) * 0.03;

            setPosition({ x, y });
        });

    }, []);
    return (
        <div className='relative px-10 py-24 w-full h-[140vh] bg-[#57660E] flex flex-col justify-start items-center'>
            <h1 className=' text-[200px] leading-[150px] font-[ochi1] text-[#D3CFCA] uppercase'>Ready <br /> to start <br /> the project</h1>
            <div className='w-full absolute top-[350px] right-[30vw]'>
                <div className='absolute px-6 py-5 gap-5 flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  '>
                    <div className='relative flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-[#1E2122]'>
                        <div className='absolute top-1/2 right-[35%] -translate-x-1/2 -translate-y-1/2 z-50 text-white'>
                            <h1 >Play  </h1>
                        </div>
                        <div style={{ transform: `translate(${position.x}px, ${position.y}px) rotate(${rotate}deg)` }} className=' relative  w-[9vw] h-[9vw] rounded-full bg-zinc-700'>
                            <div className='absolute top-[50%] left-0  w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-300'>
                            </div>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-[#1E2122]'>
                        <div className='absolute top-1/2 right-[35%] -translate-x-1/2 -translate-y-1/2 z-50 text-white'>
                            <h1 >Play  </h1>
                        </div>
                        <div style={{ transform: `translate(${position.x}px, ${position.y}px) rotate(${rotate}deg)` }} className='relative  w-[9vw] h-[9vw] rounded-full bg-zinc-700'>
                            <div className='absolute top-[50%] left-0 w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-300'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='transition-transform duration-300 cursor-pointer hover:scale-105 bg-zinc-800 mt-10 py-3 px-6 border-2 border-black rounded-full flex gap-3 justify-center items-center'>
                <h1 className='uppercase text-white'>start the  PROJECT</h1>
                <div className='h-[12px] w-[12px] bg-black rounded-full'></div>
            </div >
            <h1 className='text-white py-5'>OR</h1>
            <div className='transition-transform duration-300 cursor-pointer hover:scale-105 uppercase py-3 px-6 border-2 border-black rounded-full flex gap-3 justify-center items-center'>
                <h1 className='text-white'>Hello@ochi.design</h1>
                <div className='h-[12px] w-[12px] bg-black rounded-full'></div>
            </div>
        </div>
    )
}

export default Readytostart