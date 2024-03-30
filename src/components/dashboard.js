
import  Fromto  from "./ui/fromto.js"
import Nav from "./nav.js"
import React, { useState } from 'react';
import svgContent from './../assets/mySvg.svg'; 
import Busone from "./ui/BusOne.jsx";

export function Dashboard(){
  const [booked, setBooked] = useState(["4a","6b","5c","5d","10c","9d"]);


  
    return (
      <div className="flex flex-row h-screen">
        <div className="bg-white-100 w-1/2 "></div>
        <div className="w-1/2 h-screen">
        <Busone className="h-screen" booked={booked} /></div>
      </div>
    );
}