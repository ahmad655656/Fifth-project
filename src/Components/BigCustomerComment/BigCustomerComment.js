import { Star } from "@mui/icons-material";
import React from "react";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";

export default function BigCustomerComment(props) {
  return (
    <div className="w-[590px] relative after:absolute after:bottom-0 after:left-0 after:h-[100px] before:animate-aminComment2 after:w-[100px] after:border-b-[3px] after:border-l-[3px] after:rounded-borderComment2 after:border-l-textFocus after:bg-bgMainSection after:animate-aminComment after:border-b-textFocus after:border-solid h-[241.58px] before:z-[54] before:absolute before:top-0 before:right-0 before:h-[100px] before:w-[100px] before:border-t-[3px] before:border-r-[3px] before:rounded-borderComment before:border-t-textFocus before:bg-bgMainSection before:border-r-textFocus before:border-solid flex-col flex items-start px-[32px] py-[28px] gap-[24px] rounded-[20px] border-[0.5px] border-solid border-secondTextColor ">
      <div className="w-[529px] z-[65] h-[139px] flex gap-[5px] flex-col items-start ">
        <div className="flex flex-row gap-[3px] items-center ">
          <Star className="text-starColor w-[24px] h-[24px] " />
          <Star className="text-starColor w-[24px] h-[24px] " />
          <Star className="text-starColor w-[24px] h-[24px] " />
          <Star className="text-starColor w-[24px] h-[24px] " />
          <Star className="text-starColor w-[24px] h-[24px] " />
        </div>
        <span className="flex flex-row w-[146px] gap-[3px] h-[24px]  items-baseline text-firstTextColor ">
          <p className="text-[20px] sm:max-md:text-[16px] font-medium ">
           {props.name}
          </p>
          <TbSquareRoundedCheckFilled className="text-trueColor" />
        </span>
        <p className="text-[16px] sm:max-md:text-[14px] sm:max-md:w-[310px] w-[522px] sm:max-md:h-[80px] h-[66px] text-secondTextColor opacity-40 ">
          {props.text}
        </p>
      </div>
      <div className="w-[546px] z-[44] flex h-[22px] ">
        <p className="text-[16px]  text-secondTextColor opacity-40 ">
         {props.email}
        </p>
      </div>
    </div>
  );
}
