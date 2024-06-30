import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi';



export default function Navbar() {
    
    const[nav, setNav] = useState(false)

    const handleMenu = ()=>{

        console.log("menu clicked")
        setNav(!nav);
        
    }

    return (
    <>

    <div className='absolute w-full flex justify-between p-2 items-center'>


        <h1 className='text-white font-bold text-lg z-20'>Travego</h1>

        < HiOutlineMenu onClick= {handleMenu} className='text-white z-20 cursor-pointer' size={25}/>

        <nav className ={nav 
        ? 'w-full h-screen top-0 left-0 bg-black/90 z-10 fixed ease-in duration-300'
        :'absolute h-screen w-full top-0 left-[-100%] ease-in duration-300 z-10' 
    }>

        <ul className='flex flex-col fixed w-full h-full justify-center items-center text-white space-y-4 text-2xl font-bold'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Destinations</li>
        <li className='cursor-pointer'>Reservations</li>
        <li className='cursor-pointer'>Amenties</li>
        <li className='cursor-pointer'>Villas</li>
        </ul>

        </nav>


    </div>
    </>
  )
}


