import { Close, Person2, Person2Outlined, Search, Shop, ShoppingBag, ShoppingBagOutlined, ShoppingBasket } from "@mui/icons-material";
import { Select, MenuItem, ListItem, Menu, List, InputLabel, Button } from "@mui/material";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-maxWidth h-[38px] items-center text-center flex-row bg-bgNav flex">
        <div className="w-[351px] h-[19px] text-[14px] translate-x-[544px] text-secondTextColor ">
          Sign up and get 20% off to your first order. Sign Up Now
        </div>
        <div className="absolute w-[20px] h-[20px] text-center translate-x-[1320px]">
          <Close className="translate-x-[3.44px] translate-y-[-2.43px] cursor-pointer text-secondTextColor w-[13.3px] h-[13.3px]" />
        </div>
      </div>
      <div className="w-[1240px] h-[48px] m-auto translate-x-[100px] absolute translate-y-[62px] flex flex-row gap-[40px] items-center ">
        <h2 className="font-black text-[32px]  ">SHOP.CO</h2>
        <List className="flex flex-row items-center gap-[24px] h-[22px] w-[321px] ">
          <MenuItem className={"w-[56px] h-[22px] text-firstTextColor text-[16px] "}>Shop</MenuItem>
          <MenuItem className={"w-[56px] h-[22px] text-firstTextColor text-[16px] "}>On Sale</MenuItem>
          <MenuItem className={"w-[56px] h-[22px] text-firstTextColor text-[16px] "}>Arrivals</MenuItem>
          <MenuItem className={"w-[56px] h-[22px] text-firstTextColor text-[16px] "}>Brands</MenuItem>
        </List>
        <div className="w-[577px] h-[48px] bg-bgSecondSection rounded-[62px] absolute translate-x-[561px] gap-[10px] text-center pt-[10px] pl-[10px] flex flex-row items-start">
          <Search className="w-[24px] h-[24px] " />
          <input type="text" placeholder="Search for products" className="outline-none border-none bg-bgSecondSection placeholder:text-[16px]  " />
        </div>
        <div className="w-[62px] h-[24px absolute translate-x-[1178px] flex flex-row gap-[14px] items-center ">
          <ShoppingBagOutlined />
          <Person2 />
        </div>
      </div>
    </div>
  );
}
