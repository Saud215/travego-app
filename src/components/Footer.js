import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {TiSocialPinterest} from 'react-icons/ti'


export default function Footer() {
  return (
    <>
    <div className='w-full bg-gray-900 h-[full] px-16 border-b-4 border-b-gray-500 text-white grid grid-cols-2 gap-3 md:grid-cols-4 py-4'>

        <div className="space-y-2">
            <h6 className='font-bold uppercase text-md'>Solutions</h6>
            <ul>
            <li>Travel</li>
            <li>Booking</li>
            <li>Flights</li>
            <li>Cruises</li>
            <li>Ground</li>
            </ul>
        </div>

        <div className="space-y-2">
            <h6 className='font-bold uppercase text-md'>Support</h6>
            <ul>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Tours</li>
            <li>Refunds</li>
            </ul>
        </div>

        <div className="space-y-2">
            <h6 className='font-bold uppercase text-md'>Company</h6>
            <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Partners</li>
            </ul>
        </div>

        <div className="space-y-2">
            <h6 className='font-bold uppercase text-md'>Legal</h6>
            <ul>
            <li>Claims</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Policies</li>
            <li>Conditions</li>
            </ul>
        </div>

        <div className="col-span-2 my-4">

                <h6 className='uppercase font-bold text-md'>Subscribe to Our Newsletter</h6>

                <p>The latest deals, articles and resources sent to your inbox weekly.</p>

                <form className='flex flex-col md:flex-row space-y-4 md:space-x-8 '>

                    <input type="email" placeholder='Email Address'
                    className='rounded-md w-full p-1 text-sm text-black' />

                    <button className='border border-white rounded-md w-full'>Subscribe</button>

                </form>
            
        </div>

        <div className='w-full col-span-2 space-y-2'>

            <hr />
                <p className='text-sm text-center'>2023 LLC , All rights reserved.</p>

            <div className='flex justify-around w-full'>


                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <TiSocialPinterest/>
            </div>

        </div>
        

    </div>
    </>
  )
}
