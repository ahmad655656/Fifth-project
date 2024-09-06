import { Close, Person2, Person2Outlined, Search, Shop, ShoppingBag, ShoppingBagOutlined, ShoppingBasket } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Select, MenuItem, ListItem, Menu, List, InputLabel, Button, Box, IconButton, Typography, Link } from "@mui/material";
import React from "react";
import { NavBar } from "../../Data";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div className="flex flex-col w-maxWidth sm:max-md:w-widthMobile">
      <div className="relative w-maxWidth  sm:max-md:w-widthMobile  sm:max-md:h-[34px] h-[38px] items-center text-center flex-row bg-bgNav flex">
        <div className="w-[351px] sm:max-md:w-widthMobile sm:max-md:h-[16px] sm:max-md:translate-x-0 sm:max-md:text-center sm:max-md:text-[12px] h-[19px] text-[14px] translate-x-[544px] text-secondTextColor ">
          Sign up and get 20% off to your first order. Sign Up Now
        </div>
        <div className="sm:max-md:hidden flex absolute w-[20px] h-[20px] text-center translate-x-[1320px]">
          <Close className="sm:max-md:hidden flex translate-x-[3.44px] translate-y-[-2.43px] cursor-pointer text-secondTextColor w-[13.3px] h-[13.3px]" />
        </div>
      </div>
      <div className="w-[1240px] h-[48px] sm:max-md:w-widthMobile sm:max-md:h-[24px] sm:max-md:translate-x-0 sm:max-md:gap-0 sm:max-md:translate-y-[30px] sm:max-md:py-[20px] sm:max-md:bg-bgTheardSection sm:max-md:flex sm:max-md:flex-row sm:max-md:items-center sm:max-md:text-center sm:max-md:gap-[20px] sm:max-md:m-0 m-auto translate-x-[100px] absolute translate-y-[62px] flex flex-row gap-[40px] items-center ">
      <Box className={"sm:max-md:inline-block hidden   "} sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {NavBar.map((page) => (
                <Link to={page.link}>
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {page.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
               </Menu>
               </Box>
        <h2 className="font-black text-[32px] sm:max-md:text-[25.2px] sm:max-md:w-[126px] sm:max-md:min-h-0 sm:max-md:text-center ">SHOP.CO</h2>
        <List className="sm:max-md:hidden flex flex-row items-center gap-[24px] h-[22px] w-[321px] ">
          <MenuItem className={"w-[56px] h-[22px] text-firstTextColor text-[16px] "}>Shop</MenuItem>
          <MenuItem className={"w-[56px] h-[22px] text-firstTextColor text-[16px] "}>On Sale</MenuItem>
          <MenuItem className={"w-[56px] h-[22px] text-firstTextColor text-[16px] "}>Arrivals</MenuItem>
          <MenuItem className={"w-[56px] h-[22px] text-firstTextColor text-[16px] "}>Brands</MenuItem>
        </List>
        <div className="w-[577px] h-[48px] sm:max-md:hidden bg-bgSecondSection rounded-[62px] absolute translate-x-[561px] gap-[10px] text-center pt-[10px] pl-[10px] flex flex-row items-start">
          <Search className="w-[24px] h-[24px] " />
          <input type="text" placeholder="Search for products" className="sm:max-md:hidden outline-none border-none bg-bgSecondSection placeholder:text-[16px]  " />
        </div>
        <div className="w-[62px] sm:max-md:w-[96px] sm:max-md:translate-x-[70px] sm:max-md:h-[24px] h-[24px] sm:max-md:translate-x-0 sm:max-md:relative absolute translate-x-[1178px] flex flex-row gap-[14px] items-center ">
        <Search className="lg:max-xlg:hidden w-[24px] h-[24px] " />
          <ShoppingBagOutlined />
          <Person2 />
        </div>
      </div>
    </div>
  );
}
