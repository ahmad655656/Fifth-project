import { Email } from '@mui/icons-material'
import React from 'react'

export default function Footer() {
  return (
    <div className='w-maxWidth h-[589px] '>
        <div className='w-[1240px] h-[180px] m-auto translate-y-[80px] flex flex-row items-center rounded-[20px] bg-bgNav text-secondTextColor px-[36px] py-[64px] justify-between '>
        <div className='w-[551px] h-[94px] text-[40px] mb-[20px] font-black '>
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </div>
        <div className='w-[349px] h-[108px] flex flex-col items-center gap-[20px] '>
        <div className="w-[349px] h-[48px] bg-bgMainSection rounded-[62px] gap-[10px] text-center pt-[10px] pl-[10px] flex flex-row items-start">
          <Email className="w-[24px] h-[24px] text-firstTextColor " />
          <input type="text" placeholder="Enter your email address" className="outline-none border-none text-firstTextColor bg-bgMainSection placeholder:text-[16px]  " />
        </div>
        <button className='w-[349px] transition-all duration-100 ease-in-out focus:bg-bgSecondSection focus:font-black h-[48px] bg-bgMainSection rounded-[62px] text-[16px] text-firstTextColor  '>Subscribe to Newsletter</button>
        </div>
      </div>
        <div className='bg-bgSecondSection w-maxWidth h-[499px] '>

      </div>
    </div>
  )
}
