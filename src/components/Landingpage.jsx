import { motion } from 'framer-motion'
import React from 'react'

const Landingpage = () => {

    return (
        <div   className='w-full h-screen bg-[#27272a] pt-1 text-[#D3CFCA]'>
            <div className='textstructure mt-[20vh] pl-10'>
                {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((items, index) => {
                    return (
                        <div className="masker">
                            <div className="w-fit flex ">
                                {index === 1 && (<motion.div initial={{ width: 0 }} animate={{width:"10vw"}} transition={{ease:[0.65, 0, 0.35, 2] , duration:2}} className='w-[9vw] h-[13.5vh]  mt-3.5 mr-6 rounded-2xl overflow-hidden'> <img className='mt-[px]' src="/src/assets/img/ochilandingimg.png" alt="" /></motion.div>)}
                                <div key={index} className=" leading-[16vh] capitalize font-[ochi1] text-9xl">
                                    <h1 className='' >{items}</h1>
                                </div>
                            </div>
                        </div>)
                })}

            </div>
            <div className='border-t-2 border-zinc-500 mt-[102px] pt-2 flex justify-between px-8'>
                {["For public and private companies", "From the first pitch to IPO"].map((items, index) => {
                    return <h1 className='text-[15px] py-2'>{items}</h1>
                })}
                <div className="start flex gap-2 items-center">
                    <div className='border-2 border-zinc-500 px-2 py-1 rounded-3xl'>START THE PROJECT</div>
                    <div className='border-2 border-zinc-500 px-1 rounded-full'><i class="ri-arrow-right-up-line text-[22px]"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage
