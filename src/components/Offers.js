import React from 'react'

export default function Offers() {
  return (
   <>

   <div className='max-w-[900px] m-auto px-3 py-8 flex flex-wrap justify-around'>

    <p className='text-gray-700 text-lg font-bold '>Booking Incentives</p>
    <p className='text-gray-700 text-lg font-bold '>Competititive Rates</p>
    <p className='text-gray-700 text-lg font-bold '>Book With Flexibility</p>
    <p className='text-gray-700 text-lg font-bold '>Trip Insurance</p>

   </div>

   <div className="max-w-[1400px] m-auto grid lg:grid-cols-2 p-4 space-x-4 gap-4">

    <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
      <img className='w-full h-full row-span-3 object-cover p-2' src="https://images.unsplash.com/photo-1578922746465-3a80a228f223?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="/" />

      <img className='w-full h-full row-span-2 p-2' src="https://images.unsplash.com/photo-1544473244-f6895e69ad8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="/" />

      <img className='w-full h-full row-span-2 object-cover p-2' src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="/" />

      <img className='w-full h-full row-span-3 object-cover p-2' src="https://images.unsplash.com/photo-1547528114-f4daa226e256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="/" />

      <img className='w-full h-full row-span-2 object-cover p-2' src="https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80" alt="/" />

    </div>

    <div className="space-y-3">

      <h3 className='text-4xl font-bold'>Plan Your Next Trip</h3>

      <p className='text-xl font-bold'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor.</p>

      <p className=' text-md font-bold' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, explicabo nisi. Obcaecati veniam, laboriosam voluptatibus doloremque ea sequi expedita iste corrupti nemo voluptas aspernatur atque.</p>


      <button className='bg-white border border-black rounded-full text-sm p-2 mr-4 hover:drop-shadow-2xl'>Learn More</button>
      <button className='bg-black/80 text-white border border-black rounded-full text-sm p-2 hover:drop-shadow-2xl'>Book Now</button>

    </div>

   </div>
   </>
  )
}
