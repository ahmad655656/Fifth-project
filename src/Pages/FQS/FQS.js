import { QuestionAnswer } from "@mui/icons-material";
import React from "react";
import { FaQuestion } from "react-icons/fa6";
import Questions from "../../Components/Questions/Questions";
import { Fqs } from "../../Data";

export default function FQS() {
  return (
    <div className="pl-[30px] pr-[90px] flex flex-col items-center w-maxWidth m-auto py-24 bg-white min-h-[240vh] sm:py-32 ">
      <div className="text-center translate-x-[-1300px] h-[200px] w-[1140px] pr-[30px] text-center animate-aminatetext">
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
          and strive to provide a unique exploratory experience. In this
          section, you will find information on how to visit the showroom,
          details about the cars on display, and any other questions you may
          have. If you have any questions that we have not covered here, please
          feel free to contact us.
        </p>
      </div>
      <div className="w-[1000px] ml-[60px] h-[400vh] flex flex-row flex-wrap justify-between items-center">
        {Fqs.map((fq) => <div className="w-[50%]  "><Questions question={fq.question}  answer={fq.answer} /></div>)}
      </div>
    </div>
  );
}
