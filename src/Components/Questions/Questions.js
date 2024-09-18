import React from 'react'
import { FaQuestion } from 'react-icons/fa6'

export default function Questions(props) {
  return (
    <div className="w-[400px] sm:max-md:w-[90%] sm:max-md:mx-auto h-[10px] flex flex-col shadow-shadowFqs shadow-shadowFqs hover:shadow-none gap-[40px] transition-all duration-300 ease-in-out hover:h-[350px] p-[20px] bg-bgTheardSection items-center border-solid border-[2px] border-borderButton ">
          <FaQuestion className="text-[40px] rounded-[50%] bg-bgMainSection w-[50px] h-[50px] text-textFocus text-start" />
         <div className="w-[90%] h-[90%] ">
         <p className="text-[20px] font-bold text-firstTextColor text-start pl-[10px] ">{props.question}</p>
          <p className="text-[15px] font-bold text-secondTextColor text-start pl-[10px] ">
            {props.answer}
          </p>
         </div>
        </div>
  )
}
