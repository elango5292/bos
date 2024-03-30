import Nav from "./nav.js"
import React, { useState } from 'react';
import Busone from "./ui/BusOne.jsx";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu.tsx"
import { FaTicket, FaRoute } from "react-icons/fa6";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
const rectStyle = {
  height: '65px',
  flexShrink: 0,
  borderRadius: '100px',
  background: 'rgba(255, 255, 255, 0.10)',
  boxShadow: '0px 8px 6px 0px rgba(0, 0, 0, 0.05), 0px 1px 1px 0px rgba(255, 255, 255, 0.25) inset, 0px -1px 1px 0px rgba(255, 255, 255, 0.10) inset',
  backdropFilter: 'blur(50px)',
};

export function Book() {
  
var from = "Delhi"
var to = "Mumbai"


  return (
    <div>
      <div className="flex flex-col md:flex-row h-auto md:h-screen">

        <div className="bg-[#383838] md:flex md:flex-col md:gap-y-4 md:items-center w-full md:pt-2 md:w-[60vw]  ">
          <div className="pt-2 ">
            <NavigationMenu >
              <div className="flex w-screen flex-row justify-center">
                <div style={rectStyle} className="flex w-[50vw] flex-row items-center justify-between">
                  <NavigationMenuList>
                    <NavigationMenuItem className="ml-8">
                      <NavigationMenuLink className="NavigationMenuLink text-white text-2xl font-bold" href="/">
                        Bos
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                  <NavigationMenuList className="gap-x-[16px]">

                    <NavigationMenuItem>
                      <NavigationMenuLink className="NavigationMenuLink" href="/">
                        <div className="flex flex-row items-center text-white text-sm gap-x-1"><FaTicket /><>My Tickets</></div>
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuLink className="NavigationMenuLink" href="/">
                        <div className="flex flex-row  text-sm items-center text-white gap-x-1"><FaRoute />
                          <> Bus Routes </></div>
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuLink className="NavigationMenuLink" href="/">
                        <div className="flex flex-row  text-sm items-center text-white gap-x-1"><IoSettings />
                          <>   Account </></div>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <div className="NavigationMenuLink p-3  text-sm  bg-white bg-opacity-30 h-[51px] w-[51px] rounded-full mr-2" >
                        <MdOutlineAccountCircle className="w-full text-white bg-opacity-80 h-full" />

                      </div>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </div></div>
            </NavigationMenu>


          </div>

          <div className="w-[95%] items-start h-auto py-4 flex flex-col gap-y-5 bg-white bg-opacity-10 rounded-[32px] shadow shadow-inner border-2 border-white border-opacity-20 backdrop-blur-[143.12px]">

<div className="flex flex-row w-full gap-x-2 items-center">
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="pointer-events-none w-8 h-8 ml-3 " fill="white"><path d="M480-301q99-80 149.5-154T680-594q0-56-20.5-95.5t-50.5-64Q579-778 544-789t-64-11q-29 0-64 11t-65 35.5q-30 24.5-50.5 64T280-594q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-71 25.5-124.5T291-808q40-36 90-54t99-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-514Z" /></svg>
                           
<><p className="text-white text-4xl font-black">{from} - {to}</p></>




</div>
<div className="px-7 flex flex-wrap w-[70%] text-white justify-between">
        <div className="flex flex-col items-start mb-2">
         <> <span className="font-medium">Bus Number: Tnas2</span></>
         <>  <span className="font-medium">Seat price: 200</span> </>
        </div>
        <div className="flex flex-col items-start mb-2">
          <span className="font-medium">Time: 14:56</span>
          <span className="font-medium">Date: 23/15/12</span>
        </div>
        <div className="flex flex-col items-start mb-2">
          <span className="font-medium">Duration: 6hrs</span>
        </div>
        </div>
<div>

</div>
          </div>
          <div className="w-[95%] h-auto min-h-[200px]  bg-white bg-opacity-10 rounded-[32px] shadow shadow-inner border-2 border-white border-opacity-20 backdrop-blur-[143.12px]">

     <div className="w-full h-[60px] flex flex-row gap-x-2  bg-white bg-opacity-10 rounded-[32px] shadow shadow-inner border-2 border-white border-opacity-20 backdrop-blur-[143.12px]"></div>     

</div>


        </div>
        <div className="bg-white-200 md:min-w-[550px] md:w-[40vw] md:flex md:flex-row md:justify-center  pt-[80px]">
          <Busone className="h-full" /></div>
      </div></div>
  );
}