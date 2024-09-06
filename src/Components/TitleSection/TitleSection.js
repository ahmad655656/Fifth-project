import React from "react";

export default function TitleSection(props) {
  return (
    <h1 className={`${props.className} sm:max-md:mt-[30px] sm:max-md:leading-8 text-[48px] text-center font-black sm:max-md:w-[259px] sm:max-md:h-[38px] sm:max-md:text-[32px] w-[403px] h-[58px] mt-[30px]`}>
      {props.content}
    </h1>
  );
}
