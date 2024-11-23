import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col items-center w-full py-10 bg-[#27272A]'>
            <div className='transition-transform duration-300 cursor-pointer hover:scale-105 py-3 px-6 border-2 border-black rounded-full flex gap-3 justify-center items-center'>
                <h1 className='text-white'>VIEW ALL CASE STUDIES</h1>
                <div className='h-[12px] w-[12px] bg-black rounded-full'></div>
            </div>
            <div className='font-[ochi4] w-[90%] text-start pb-10'><h1 className='text-[50px] text-[#D3CFCA]'>Clients’ reviews</h1></div>
            <div className='w-full'>
                <div className='h-[1px] w-full bg-zinc-700'></div>
                <div className='py-3 flex justify-between items-center px-10 gap-10 underline text-zinc-300'>
                    <h1 className='w-[3%]'>Emily</h1>
                    <h1 className='w-[3%]'>Oliver</h1>
                    <h1 className='w-[3%]'>READ</h1>
                </div>
                <div className='h-[1px] w-full bg-zinc-700'></div>
                <div className='py-3 flex justify-between items-center px-10 gap-10 underline text-zinc-300'>
                    <h1 className='w-[3%]'>Sophia</h1>
                    <h1 className='w-[3%]'>Jackson</h1>
                    <h1 className='w-[3%]'>READ</h1>
                </div>
                <div className='h-[1px] w-full bg-zinc-700'></div>
                <div className='py-3 flex justify-between items-center px-10 gap-10 underline text-zinc-300'>
                    <h1 className='w-[3%]'>Ava</h1>
                    <h1 className='w-[3%]'>Liam</h1>
                    <h1 className='w-[3%]'>READ</h1>
                </div>
                <div className='h-[1px] w-full bg-zinc-700'></div>
                <div className='py-3 flex justify-between items-center px-10 gap-10 underline text-zinc-300'>
                    <h1 className='w-[3%]'>Isabella</h1>
                    <h1 className='w-[3%]'>Ethan</h1>
                    <h1 className='w-[3%]'>READ</h1>
                </div>
                <div className='h-[1px] w-full bg-zinc-700'></div>
                <div className='py-3 flex justify-between items-center px-10 gap-10 underline text-zinc-300'>
                    <h1 className='w-[3%]'>Mia</h1>
                    <h1 className='w-[3%]'>Lucas</h1>
                    <h1 className='w-[3%]'>READ</h1>
                </div>
                <div className='h-[1px] w-full bg-zinc-700'></div>
                <div className='py-3 flex justify-between items-center px-10 gap-10 underline text-zinc-300'>
                    <h1 className='w-[3%]'>Charlotte</h1>
                    <h1 className='w-[3%]'>Aiden</h1>
                    <h1 className='w-[3%]'>READ</h1>
                </div>
                <div className='h-[1px] w-full bg-zinc-700'></div>
                <div className='py-3 flex justify-between items-center px-10 gap-10 underline text-zinc-300'>
                    <h1 className='w-[3%]'>Amelia</h1>
                    <h1 className='w-[3%]'>James</h1>
                    <h1 className='w-[3%]'>READ</h1>
                </div>
                <div className='h-[1px] w-full bg-zinc-700'></div>
            </div>
        </div >
    )
}

export default About
