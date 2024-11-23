import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {


    return (
        <div   className='rounded-tr-[30px] rounded-tl-[30px] w-full py-10 px-1 bg-[#003E36] text-white'>
            <div className=' pb-9 border-t-2 border-b-2 border-zinc-500 flex leading-[45vh] whitespace-nowrap overflow-hidden'>
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }} className='text-[380px] font-[ochi2]  '> WE ARE OCHI </motion.h1>
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }} className='text-[380px] font-[ochi2] pl-20'> WE ARE OCHI </motion.h1>
            </div>
        </div>
    )
}

export default Marquee
