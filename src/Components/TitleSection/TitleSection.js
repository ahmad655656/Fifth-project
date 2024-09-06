import React from "react";

export default function TitleSection(props) {
  return (
    <h1 className={`${props.className} text-[48px] text-center font-black w-[403px] h-[58px] mt-[30px]`}>
      {props.content}
    </h1>
  );
}
