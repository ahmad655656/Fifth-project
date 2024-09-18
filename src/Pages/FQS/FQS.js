import { QuestionAnswer } from "@mui/icons-material";
import React from "react";
import { FaQuestion } from "react-icons/fa6";
import Questions from "../../Components/Questions/Questions";
import { Fqs } from "../../Data";

export default function FQS() {
  return ( 
    <div className="sm:max-md:w-widthMobile sm:max-md:gap-[204px]  flex flex-col items-center w-maxWidth m-auto py-24 bg-white min-h-[240vh]">
      <div className="text-center sm:max-md:w-[95vw] sm:max-md:mx-auto mx-auto translate-x-[-1300px] h-[200px] w-[1140px] text-center animate-aminatetext">
        <h2 className="text-3xl font-bold tracking-tight text-firstTextColor sm:text-4xl">
          <span className="animate-aminatetext1">F</span>
          <span className="animate-aminatetext2">Q</span>
          <span className="animate-aminatetext3">S</span>
        </h2>
        <p className="mt-2 text-[15px] leading-8 text-secondTextColor">
          Welcome to our Frequently Asked Questions section at Haedara Motors.
          Here, we provide answers to the most frequently asked questions about
          our showroom specializing in Range Rover, Mercedes, and BMW cars. We
          display our cars with the highest standards of excellence and quality,
          and strive to provide a unique exploratory experience.
        </p>
      </div>
      <div className="w-[60vw] sm:max-md:h-[450vh] mx-auto h-[400vh] sm:max-md:gap-[40px] sm:max-md:flex sm:max-md:flex-col sm:max-md:items-center sm:max-md:mt-[100px] sm:max-md:w-[97vw] sm:max-md:mx-auto flex flex-row flex-wrap justify-between items-center">
        {Fqs.map((fq) => <div className="w-[50%] mx-auto sm:max-md:w-[100%] "><Questions question={fq.question}  answer={fq.answer} /></div>)}
      </div>
    </div>
  );
}
