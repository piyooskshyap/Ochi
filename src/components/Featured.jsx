import { motion } from 'framer-motion'
import React, { useState } from 'react';


const Featured = () => {

    const [isHovering, setisHovering] = useState(false)
    const [isHovering2, setisHovering2] = useState(false)
    const [isHovering3, setisHovering3] = useState(false)
    const [isHovering4, setisHovering4] = useState(false)
    const [isHovering5, setisHovering5] = useState(false)
    const [isHovering6, setisHovering6] = useState(false)

    return (
        <div className='w-full'>
            <div className='w-full py-10 px-10 bg-zinc-800 rounded-tr-[100px] rounded-tl-[100px]'>
                <h1 className='font-[ochi3] text-5xl text-white'>Featured Projects</h1>
            </div>
            <div className='h-[1px] w-full bg-[#D3CFCA]'></div>

            <div className='w-full bg-zinc-800 flex justify-center gap-7 items-center mt-10 uppercase'>
                <div className='relative' >
                    <div className='flex items-center gap-3 py-5 text-white'>
                        <div className='h-[12px] w-[12px] rounded-full bg-yellow-500'></div>
                        <h1>Cosmic Journey</h1>
                    </div>
                    <img onMouseEnter={() => setisHovering(true)} onMouseLeave={() => setisHovering(false)} className='w-[600px] rounded-xl' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                    <div className='flex items-center gap-3 py-5 text-white'>
                        <div className='h-[12px] w-[12px] rounded-full bg-yellow-500'></div>
                        <h1 className='rounded-xl py-1 px-2 border-[1px] border-black'>Stellar Templates</h1>
                        <h1 className='rounded-xl py-1 px-2 border-[1px] border-black'>Investor Deck</h1>
                        <h1 className='rounded-xl py-1 px-2 border-[1px] border-black'>Marketing Assets</h1>
                    </div>
                    <div>
                        <h1 className='z-50 overflow-hidden absolute top-[40%] right-[-30%] text-8xl font-[ochi1] text-white'>{"Cardboard".split("").map((item, index) => (
                            <motion.span className='inline-block'
                                initial={{ y: "100%" }}
                                animate={isHovering ? { y: "0" } : { y: "100%" }}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }}
                            >{item}</motion.span>
                        ))}</h1>
                    </div>
                </div>
                <div className='relative'>
                    <div className='flex items-center gap-3 py-5 text-white'>
                        <div className='h-[12px] w-[12px] rounded-full bg-yellow-500'></div>
                        <h1>Orbit Designs</h1>
                    </div>
                    <img onMouseEnter={() => setisHovering2(true)} onMouseLeave={() => setisHovering2(false)} className='w-[600px] rounded-xl' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
                    <div className='flex items-center gap-3 py-5 text-white'>
                        <div className='h-[12px] w-[12px] rounded-full bg-yellow-500'></div>
                        <h1 className='rounded-xl py-1 px-2 border-[1px] border-black'>Pitch Presentation</h1>
                    </div>
                    <div>
                        <h1 className='z-50 overflow-hidden absolute top-[40%] right-[80%] text-8xl font-[ochi1] text-white whitespace-nowrap'>
                            {"Spaceship".split("").map((item, index) => (
                                <motion.span
                                    className='inline-block'
                                    initial={{ y: "100%" }}
                                    animate={isHovering2 ? { y: "0" } : { y: "100%" }}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                                    key={index} // Adding a unique key for each span
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                    </div>
                </div>
            </div>









            <div className='w-full bg-zinc-800 flex justify-center gap-7 items-center mt-10 uppercase'>
                <div className='relative'>
                    <div className='flex items-center gap-3 py-5 text-white'>
                        <div className='h-[12px] w-[12px] rounded-full bg-yellow-500'></div>
                        <h1>Galactic Insights</h1>
                    </div>
                    <img onMouseEnter={() => setisHovering3(true)} onMouseLeave={() => setisHovering3(false)} className='w-[600px] rounded-xl' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    <div className='flex items-center gap-3 py-5 text-white'>
                        <div className='h-[12px] w-[12px] rounded-full bg-yellow-500'></div>
                        <h1 className='rounded-xl py-1 px-2 border-[1px] border-black'>Research Deck</h1>
                        <h1 className='rounded-xl py-1 px-2 border-[1px] border-black'>Product Templates</h1>
                        <h1 className='rounded-xl py-1 px-2 border-[1px] border-black'>Social Kit</h1>
                    </div>
                    <div>
                        <h1 className='z-50 overflow-hidden absolute top-[40%] right-[-30%] text-8xl font-[ochi1] text-white'>{"Cardboard".split("").map((item, index) => (
                            <motion.span
                                className='inline-block'
                                initial={{ y: "100%" }}
                                animate={isHovering3 ? { y: "0" } : { y: "100%" }}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                                key={index} // Adding a unique key for each span
                            >
                                {item}
                            </motion.span>
                        ))}</h1>
                    </div>
                </div>

                <div className='relative'>
                    <div className='flex items-center gap-3 py-5 text-white'>
                        <div className='h-[12px] w-[12px] rounded-full bg-yellow-500'></div>
                        <h1>Fusion Brand</h1>
                    </div>
                    <img onMouseEnter={() => setisHovering4(true)} onMouseLeave={() => setisHovering4(false)} className='w-[600px] rounded-xl' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    <div className='flex items-center gap-3 py-5 text-white'>
                        <div className='h-[12px] w-[12px] rounded-full bg-yellow-500'></div>
                        <h1 className='rounded-xl py-1 px-2 border-[1px] border-black'>Brand Kit</h1>
                    </div>
                    <div>
                        <h1 className='z-50 overflow-hidden absolute top-[40%] right-[80%] text-8xl font-[ochi1] text-white whitespace-nowrap'>{"Spaceship".split("").map((item, index) => (
                            <motion.span
                                className='inline-block'
                                initial={{ y: "100%" }}
                                animate={isHovering4 ? { y: "0" } : { y: "100%" }}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                                key={index} // Adding a unique key for each span
                            >
                                {item}
                            </motion.span>
                        ))}</h1>
                    </div>
                </div>
            </div>












            <div className='w-full bg-zinc-800 flex justify-center gap-7 items-center mt-10 uppercase'>
                <div className='relative'>
                    <div className='flex items-center gap-3 py-5 text-white'>
                        <div className='h-[12px] w-[12px] rounded-full bg-yellow-500'></div>
                        <h1>Nova Enterprise</h1>
                    </div>
                    <img onMouseEnter={() => setisHovering5(true)} onMouseLeave={() => setisHovering5(false)} className='w-[600px] rounded-xl' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                    <div className='flex items-center gap-3 py-5 text-white'>
                        <div className='h-[12px] w-[12px] rounded-full bg-yellow-500'></div>
                        <h1 className='rounded-xl py-1 px-2 border-[1px] border-black'>Marketing Deck</h1>
                        <h1 className='rounded-xl py-1 px-2 border-[1px] border-black'>Presentation Slides</h1>
                    </div>
                    <div>
                        <h1 className='z-50 overflow-hidden absolute top-[40%] right-[-30%] text-8xl font-[ochi1] text-white'>{"Cardboard".split("").map((item, index) => (
                            <motion.span
                                className='inline-block'
                                initial={{ y: "100%" }}
                                animate={isHovering5 ? { y: "0" } : { y: "100%" }}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                                key={index} // Adding a unique key for each span
                            >
                                {item}
                            </motion.span>
                        ))}</h1>
                    </div>
                </div>

                <div className='relative'>
                    <div className='flex items-center gap-3 py-5 text-white'>
                        <div className='h-[12px] w-[12px] rounded-full bg-yellow-500'></div>
                        <h1>Stellar Strategy</h1>
                    </div>
                    <img onMouseEnter={() => setisHovering6(true)} onMouseLeave={() => setisHovering6(false)} className='w-[600px] rounded-xl' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                    <div className='flex items-center gap-3 py-5 text-white'>
                        <div className='h-[12px] w-[12px] rounded-full bg-yellow-500'></div>
                        <h1 className='rounded-xl py-1 px-2 border-[1px] border-black'>Pitch Deck</h1>
                    </div>
                    <div>
                        <h1 className='z-50 overflow-hidden absolute top-[40%] right-[80%] text-8xl font-[ochi1] text-white whitespace-nowrap'>{"Spaceship".split("").map((item, index) => (
                            <motion.span
                                className='inline-block'
                                initial={{ y: "100%" }}
                                animate={isHovering6 ? { y: "0" } : { y: "100%" }}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                                key={index} // Adding a unique key for each span
                            >
                                {item}
                            </motion.span>
                        ))}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
