import React from 'react'

export default function Home() {
  return (
    <>
    <div className='w-full h-screen'>

        <img
         className=' top-0 left-0 w-full h-screen object-cover'
         src="https://images.pexels.com/photos/1287452/pexels-photo-1287452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />

        <div className=" bg-black/30 absolute top-0 left-0 w-full h-screen"/>

        <div className="absolute top-0 w-full h-full text-white flex flex-col justify-center">

            <div className="container m-auto absolute p-4 max-w-[1100px] space-y-2 md:left-[10%]">

                <p>All inclusive</p>

                <h1 className='font-bold text-3xl md:text-5xl drop-shadow-2xl'>Private Villas & Beaches</h1>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ducimus provident odio architecto dolor natus sit tempora. Unde, distinctio dicta.</p>

                <button className='bg-white/20 text-black rounded-full text-sm px-3 py-2 hover:bg-white border border-black/90 border-[0.25px]'>Reserve Now</button>

            </div>

        </div>

    </div>
    </>
  )
}
