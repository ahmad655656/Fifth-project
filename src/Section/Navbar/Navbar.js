import {
  Close,
  Logout,
  Person2,
  Search,
  ShoppingBagOutlined,
  SignpostOutlined,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  MenuItem,
  Menu,
  List,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { NavBar } from "../../Data";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { PiSignIn, PiSignInLight } from "react-icons/pi";
import { TbSearch } from "react-icons/tb";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const navigate = useNavigate(); 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div className="flex flex-col relative bg-bgheaderfooter w-maxWidth h-[100px] sm:max-md:w-widthMobile">
      <div className="relative w-maxWidth  sm:max-md:w-widthMobile sm:max-md:h-[34px] h-[38px] items-center text-center flex-row bg-bgNav flex">
        <button
          onClick={() => {
            localStorage.removeItem("authToken"); // تسجيل الخروج
            navigate('/login')
          }}
        >
          <Logout className="ml-[50px] " />
        </button>
        <div className="w-[351px] sm:max-md:w-widthMobile text-firstTextColor sm:max-md:h-[16px] sm:max-md:translate-x-0 sm:max-md:text-center sm:max-md:text-[12px] h-[19px] text-[14px] translate-x-[524px] text-secondTextColor ">
         <Link to='/'>
         Sign up and get 20% off to your first order. Sign Up Now
         </Link>
        </div>
        <div className="sm:max-md:hidden flex absolute w-[20px] h-[20px] text-center translate-x-[1300px]">
          <Link to="/login">
            <PiSignInLight className="flex translate-x-[-87.44px] translate-y-[-2.43px] cursor-pointer text-[40px] text-firstTextColorw-[25.3px] h-[25.3px]" />
          </Link>
        </div>
      </div>
      <div className="w-[1240px] h-[48px]  sm:max-md:w-widthMobile sm:max-md:h-[24px] sm:max-md:translate-x-0 sm:max-md:gap-0 sm:max-md:translate-y-[30px] sm:max-md:py-[20px] sm:max-md:bg-bgTheardSection sm:max-md:flex fixed top-0 bg-bgMainSection z-[5325] sm:max-md:flex-row sm:max-md:items-center sm:max-md:text-center sm:max-md:gap-[20px] sm:max-md:m-0 m-auto translate-x-[50px] translate-y-[62px] flex flex-row gap-[40px] items-center ">
        <Box
          className={"sm:max-md:inline-block hidden   "}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
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
        <Link to="/home">
          <h2 className="font-black text-[32px] sm:max-md:text-[20.2px] sm:max-md:w-[186px] sm:max-md:min-h-0 sm:max-md:text-left text-firstTextColor ">
            Haedara Motors
          </h2>
        </Link>
        <List className="sm:max-md:hidden flex flex-row items-center gap-[24px] h-[22px] w-[321px] ">
          <Link to="/about">
            <li
              className={
                "w-[87px] hover:bg-bgTheardSection h-[42px] text-center rounded-[20px] p-[10px] hover:text-firstTextColor transition-all ease-in-out duration-500 text-secondTextColor text-[16px] "
              }
            >
              About Us
            </li>
          </Link>
          <Link to="/fqs">
            <li
              className={
                "w-[87px] hover:bg-bgTheardSection h-[42px] text-center rounded-[20px] p-[10px] hover:text-firstTextColor transition-all ease-in-out duration-500 text-secondTextColor text-[16px] "
              }
            >
              FQS
            </li>
          </Link>
          <Link to="/contact">
            <li
              className={
                "w-[100px] hover:bg-bgTheardSection h-[42px] text-center rounded-[20px] p-[10px] hover:text-firstTextColor transition-all ease-in-out duration-500 text-secondTextColor text-[16px] "
              }
            >
              Contact Us
            </li>
          </Link>
        </List>
        <div className="w-[507px] h-[48px] sm:max-md:hidden bg-bgMainSection rounded-[62px] absolute translate-x-[661px] gap-[10px] text-center pl-[10px] flex flex-row items-center">
          <Search className="w-[24px] h-[24px] text-secondTextColor " />
          <input
            type="text"
            placeholder="Search for Car"
            className=" outline-none text-firstTextColor focus:outline-none focus:ring-0 sm:max-md:hidden border-none bg-bgMainSection placeholder:text-[16px] placeholder:text-secondTextColor  "
          />
        </div>
        <div className="w-[62px] sm:max-md:w-[96px] sm:max-md:gap-[5px] sm:max-md:translate-x-[10px] sm:max-md:h-[24px] h-[24px] sm:max-md:translate-x-0 sm:max-md:relative absolute translate-x-[1178px] flex flex-row gap-[14px] items-center ">
          <TbSearch className="sm:max-md:flex lg:hidden w-[24px] text-secondTextColor h-[24px] " />
          <Person2 className=" w-[24px]  text-secondTextColor h-[24px] " />
        </div>
      </div>
    </div>
  );
}
