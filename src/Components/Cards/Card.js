import React from 'react'
export default function Card(props) {
  return (
    <div className="relative w-[295px] h-[320px] flex flex-col gap-[40px] items-start ">
            <img src={props.img} className='bg-bgNav rounded-[30px] w-[198px] h-[200px] ' alt="" />
            <p className="text-[15px] text-secondTextColor font-bold leading-4 w-[225px] h-[27px] ">
             {props.text}
            </p>
            <h3 className="absolute bottom-0 w-[55px] text-secondTextColor sm:max-md:text-[16px] h-[32px] text-[24px] font-black ">{'$'+ props.price}</h3>
          </div>
  )
}

