import React,{useState} from 'react'
import {BiLeftArrow,BiRightArrow} from 'react-icons/bi'
import {RxDotFilled} from 'react-icons/rx'

export default function ImageSlider() {

    const slides = [

        {
            url:'https://images.pexels.com/photos/699544/pexels-photo-699544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'shrimp'
        },
        {
            url:'https://images.pexels.com/photos/3620705/pexels-photo-3620705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'sushi'
        },
        {
            url:'https://images.pexels.com/photos/2412950/pexels-photo-2412950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'pasta'
        },
        {
            url:'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'pizza'
        }
        
    ]

    const [slideNum,setSlideNum] = useState(0)

    const handlePrev = ()=>{

        if(slideNum > 0){

            setSlideNum((slideNum-1));
        }

        else{
            setSlideNum(slides.length - 1);
        }
    }

    const handleNext = ()=>{

        if(slideNum < (slides.length - 1)){

            setSlideNum((slideNum + 1));
        }

        else{

            setSlideNum(0);
        }
    }

    const goToSlide = (slidesIndex)=>{

        setSlideNum(slidesIndex);
    }

  return (
    <>

    <div className="w-[90%] max-w-[1400px] h-[280px] m-auto relative my-36 sm:my-56 md:my-80 md:w-[70%] sm:w-[80%] lg:w-[50%] lg:my-24 group">

        <div 
            className='w-full h-full rounded-xl bg-center bg-cover duration-500'
            style={{backgroundImage: `url(${slides[slideNum].url})`}}>

        </div>

        <div>
        <BiLeftArrow onClick={handlePrev} className='group-hover:bg-white/70 text-black/70 group-hover:text-black rounded-full absolute top-[50%] left-1' size={30}/>
        </div>
        <div>
        <BiRightArrow onClick={handleNext} className='group-hover:bg-white/70 text-black/70 group-hover:text-black rounded-full absolute top-[50%] right-1' size={30}/>
        </div>

        {/* <div className='flex top-5 justify-center py-2'>
            {slides.map((index)=>(

                <div className="text-2xl cursor-pointer" key={index} >

                    <RxDotFilled />
                
                </div>
            )


            )}
        </div> */}
        
    </div>
    

    
    </>
  )
}
