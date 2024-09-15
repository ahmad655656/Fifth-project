import React from "react";
import photo1 from "../../assests/Cars/EQS/FB_IMG_1725837289545.jpg";
import photo4 from "../../assests/De-Badging a Blackout 2023 GMC Yukon Denali.jpg";
import photo3 from "../../assests/Cars/RangeRoverSv/FB_IMG_1725834150646.jpg";
import photo2 from "../../assests/Cars/Bmw7Series/FB_IMG_1725834575456.jpg";
export default function About() {
  return (
    <div className="pl-[30px] sm:max-md:pr-[20px] sm:max-md:pr-0 sm:max-md:pl-0 pr-[90px] flex flex-col items-center sm:max-md:w-widthMobile w-maxWidth m-auto py-24 bg-white min-h-[240vh] sm:py-32">
      <div className="text-center translate-x-[-1300px] h-[200px] w-[1140px] pr-[30px] text-center animate-aminatetext">
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
        We at Haidara Motors celebrate the events and power of cars. Through our distinctive showroom, we offer you the opportunity to explore a variety of Range Rovers, Mercedes, and BMWs, with a focus on showcasing their details and unique beauty. We are here to start a new experience of exploring the world of cars without any waiting to purchase. Designed for a new design in every car.
        </p>
      </div>
      <div className="w-[1200px] sm:max-md:w-widthMobile h-[100vh] flex justify-between flex-row sm:max-md:flex-wrap items-center  ">
        <div className="relative sm:max-md:hidden flex flex-row gap-[50px] sm:max-md:w-[100%] sm:max-md:h-[50%]  animate-aminateBoxPhoto mt-[50px] items-center w-[50%] h-[100%] ">
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
          <div className="w-[400px] sm:max-md:w-[100%] sm:max-md:h-[100%]  h-[500px] rounded-[20px] absolute left-[150px] top-0 bg-bgNav "></div>
        </div>
        <div className="flex flex-col sm:max-md:pl-[20px] animate-aminatetextAbout sm:max-md:w-[100%] sm:max-md:h-[50%]  w-[60%] h-[100%] pt-[25px] sm:max-md:pr-0 sm:max-md:pl-0 pr-[40px] pl-[20px] items-start gap-[20px]  ">
          <h3 className="text-[20px] sm:max-md:text-[10px]  font-bold text-firstTextColor ">
           <span className="text-[30px] sm:max-md:text-[20px] text-textFocus">
           Welcome to Haedara Motors</span> , where passion meets precision in the
            world of luxury automobiles. We are dedicated to showcasing the
            finest selection of prestigious vehicles, offering a glimpse into
            the remarkable craftsmanship and innovation behind each model. From
            the sleek performance of Mercedes to the bold elegance of Range
            Rover and the cutting-edge design of BMW, our collection represents
            the pinnacle of automotive excellence.
          </h3>
          <h3 className="text-[20px] sm:max-md:text-[10px]  font-bold text-textFocus">
            At Haedara Motors, our mission is not to sell but to inspire. We
            believe that every car tells a story—of heritage, performance, and
            the pursuit of perfection. Through our carefully curated exhibition,
            we invite you to explore these stories and experience the artistry
            that makes each vehicle a masterpiece.
          </h3>
          <h3 className="text-[20px] sm:max-md:text-[10px] font-bold text-secondTextColor">
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
