import React from 'react'
import { BsStarFill } from 'react-icons/bs'

export default function Card(props) {
  return (
    <div className="w-[295px] h-[298px] flex flex-col items-start ">
            <img src={props.img} alt="" />
            <p className="text-[15px] font-black w-[225px] h-[27px] ">
             {props.text}
            </p>
            <span className="flex flex-row gap-[13px] items-center w-[150px] h-[19px] ">
              <span className="flex flex-row gap-[5.31px]">
              <BsStarFill className="text-starColor w-[18.49px] h-[18.49px] " />
              <BsStarFill className="text-starColor w-[18.49px] h-[18.49px] " />
              <BsStarFill className="text-starColor w-[18.49px] h-[18.49px] " />
              <BsStarFill className="text-starColor w-[18.49px] h-[18.49px] " />
              <BsStarFill className="text-starColor w-[18.49px] h-[18.49px] " />
              </span>
              <p className="w-[33px] h-[19px] text-[14px] ">{props.eval}</p>
            </span>
            <h3 className="w-[55px] h-[32px] text-[24px] font-black ">{'$'+ props.price}</h3>
          </div>
  )
}
