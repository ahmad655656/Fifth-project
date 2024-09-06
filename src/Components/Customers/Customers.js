import { Star } from '@mui/icons-material'
import React from 'react'
import { TbSquareRoundedCheckFilled } from 'react-icons/tb'

export default function Customers(props) {
  return (
    <div style={{transform:`${props.transform}`}}  className="flex flex-col gap-[10px] items-start pl-[32px] pr-[32px] pt-[24px] pb-[24px] sm:max-md:px-[24px] sm:max-md:py-[24px] w-[400px] h-[240px] sm:max-md:w-[358px] sm:max-md:h-[196.19px] rounded-[48.2px] border-solid border-[2px] border-borderButton ">
    <div className="flex flex-row gap-[3px] items-center ">
    <Star className="text-starColor w-[24px] h-[24px] "/>
    <Star className="text-starColor w-[24px] h-[24px] "/>
    <Star className="text-starColor w-[24px] h-[24px] "/>
    <Star className="text-starColor w-[24px] h-[24px] "/>
    <Star className="text-starColor w-[24px] h-[24px] "/>
    </div>
    <span className="flex flex-row w-[93px] gap-[3px] h-[24px]  items-baseline "><p className="text-[18px] sm:max-md:text-[16px] font-medium ">{props.name}</p><TbSquareRoundedCheckFilled className="text-trueColor" /></span>
    <p className="text-[16px] sm:max-md:text-[14px] sm:max-md:w-[310px] w-[336px] sm:max-md:h-[80px] h-[88px] text-firstTextColor opacity-40 ">
    {props.text}
    </p>
</div>
  )
}
