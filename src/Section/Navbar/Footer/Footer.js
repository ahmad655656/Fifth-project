import { Email, GitHub } from "@mui/icons-material";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import photo from "../../../assests/Frame 53.png";
export default function Footer() {
  return (
    <div className="w-maxWidth sm:max-md:w-widthMobile sm:max-md:h-[300px] h-[589px] ">
      <div className="w-[1240px] h-[180px] sm:max-md:h-[293px] sm:max-md:w-[358px] sm:max-md:flex-col sm:max-md:items-center m-auto sm:max-md:translate-y-[140px] translate-y-[80px] flex flex-row items-center rounded-[20px] bg-bgNav text-secondTextColor sm:max-md:px-[10px] sm:max-md:py-[20px] px-[36px] py-[64px] justify-between ">
        <div className="w-[551px] sm:max-md:w-[297px] sm:max-md:h-[105px] sm:max-md:text-[32px] h-[94px] text-[40px] mb-[20px] font-black ">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </div>
        <div className="w-[349px] sm:max-md:w-[311px] h-[108px] flex flex-col items-center gap-[20px] ">
          <div className="w-[349px] sm:max-md:w-[311px] sm:max-md:h-[42px] h-[48px] bg-bgMainSection rounded-[62px] gap-[10px] text-center pt-[10px] pl-[10px] flex flex-row items-start">
            <Email className="w-[24px] h-[24px] text-firstTextColor " />
            <input
              type="text"
              placeholder="Enter your email address"
              className="outline-none border-none text-firstTextColor bg-bgMainSection placeholder:text-[16px]  "
            />
          </div>
          <button className="w-[349px] sm:max-md:w-[311px] sm:max-md:h-[42px] transition-all duration-100 ease-in-out focus:bg-bgSecondSection focus:font-black h-[48px] bg-bgMainSection rounded-[62px] text-[16px] text-firstTextColor  ">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
      <div className="bg-bgSecondSection w-maxWidth pt-[150px] h-[499px] sm:max-md:w-widthMobile sm:max-md:h-[926px] sm:max-md:flex sm:max-md:flex-col sm:max-md:gap-[30px] ">
        <div className="w-[1240px] h-[207px] m-auto flex flex-row sm:max-md:min-h-[650px] sm:max-md:pl-[30px] sm:max-md:pb-0 sm:max-md:flex-wrap sm:max-md:w-widthMobile sm:max-md:pb-[40px] border-b-solid border-b-[2px] pb-[100px] border-b-borderFooter items-center justify-between">
          <div className="w-[248px] h-[177px] sm:max-md:w-widthMobile flex flex-col items-start gap-[35px] ">
            <h2 className="font-black text-[32px] sm:max-md:text-[28.85px] ">
              SHOP.CO
            </h2>
            <p className="text-[14px] w-[248px] h-[66px] sm:max-md:w-[356px] sm:max-md:h-[40px] ">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <span className="flex flex-row items-center w-[184px] sm:max-md:w-[148px] h-[28px] gap-[12px] hover:gap-[20px] transition-all duration-500 ease-in-out ">
              <FaTwitter className="hover:w-[38px] hover:h-[38px] transition-all duration-500 ease-in-out w-[28px] h-[28px] bg-bgTheardSection rounded-[50%] text-[15px] p-[4px] " />
              <FaFacebook className="hover:w-[38px] hover:h-[38px] transition-all duration-500 ease-in-out w-[28px] h-[28px] bg-bgTheardSection rounded-[50%] text-[15px] p-[4px] " />
              <FaInstagram className="hover:w-[38px] hover:h-[38px] transition-all duration-500 ease-in-out text-[15px] p-[4px] w-[28px] h-[28px] bg-bgTheardSection rounded-[50%] " />
              <GitHub className="hover:w-[38px] hover:h-[38px] transition-all duration-500 ease-in-out w-[28px] bg-bgTheardSection h-[28px] bg- rounded-[50%] text-[15px] p-[4px] " />{" "}
            </span>
          </div>
          <div className="w-[104px] h-[177px] sm:max-md:w-[50%] sm:max-md:h-[146px] sm:max-md:gap-[10px] flex flex-col items-start gap-[26px] ">
            <h2 className="text-[16px] sm:max-md:text-[14px] font-medium ">
              COMPANY
            </h2>
            <div className="flex flex-col items-start gap-[16px]">
              <h4 className="text-[16px] sm:max-md:text-[14px] font-light opacity-60 ">
                About
              </h4>
              <h4 className="text-[16px] sm:max-md:text-[14px] font-light opacity-60 ">
                Features
              </h4>
              <h4 className="text-[16px] sm:max-md:text-[14px] font-light opacity-60 ">
                Works
              </h4>
              <h4 className="text-[16px] sm:max-md:text-[14px] font-light opacity-60 ">
                Career
              </h4>
            </div>
          </div>
          <div className="w-[136px] h-[177px] sm:max-md:w-[50%] sm:max-md:h-[146px] sm:max-md:gap-[10px] flex flex-col items-start gap-[26px] ">
            <h2 className="text-[16px] sm:max-md:text-[14px] font-medium ">
              HELP
            </h2>
            <div className="flex flex-col items-start gap-[16px] ">
              <h4 className="text-[16px] sm:max-md:text-[14px] font-light opacity-60 ">
                Customer Support
              </h4>
              <h4 className="text-[16px] sm:max-md:text-[14px] font-light opacity-60 ">
                Delivery Details
              </h4>
              <h4 className="text-[16px] sm:max-md:text-[14px] font-light opacity-60 ">
                Terms & Conditions
              </h4>
              <h4 className="text-[16px] sm:max-md:text-[14px] font-light opacity-60 ">
                Privacy Policy
              </h4>
            </div>
          </div>
          <div className="w-[149px] h-[177px] sm:max-md:w-[50%] sm:max-md:h-[146px] sm:max-md:gap-[10px] flex flex-col items-start gap-[26px] ">
            <h2 className="text-[16px] sm:max-md:text-[14px] font-medium ">
              FAQ
            </h2>
            <div className="flex flex-col items-start gap-[16px] ">
              <h4 className="text-[16px] sm:max-md:text-[14px] font-light opacity-60 ">
                Account
              </h4>
              <h4 className="text-[16px] sm:max-md:text-[14px] font-light opacity-60 ">
                Manage Deliverie
              </h4>
              <h4 className="text-[16px] sm:max-md:text-[14px] font-light opacity-60 ">
                Orders
              </h4>
              <h4 className="text-[16px] sm:max-md:text-[14px] font-light opacity-60 ">
                Payments
              </h4>
            </div>
          </div>
          <div className="w-[149px] h-[177px] sm:max-md:w-[50%] sm:max-md:h-[146px] sm:max-md:gap-[10px] flex flex-col items-start gap-[26px] ">
            <h2 className="text-[16px] sm:max-md:text-[14px] font-medium ">
              RESOURCES
            </h2>
            <div className="flex flex-col items-start gap-[16px] ">
              <h4 className="text-[16px] sm:max-md:text-[14px] font-light opacity-60 ">
                Free eBooks
              </h4>
              <h4 className="text-[16px] sm:max-md:text-[14px] font-light opacity-60 ">
                Devlopment Tutorial
              </h4>
              <h4 className="text-[16px] sm:max-md:text-[14px] font-light opacity-60 ">
                How to - Blog
              </h4>
              <h4 className="text-[16px] sm:max-md:text-[14px] font-light opacity-60 ">
                Youtube Playlist
              </h4>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center sm:max-md:w-widthMobile sm:max-md:flex-col sm:max-md:items-center sm:max-md:pb-[30px] sm:max-md:mt-0 sm:max-md:gap-[10px] justify-between m-auto mt-[30px] w-[1240px] ">
          <h4 className="text-[14px] font-light w-[269px] h-[19px] sm:max-md:text-[14px]  ">
            Shop.co © 2000-2023, All Rights Reserved
          </h4>
          <img
            src={photo}
            alt=""
            className="w-[281.07px] sm:max-md:w-[240.93px] sm:max-md:h-[25.74px] h-[30.03px] "
          />
        </div>
      </div>
    </div>
  );
}
