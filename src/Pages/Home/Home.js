import React, { useState } from "react";
import { PiStarFourFill } from "react-icons/pi";
import photo1 from "../../assests/Logos/Versace-removebg-preview.png";
import photo2 from "../../assests/Logos/Zara-removebg-preview.png";
import photo3 from "../../assests/Logos/Gucci-removebg-preview.png";
import photo4 from "../../assests/Logos/Prada-removebg-preview.png";
import photo5 from "../../assests/Logos/Calvin-removebg-preview.png";
import phot6 from '../../assests/Frame 61.png'
import phot7 from '../../assests/Frame 62.png'
import phot8 from '../../assests/Frame 63.png'
import phot9 from '../../assests/Frame 64.png'
import { BsStarFill } from "react-icons/bs";
import { HappyCustomers, NewArrivals, TopSelling } from "../../Data";
import Card from "../../Components/Cards/Card";
import TitleSection from "../../Components/TitleSection/TitleSection";
import { Grid2 } from "@mui/material";
import { ArrowBack, ArrowForward, ArrowLeft, ArrowRight, Star } from "@mui/icons-material";
import { SiTruenas, SiTrueup } from "react-icons/si";
import { FaDiagramSuccessor } from "react-icons/fa6";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import Customers from "../../Components/Customers/Customers";
export default function Home() {
    const [translateCust, setTranslateCust] = useState(0)
  return (
    <div className="flex flex-col items-center w-maxWidth sm:max-md:w-widthMobile sm:max-md:h-heightMobile h-maxHeight ">
      <div className="w-maxWidth sm:max-md:w-widthMobile sm:max-md:flex sm:max-md:flex-col sm:max-md:gap-[40px] sm:max-md:items-start sm:max-md:pl-0 sm:max-md:h-[883px] sm:max-md:bg-none h-[663px] pl-[100px] sm:max-md:mt-0 mt-[103px] bg-bgHome flex flex-row items-center bg-bgMainSection ">
        <div
          className={`w-[50%] sm:max-md:w-widthMobile sm:max-md:pl-[14px] sm:max-md:h-[50%] sm:max-md:mt-[30px] sm:max-md:py-[20px] h-[663px] mt-[170px] flex gap-[40px] flex-col items-start `}
        >
          <p className="sm:max-md:w-[315px] sm:max-md:h-[93px] sm:max-md:text-[36px] sm:max-md:leading-[40px] w-[577px] max-h-[173px] font-black leading-[60px] text-[64px] ">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </p>
          <p className="text-[16px] sm:max-md:w-[358px] sm:max-md:h-[50px] sm:max-md:text-[14px]  w-[545px] h-[33px]  ">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="sm:max-md:w-[358px] sm:max-md:h-[52px] w-[210px] h-[58px] text-center bg-bgNav rounded-[62px] text-[16px] font-medium text-secondTextColor ">
            Shop Now
          </button>
          <div className="w-[596px] sm:max-md:w-[278px] sm:max-md:h-[72px] sm:max-md:py-[32px]  h-[74px] flex flex-row items-center gap-[32px] ">
            <div className="sm:max-md:w-[106px] sm:max-md:h-[48px]  w-[141px] h-[74px] flex flex-col items-start ">
              <h2 className="text-[40px] sm:max-md:text-[24px]  font-bold ">200+</h2>
              <p className="text-[14px] sm:max-md:w-[106px] sm:max-md:text-[12px] w-[141px] h-[22px] ">
                International Brands
              </p>
            </div>
            <div className="sm:max-md:w-[117px] sm:max-md:h-[48px]  w-[156px] h-[74px] flex flex-col items-start ">
              <h2 className="text-[40px] sm:max-md:text-[24px] font-bold ">2,000+</h2>
              <p className="text-[14px] sm:max-md:w-[117px] sm:max-md:text-[12px] w-[141px] h-[22px] ">
                High-Quality Products
              </p>
            </div>
            <div className="sm:max-md:w-[103px] sm:max-md:h-[48px] w-[171px] h-[74px] flex flex-col items-start ">
              <h2 className="text-[40px] sm:max-md:text-[24px]  font-bold ">30,000+</h2>
              <p className="text-[14px] w-[141px] sm:max-md:w-[95px] sm:max-md:text-[12px] h-[22px] ">
                High-Quality Products
              </p>
            </div>
          </div>
        </div>
        <div className="sm:max-md:hidden w-[56px] h-[56px] text-center ">
          <PiStarFourFill className={"text-firstTextColor h-[56px] w-[56px]"} />
        </div>
        <div className="sm:max-md:hidden w-[104px] h-[104px] text-center ">
          <PiStarFourFill
            className={
              "text-firstTextColor translate-x-[435px] translate-y-[-220px] h-[104px] w-[104px]"
            }
          />
        </div>
        <div className="sm:max-md:w-widthMobile sm:max-md:h-[50%] sm:max-md:bg-bgHomeMobile sm:max-md:bg-center sm:max-md:bg-cover sm:max-md:bg-no-repeat hidden sm:max-md:flex">
        <div className="w-[56px] h-[56px] text-center ">
          <PiStarFourFill className={"text-firstTextColor translate-y-[50px] h-[56px] w-[56px]"} />
        </div>
        <div className="w-[104px] h-[104px] text-center ">
          <PiStarFourFill
            className={
              "text-firstTextColor translate-x-[205px] translate-y-[-40px] h-[94px] w-[94px]"
            }
          />
        </div>
        </div>
      </div>
      <div className="w-maxWidth sm:max-md:w-widthMobile sm:max-md:h-[146px] sm:max-md:text-center sm:max-md:items-center sm:max-md:flex-wrap bg-bgNav2 h-[122px] sm:max-md:gap-[10px] sm:max-md:justify-normal sm:max-md:pl-0 sm:max-md:pr-0 flex flex-row justify-between pl-[90px] pr-[100px] items-center ">
        <img src={photo1} className="w-[166.48px] sm:max-md:w-[116.74px] sm:max-md:h-[50%] " alt="" />
        <img src={photo2} className="w-[91px] sm:max-md:w-[83.81px] sm:max-md:h-[50%]  " alt="" />
        <img src={photo3} className="w-[156.48px] sm:max-md:w-[109.39px] sm:max-md:h-[30%] " alt="" />
        <img src={photo4} className="w-[194px] sm:max-md:w-[147px] sm:max-md:h-[50%] " alt="" />
        <img src={photo5} className="w-[206.79px] sm:max-md:w-[154.84px] sm:max-md:h-[50%] " alt="" />
      </div>
      <div className="w-maxWidth h-[60vh] sm:max-md:h-[90vh] flex flex-col sm:max-md:gap-[60px] gap-[40px] items-center  ">
        <TitleSection content={"NEW ARRIVALS"} />
        <div className="w-maxWidth pl-[100px] sm:max-md:pl-[15px] sm:max-md:overflow-y-visible sm:max-md:overflow-x-scroll sm:max-md:w-widthMobile no-scrollbar flex flex-row gap-[20px] items-center">
          {NewArrivals.map((na) => {
            return (
              <Card
                img={na.img}
                eval={na.evaluate}
                text={na.text}
                price={na.price}
              />
            );
          })}
        </div>
        <button className="w-[218px] h-[52px] mt-[60px] p-[12px] rounded-[62px] text-[16px] font-medium border-solid border-[2px] hover:bg-bgNav hover:text-secondTextColor transition-all ease-in-out duration-500 border-borderButton ">
          View All
        </button>
      </div>
      <span className="w-[1240px] h-[2px] w-widthMobile bg-bgMainSection mt-[40px] " />
      <div className="w-maxWidth h-[60vh] sm:max-md:h-[90vh] flex flex-col sm:max-md:gap-[60px] gap-[40px] items-center  ">
        <TitleSection content={"TOP SELLING"} />
        <div className="w-maxWidth pl-[100px] flex flex-row sm:max-md:overflow-y-visible sm:max-md:overflow-x-scroll sm:max-md:w-widthMobile  no-scrollbar sm:max-md:pl-[15px] gap-[20px] items-center">
          {TopSelling.map((na) => {
            return (
              <Card
                img={na.img}
                eval={na.evaluate}
                text={na.text}
                price={na.price}
              />
            );
          })}
        </div>
        <button className="w-[218px] h-[52px] mt-[60px] p-[12px] rounded-[62px] text-[16px] font-medium border-solid border-[2px] hover:bg-bgNav hover:text-secondTextColor transition-all ease-in-out duration-500 border-borderButton ">
          View All
        </button>
      </div>
      <div className="w-[1239px]  sm:max-md:w-[358px] sm:max-md:h-[975px] h-[866px] sm:max-md:gap-[30px] bg-bgMainSection flex flex-col rounded-[40px] items-center mt-[50px] ">
        <TitleSection
          className={"w-[687px] mt-[80px] h-[58px] "}
          content={"BROWSE BY DRESS STYLE"}
        />
        <Grid2 container className={"m-auto ml-[60px] sm:max-md:ml-[20px] sm:max-md:flex sm:max-md:flex-col sm:max-md:items-center sm:max-md:-gap-[5px]  "} spacing={2}>
          <Grid2 className={"w-[407px] h-[289px] sm:max-md:w-[310px] sm:max-md:h-[190px] "} >
            <img src={phot6} className="sm:max-md:w-[310px] sm:max-md:h-[190px]" alt="" />
          </Grid2>
          <Grid2 className={"w-[684px] h-[289px] sm:max-md:w-[310px] sm:max-md:h-[190px]  "} >
          <img src={phot7} className="sm:max-md:w-[310px] sm:max-md:h-[190px]" alt="" />

          </Grid2>
          <Grid2 className={"w-[684px] h-[289px] sm:max-md:w-[310px] sm:max-md:h-[190px]  "} >
          <img src={phot9} className="sm:max-md:w-[310px] sm:max-md:h-[190px]" alt="" />

          </Grid2>
          <Grid2 className={"w-[407px] h-[289px] sm:max-md:w-[310px] sm:max-md:h-[190px]  "} >
          <img src={phot8} className="sm:max-md:w-[310px] sm:max-md:h-[190px]" alt="" />

          </Grid2>
        </Grid2>
      </div>
      <div className="flex flex-col items-center sm:max-md:gap-[20px] ">
        <div className="flex flex-row justify-between w-[1240px] sm:max-md:pr-[20px] sm:max-md:w-widthMobile items-center">
        <TitleSection className={"w-[654px] sm:max-md:w-[286px] sm:max-md:h-[73px] h-[58px] "} content={"OUR HAPPY CUSTOMERS"} />
          <div className="flex gap-[10px] h-[58px] flex-row mt-[80px]">
            <ArrowBack onClick={() =>{
                setTranslateCust(x => x - 100)
                console.log("lkjhgf");
                
            }} className=" cursor-pointer w-[24px] h-[24px] " />
            <ArrowForward onClick={() =>{
                setTranslateCust(x => x + 100)
                console.log("lkjhgf");
                
            }}  className=" cursor-pointer w-[24px] h-[24px] " />
          </div>
        </div>
        <div className={`flex w-maxWidth sm:max-md:w-widthMobile sm:max-md:pl-[18px] overflow-scroll no-scrollbar flex-row items-center gap-[20px]  `}>
           {HappyCustomers.map((hc) =>{
            return(
                <Customers transform={`translateX(${translateCust}px)`} name={hc.name} text={hc.text} />
            )
           })}
        </div>
      </div>
    </div>
  );
}
