import React, { useContext, useEffect, useState } from "react";
import { PiStarFourFill } from "react-icons/pi";
import photo1 from "../../assests/Logos/Versace-removebg-preview.png";
import photo2 from "../../assests/Logos/Zara-removebg-preview.png";
import photo3 from "../../assests/Logos/Gucci-removebg-preview.png";
import photo4 from "../../assests/Logos/Prada-removebg-preview.png";
import photo5 from "../../assests/Logos/Calvin-removebg-preview.png";
import { BMWModels2024, HappyCustomers, MercedesBenzModels2024, NewArrivals, RangeRoverModels2024, TopSelling } from "../../Data";
import Card from "../../Components/Cards/Card";
import TitleSection from "../../Components/TitleSection/TitleSection";
import { Grid2 } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Customers from "../../Components/Customers/Customers";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Home() {
  const [translateCust, setTranslateCust] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/signin"); // إذا لم يكن هناك رمز JWT، تحويل المستخدم إلى صفحة تسجيل الدخول
    }
  }, [navigate]);
  return (
    <div className="flex flex-col items-center overflow-x-hidden w-maxWidth sm:max-md:w-widthMobile h-maxHeight sm:max-md:h-heightMobile">
      <div className="w-maxWidth sm:max-md:w-widthMobile sm:max-md:flex sm:max-md:flex-col sm:max-md:gap-[50px] sm:max-md:items-start sm:max-md:pl-0 sm:max-md:h-[883px] sm:max-md:bg-none h-[663px] pl-[50px] pr-[50px] bg-cover bg-right sm:max-md:mt-0 mt-[33px] bg-no-repeat bg-bgHome flex flex-row items-center bg-bgMainSection ">
        <div
          className={`w-[50%] sm:max-md:w-widthMobile sm:max-md:pl-[7px] sm:max-md:h-[50%] sm:max-md:gap-[20px] sm:max-md:mt-0 sm:max-md:py-[20px] h-[663px] mt-[170px] flex gap-[40px] flex-col items-start `}
        >
          <p className="sm:max-md:w-[315px] mb-[20px] text-firstTextColor sm:max-md:h-[100px] sm:max-md:text-[29px] sm:max-md:leading-[40px] w-[577px] max-h-[177px] font-black leading-[55px] text-[55px] ">
          Join the Haedara Auto Community and Drive Away in Style!
          </p>
          <p className="text-[15px] text-secondTextColor font-bold sm:max-md:w-[358px] sm:max-md:h-[97px] sm:max-md:text-[14px] w-[545px] h-[33px]  ">
          Sign up now and enjoy an exclusive 20% discount on your first purchase. Discover the ultimate selection of luxury cars and premium accessories tailored to your driving desires.
          </p>
          <button className="sm:max-md:w-[358px] sm:max-md:h-[52px] w-[210px] h-[58px] text-center bg-bgNav rounded-[62px] text-[16px] font-medium text-secondTextColor ">
            Shop Now
          </button>
          <div className="w-[596px] sm:max-md:w-widthMobile sm:max-md:gap-[20px] sm:max-md:pr-[30px] sm:max-md:h-[72px] sm:max-md:py-[32px] h-[74px] flex flex-row items-center gap-[32px] ">
            <div className="sm:max-md:w-[106px] text-secondTextColor sm:max-md:h-[48px] w-[141px] h-[74px] flex flex-col items-start ">
              <h2 className="text-[40px] sm:max-md:text-[24px] font-bold ">
                200+
              </h2>
              <p className="text-[14px] sm:max-md:w-[106px] sm:max-md:text-[12px] w-[141px] h-[22px] ">
                International Brands
              </p>
            </div>
            <div className="sm:max-md:w-[117px] text-secondTextColor  sm:max-md:h-[48px]  w-[156px] h-[74px] flex flex-col items-start ">
              <h2 className="text-[40px] sm:max-md:text-[24px] font-bold ">
                2,000+
              </h2>
              <p className="text-[14px] sm:max-md:w-[117px] sm:max-md:text-[12px] w-[141px] h-[22px] ">
                High-Quality Products
              </p>
            </div>
            <div className="sm:max-md:w-[103px] text-secondTextColor  sm:max-md:h-[48px] w-[171px] h-[74px] flex flex-col items-start ">
              <h2 className="text-[40px] sm:max-md:text-[24px]  font-bold ">
                30,000+
              </h2>
              <p className="text-[14px] w-[141px] sm:max-md:w-[95px] sm:max-md:text-[12px] h-[22px] ">
                High-Quality Products
              </p>
            </div>
          </div>
        </div>
        <div className="sm:max-md:w-widthMobile sm:max-md:h-[50%] sm:max-md:bg-bgHomeMobile sm:max-md:bg-center sm:max-md:bg-cover sm:max-md:bg-no-repeat hidden sm:max-md:flex">
        </div>
      </div>
      <div className="w-maxWidth sm:max-md:w-widthMobile sm:max-md:h-[146px] sm:max-md:text-center sm:max-md:items-center sm:max-md:flex-wrap bg-bgNav2 h-[122px] sm:max-md:gap-[10px] sm:max-md:justify-normal sm:max-md:pl-0 sm:max-md:pr-0 flex flex-row justify-between pl-[50px] pr-[120px] items-center ">
        <img
          src={photo1}
          className="w-[166.48px] sm:max-md:w-[116.74px] sm:max-md:h-[50%] "
          alt=""
        />
        <img
          src={photo2}
          className="w-[91px] sm:max-md:w-[83.81px] sm:max-md:h-[50%]  "
          alt=""
        />
        <img
          src={photo3}
          className="w-[156.48px] sm:max-md:w-[109.39px] sm:max-md:h-[30%] "
          alt=""
        />
        <img
          src={photo4}
          className="w-[194px] sm:max-md:w-[147px] sm:max-md:h-[50%] "
          alt=""
        />
        <img
          src={photo5}
          className="w-[206.79px] sm:max-md:w-[154.84px] sm:max-md:h-[50%] "
          alt=""
        />
      </div>
      <div className="w-maxWidth h-[100vh] sm:max-md:h-[90vh] flex flex-col sm:max-md:gap-[50px] gap-[40px] items-center  ">
        <TitleSection className={"text-firstTextColor"} content={"RangeRover"} />
        <div className="w-maxWidth pl-[50px] overflow-y-visible sm:max-md:pl-[5px] h-[95vh] pr-[50px] sm:max-md:overflow-y-visible sm:max-md:overflow-x-scroll lg:overflow-x-scroll sm:max-md:w-widthMobile no-scrollbar flex flex-row gap-[20px] items-center">
          {RangeRoverModels2024.map((el) => {
            return (
              <Link to={`/productDetails/${el.id}`}>
                <Card
                img={el.images[0]}
                text={el.model}
                price={el.price_usd}
              />
              </Link>
            );
          })}
        </div>
        <button className="w-[218px] text-textButton h-[52px] sm:max-md:mr-[18px] sm:max-md:w-[358px] sm:max-md:h-[48px]  mt-[10px] p-[12px] rounded-[62px] text-[16px] font-medium border-solid border-[2px] hover:bg-hoverButton hover:text-secondTextColor transition-all ease-in-out duration-500 border-borderButton ">
          View All
        </button>
      </div>
      <div className="w-maxWidth h-[100vh] sm:max-md:h-[90vh] flex flex-col sm:max-md:gap-[50px] gap-[40px] items-center  ">
        <TitleSection className={"text-firstTextColor"} content={"MercedesBenz"} />
        <div className="w-maxWidth pl-[50px] overflow-y-visible sm:max-md:pl-[5px] h-[95vh] pr-[50px] sm:max-md:overflow-y-visible sm:max-md:overflow-x-scroll lg:overflow-x-scroll sm:max-md:w-widthMobile no-scrollbar flex flex-row gap-[20px] items-center">
          {MercedesBenzModels2024.map((el) => {
            return (
              <Link to={`/productDetails/${el.id}`}>
                <Card
                img={el.images[0]}
                text={el.model}
                price={el.price_usd}
              />
              </Link>
            );
          })}
        </div>
        <button className="w-[218px] text-textButton h-[52px] sm:max-md:mr-[18px] sm:max-md:w-[358px] sm:max-md:h-[48px]  mt-[10px] p-[12px] rounded-[62px] text-[16px] font-medium border-solid border-[2px] hover:bg-hoverButton hover:text-secondTextColor transition-all ease-in-out duration-500 border-borderButton ">
          View All
        </button>
      </div>  
      <span className="w-[1240px] h-[2px] w-widthMobile bg-bgSecondSection mt-[40px] " />
      <div className="w-maxWidth h-[100vh] sm:max-md:w-widthMobile sm:max-md:h-[95vh] flex flex-col sm:max-md:gap-[60px] gap-[40px] items-center  ">
        <TitleSection className={"text-firstTextColor"} content={"BMW"} />
        <div className="w-maxWidth pl-[50px] overflow-y-visible sm:max-md:pl-[5px] h-[100vh] sm:max-md:overflow-y-visible lg:pr-[70px] sm:max-md:overflow-x-scroll lg:overflow-x-scroll sm:max-md:w-widthMobile no-scrollbar flex flex-row gap-[20px] items-center">
          {BMWModels2024.map((na) => {
            return (
              <Link to={`/productDetails/${na.id}`}>

                <Card
                img={na.images[0]}
                text={na.model}
                price={na.price_usd}
              />
              </Link>
            );
          })}
        </div>
        <button className="w-[218px] text-textButton sm:max-md:w-[358px] sm:max-md:mr-[18px] sm:max-md:h-[48px] h-[52px] mt-[60px] p-[12px] rounded-[62px] text-[16px] font-medium border-solid border-[2px] hover:bg-hoverButton hover:text-secondTextColor transition-all ease-in-out duration-500 border-borderButton ">
          View All
        </button>
      </div>
      <div className="w-[1239px] sm:max-md:w-[358px] bg-bgTheardSection sm:max-md:translate-x-[-8px] translate-x-[-50px] sm:max-md:h-[975px] h-[866px] sm:max-md:gap-[30px] bg-bgMainSection flex flex-col rounded-[40px] items-center mt-[90px] ">
        <TitleSection
          className={"w-[687px] mt-[80px] h-[58px] "}
          content={"BROWSE BY DRESS STYLE"}
        />
        <Grid2
          container
          className={
            "m-auto ml-[60px] sm:max-md:ml-[20px] sm:max-md:flex sm:max-md:flex-col sm:max-md:items-center sm:max-md:-gap-[5px]  "
          }
          spacing={2}
        >
          <Grid2
            className={
              "w-[407px] h-[289px] sm:max-md:w-[310px] sm:max-md:h-[190px] "
            }
          >
            <img
              src={'https://images.unsplash.com/photo-1619551734325-81aaf323686c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lcmNlZGVzJTIwQSUyMENsYXNzfGVufDB8fDB8fHww'}
              className="sm:max-md:w-[310px] object-cover w-[100%] rounded-[20px] h-[100%] sm:max-md:h-[190px]"
              alt=""
            />
          </Grid2>
          <Grid2
            className={
              "w-[684px] h-[289px] sm:max-md:w-[310px] sm:max-md:h-[190px]  "
            }
          >
            <img
              src={'https://images.unsplash.com/photo-1541635768073-b3c66030a479?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJhbmdlJTIwcm92ZXJ8ZW58MHx8MHx8fDA%3D'}
              className="sm:max-md:w-[310px] object-cover w-[100%] rounded-[20px] h-[100%] sm:max-md:h-[190px]"
              alt=""
            />
          </Grid2>
          <Grid2
            className={
              "w-[684px] h-[289px] sm:max-md:w-[310px] sm:max-md:h-[190px]  "
            }
          >
            <img
              src={'https://images.unsplash.com/photo-1591812191990-73347049c5f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Qk1XfGVufDB8fDB8fHww'}
              className="sm:max-md:w-[310px] object-cover w-[100%] rounded-[20px] h-[100%] sm:max-md:h-[190px]"
              alt=""
            />
          </Grid2>
          <Grid2
            className={
              "w-[407px] h-[289px] sm:max-md:w-[310px] sm:max-md:h-[190px]  "
            }
          >
            <img
              src={'https://images.unsplash.com/photo-1620632523414-054c7bea12ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZlcnJhcml8ZW58MHx8MHx8fDA%3D'}
              className="sm:max-md:w-[310px] object-cover w-[100%] rounded-[20px] h-[100%] sm:max-md:h-[190px]"
              alt=""
            />
          </Grid2>
        </Grid2>
      </div>
      <div className="flex flex-col items-center sm:max-md:gap-[40px] ">
        <div className="flex flex-row justify-between w-[1240px] sm:max-md:pr-[20px] sm:max-md:w-widthMobile items-center">
          <TitleSection
            className={
              "w-[654px] text-firstTextColor translate-x-[-40px] sm:max-md:w-[286px] sm:max-md:h-[73px] h-[58px] "
            }
            content={"OUR HAPPY CUSTOMERS"}
          />
          <div className="flex gap-[10px] h-[58px] text-secondTextColor flex-row mt-[80px]">
            <ArrowBack
              onClick={() => {
                setTranslateCust((x) => x - 100);
                console.log("lkjhgf");
              }}
              className=" cursor-pointer w-[24px] h-[24px] "
            />
            <ArrowForward
              onClick={() => {
                setTranslateCust((x) => x + 100);
                console.log("lkjhgf");
              }}
              className=" cursor-pointer w-[24px] h-[24px] "
            />
          </div>
        </div>
        <div
          className={`flex w-maxWidth sm:max-md:w-widthMobile pl-[40px] sm:max-md:pl-[18px] overflow-scroll no-scrollbar flex-row items-center gap-[20px]  `}
        >
          {HappyCustomers.map((hc) => {
            return (
              <Customers
                transform={`translateX(${translateCust}px)`}
                name={hc.name}
                text={hc.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
