import React from 'react'

const Fotter = () => {
    return (
        <div className='w-full h-[140vh] bg-[#202324] flex justify-center gap-10 pt-10 px-10'>
            <div className='relative  w-[50%] h-[120vh]   px-5'>
                <h1 className='font-[ochi2] text-white uppercase text-[110px] leading-[110px]'>eye- <br />opening</h1>
                <h1 className='absolute bottom-0 font-[ochi3] text-[50px] text-white '>Ochi</h1>
            </div>
            <div className='  w-[50%] text-white px-5'>
                <h1 className='font-[ochi2]  uppercase text-[110px] leading-[110px]'>presentations</h1>

                <div className='w-[100%] h-screen flex justify-between gap-10'>
                    <div className='relative w-[50%]  '>
                        <h1 className='py-5'>S: <br /> Instagram <br />Behance <br /> Facebook <br /> Linkedin</h1>
                        <h1 className='py-5'>L: <br /> 202-1965 W 4th Ave <br /> Vancouver, Canada <br /> 30 Chukarina St <br /> Lviv, Ukraine</h1>
                        <h1 className='py-5'>S: <br /> Instagram <br />Behance <br /> Facebook <br /> Linkedin</h1>
                        <h1 className='py-5'>E: <br /> hello@ochi.design</h1>
                        <h1 className=' absolute bottom-0 opacity-45'>© ochi design 2024. Legal Terms</h1>
                    </div>
                    <div className='relative w-[50%] mt-52'>
                        <h1>M: <br /> Home <br /> Services <br /> Our work <br /> About us <br /> Insights <br /> Contact us</h1>
                        <h1 className='absolute bottom-0 opacity-45  '>Website by Obys</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fotter