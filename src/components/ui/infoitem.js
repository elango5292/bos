import React, { useEffect, useRef } from 'react';
import { FaMoneyBillWave } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaStopwatch } from "react-icons/fa";
import { IoIosClock } from "react-icons/io";


export default function Infoitem({from,destination,price,travelDate,travelDuration,startingTime}){


    function Start_End({ start, end }) {
        return (
          <div className="flex flex-row justify-between items-center">
            <span>{start}</span>
            <div className="flex-1 bg-black mx-2" style={{ height: "1px" }}></div>
            <span>{end}</span>
          </div>
        );
      }

    return(
        <div className="flex flex-col hover:cursor-pointer w-[95%] h-auto bg-white bg-opacity-20 rounded-[22px] border-2 border-white border-opacity-10">

<div className="flex flex-row justify-between items-center px-[21px] py-[15px]">
    <span className="text-[1.3em] font-semibold text-white text-opacity-90">{from}</span>
    
    <div className="flex-1 flex items-center mx-2">
    <svg width="10" height="10" className='text-white' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.900024 7.50002C0.900024 3.85495 3.85495 0.900024 7.50002 0.900024C11.1451 0.900024 14.1 3.85495 14.1 7.50002C14.1 11.1451 11.1451 14.1 7.50002 14.1C3.85495 14.1 0.900024 11.1451 0.900024 7.50002ZM7.50002 1.80002C4.35201 1.80002 1.80002 4.35201 1.80002 7.50002C1.80002 10.648 4.35201 13.2 7.50002 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.35201 10.648 1.80002 7.50002 1.80002ZM3.07504 7.50002C3.07504 5.05617 5.05618 3.07502 7.50004 3.07502C9.94388 3.07502 11.925 5.05617 11.925 7.50002C11.925 9.94386 9.94388 11.925 7.50004 11.925C5.05618 11.925 3.07504 9.94386 3.07504 7.50002ZM7.50004 3.92502C5.52562 3.92502 3.92504 5.52561 3.92504 7.50002C3.92504 9.47442 5.52563 11.075 7.50004 11.075C9.47444 11.075 11.075 9.47442 11.075 7.50002C11.075 5.52561 9.47444 3.92502 7.50004 3.92502ZM7.50004 5.25002C6.2574 5.25002 5.25004 6.25739 5.25004 7.50002C5.25004 8.74266 6.2574 9.75002 7.50004 9.75002C8.74267 9.75002 9.75004 8.74266 9.75004 7.50002C9.75004 6.25738 8.74267 5.25002 7.50004 5.25002ZM6.05004 7.50002C6.05004 6.69921 6.69923 6.05002 7.50004 6.05002C8.30084 6.05002 8.95004 6.69921 8.95004 7.50002C8.95004 8.30083 8.30084 8.95002 7.50004 8.95002C6.69923 8.95002 6.05004 8.30083 6.05004 7.50002Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        <div className="w-full border-b-2 border-dotted border-white" style={{borderWidth: "1px"}}></div>
        <svg width="20" height="20" className='text-white -left-[14px]' viewBox="7 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='w-full h-full' d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor"></path></svg>  </div>
    
    <span className="text-[1.3em] font-semibold text-white text-opacity-90">{destination}</span>
</div>
            <div className="flex flex-row   justify-around mx-[20px] mb-[15px]">
<p name="Price" className="text-[1em] flex-row flex items-center gap-x-1 text-white"><span className='inline '><FaMoneyBillWave />

</span>Rs.{price}</p>
<p name="Travel Date" className="text-[1em] flex-row flex items-center gap-x-1 text-white"><span className='inline '>
<MdDateRange />


</span>{travelDate}</p>
<p name="Starting Time" className="text-[1em] flex-row flex items-center gap-x-1 text-white"><span className='inline '><IoIosClock />


</span>{startingTime}</p>
<p name="Travel Duration" className="text-[1em] flex-row flex items-center gap-x-1 text-white"><span className='inline '><FaStopwatch />


</span>{travelDuration}</p>
            </div>
           
        </div>
    )
}