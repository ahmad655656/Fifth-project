import React from "react";
import photo1 from "../../assests/Cars/EQS/FB_IMG_1725837289545.jpg";
import photo4 from "../../assests/De-Badging a Blackout 2023 GMC Yukon Denali.jpg";
import photo3 from "../../assests/Cars/RangeRoverSv/FB_IMG_1725834150646.jpg";
import photo2 from "../../assests/Cars/Bmw7Series/FB_IMG_1725834575456.jpg";
export default function About() {
  return (
    <div className="pl-[30px] pr-[80px] flex flex-col items-center w-maxWidth m-auto py-24 bg-white min-h-[240vh] sm:py-32">
      <div className="text-center translate-x-[-1000px] animate-aminatetext">
        <h2 className="text-3xl font-bold tracking-tight text-firstTextColor sm:text-4xl">
          <span className="animate-aminatetext1">A</span>
          <span className="animate-aminatetext2">b</span>
          <span className="animate-aminatetext3">o</span>
          <span className="animate-aminatetext4">u</span>
          <span className="animate-aminatetext5">t</span>
          <span className="animate-aminatetext6">U</span>
          <span className="animate-aminatetext7">s</span>
        </h2>
        <p className="mt-2 text-[15px] leading-8 text-secondTextColor">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <div className="w-[1200px] h-[100vh] flex justify-between flex-row items-center  ">
        <div className="relative flex flex-row gap-[50px] animate-aminateBoxPhoto mt-[50px] items-center w-[50%] h-[100%] ">
          <div>
            <img
              src={photo1}
              className="w-[100px] animate-aminatePhoto1 z-[55] absolute left-0 top-0 h-[100px] rounded-[50%] "
              alt=""
            />
            <img
              src={photo2}
              className="w-[100px] animate-aminatePhoto2 z-[55] absolute left-0 top-[110px] h-[100px] rounded-[50%] "
              alt=""
            />
            <img
              src={photo3}
              className="w-[100px] animate-aminatePhoto3 z-[55] absolute left-0 top-[220px] h-[100px] rounded-[50%] "
              alt=""
            />
            <img
              src={photo4}
              className="w-[100px] animate-aminatePhoto4 z-[55] absolute left-0 top-[330px] h-[100px] rounded-[50%] "
              alt=""
            />
          </div>
          <div className="w-[400px] h-[500px] rounded-[20px] absolute left-[150px] top-0 bg-bgNav "></div>
        </div>
        <div className="flex flex-col animate-aminatetextAbout w-[60%] h-[100%] pt-[25px] pr-[40px] pl-[20px] items-start gap-[20px]  ">
          <h3 className="text-[20px] font-bold text-firstTextColor ">
           <span className="text-[30px] text-textFocus">
           Welcome to Haedara Motors</span> , where passion meets precision in the
            world of luxury automobiles. We are dedicated to showcasing the
            finest selection of prestigious vehicles, offering a glimpse into
            the remarkable craftsmanship and innovation behind each model. From
            the sleek performance of Mercedes to the bold elegance of Range
            Rover and the cutting-edge design of BMW, our collection represents
            the pinnacle of automotive excellence.
          </h3>
          <h3 className="text-[20px] font-bold text-textFocus">
            At Haedara Motors, our mission is not to sell but to inspire. We
            believe that every car tells a story—of heritage, performance, and
            the pursuit of perfection. Through our carefully curated exhibition,
            we invite you to explore these stories and experience the artistry
            that makes each vehicle a masterpiece.
          </h3>
          <h3 className="text-[20px] font-bold text-secondTextColor">
            Whether you're an enthusiast, a collector, or simply captivated by
            the world of high-end cars, Haedara Motors is your destination to
            admire, appreciate, and celebrate the automotive icons that shape
            the future of driving.
          </h3>
        </div>
      </div>
    </div>
  );
}
