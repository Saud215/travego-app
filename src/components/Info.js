import React from 'react'

export default function Info() {
  return (
    
    <>
    <div className='grid h-[480px] bg-gray-200 mx-6 mt-14 lg:grid-cols-2 lg:mx-36'>

        <div className="info px-4 pt-4">
            
            <h3 className='text-xl font-bold mt-6 mb-3 lg:2xl lg:mt-16 '>
                Fine Interior Rooms
            </h3>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dignissimos perspiciatis tempora rem rerum aperiam et harum totam veniam iste!</p>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-1 px-4 pb-4 mt-6">

            <img className='row-span-2 ' src="https://images.unsplash.com/photo-1605346434674-a440ca4dc4c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="/" />

            <img className='row-span-1 object-cover h-full w-full' src="https://images.unsplash.com/photo-1572987669554-0ba2ba9aee1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="/" />

            <img className='row-span-1 object-cover h-full w-full' src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="/" />
        </div>


    </div>
    </>

  )
}
