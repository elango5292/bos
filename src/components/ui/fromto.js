import React, { useState, useEffect, useRef } from 'react';
import { Input } from "./input.tsx"
import { Button } from "./button.tsx"
import Infoitem from './infoitem.js';
import axios from 'axios';
import api from '../../api.js';
export default function Fromto() {

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [trips, setTrips] = useState([]);
  
    const DottedLine = () => {
        const canvasRef = useRef(null);
      
        useEffect(() => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const dotRadius = 2; 
            const dotSpacing = 1.4; 

            const numDots = Math.floor(canvas.height / (dotRadius * 2 + dotSpacing));

            for (let i = 0; i < numDots; i++) {
                const y = i * (dotRadius * 2 + dotSpacing) + dotRadius + dotSpacing;
                ctx.beginPath();
                ctx.arc(0, y, dotRadius, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'white';
                ctx.fill();
            }

            
        }, []);

        return <canvas ref={canvasRef} />;
    };

    const rectStyle = {
        width: '90vw',
        height: '431px',
        flexShrink: 0,
        borderRadius: '32px',
        border: '3px solid rgba(255, 255, 255, 0.15)',
        background: 'rgba(255, 255, 255, 0.10)',
        boxShadow: '0px 17.525px 21.907px 0px rgba(0, 0, 0, 0.05), -0.73px 0.73px 0.73px -1.46px rgba(255, 255, 255, 0.35) inset',
      
      };
      function handleSubmit(e){
e.preventDefault();
if (from && to && date) {
    api.get(`/trips?from=${from}&to=${to}&date=${date}`)
      .then(response => {
        console.log(response.data)
        setTrips(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
      }}

    return (
        <div className=" flex justify-center  h-screen">
            <div style={rectStyle} className="backdrop-blur-[9px] backdrop-opacity-95  h-[431px] justify-between flex flex-row ">
                <div className='flex flex-col mt-[59px] ml-[70px] '>
                    <div>
                        <label class="relative   block ">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3 " fill="white"><path d="M440-42v-80q-125-14-214.5-103.5T122-440H42v-80h80q14-125 103.5-214.5T440-838v-80h80v80q125 14 214.5 103.5T838-520h80v80h-80q-14 125-103.5 214.5T520-122v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0-80Z" /></svg>

                            <Input value={from} onChange={(e) => setFrom(e.target.value)} style={{ color: "white" }} className="!border-3 !border-white !border-opacity-40 fromto w-[400px] h-[60px] bg-white bg-opacity-30 rounded-[43px] text-[1.125rem] placeholder-white py-3 px-4 block pl-14" placeholder="Enter your location" />

                        </label>
                    </div>
                    <div className='h-[56px] overflow-hidden pl-6'>
                        <DottedLine /></div>
                    <div>
                        <label class="relative    block ">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3 " fill="white"><path d="M480-301q99-80 149.5-154T680-594q0-56-20.5-95.5t-50.5-64Q579-778 544-789t-64-11q-29 0-64 11t-65 35.5q-30 24.5-50.5 64T280-594q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-71 25.5-124.5T291-808q40-36 90-54t99-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-514Z" /></svg>
                            <Input value={to} onChange={(e) => setTo(e.target.value)}  style={{ color: "white" }} className="  fromto w-[400px] mr-4 h-[60px] bg-white bg-opacity-30 rounded-[43px] text-[1.125rem] placeholder-white py-3 px-4 block pl-14 !border-3 !border-white !border-opacity-40" placeholder="Enter your destination" />

                        </label>
                    </div>
                    <div className='mt-4'>
                        <label class="relative    block ">
                        
                            <Input type='date' value={date} onChange={(e) => setDate(e.target.value)}  style={{ color: "white" }} className="  fromto w-[250px] h-[50px] bg-white bg-opacity-30 rounded-[43px] text-[1.125rem] placeholder-white py-3 px-4 block pl-14 !border-3 !border-white !border-opacity-40" placeholder="Enter your destination" />

                        </label>
                    </div>
                    <Button onClick={handleSubmit} className='flex flex-row gap-x-3 w-[202px] h-[55px] bg-white bg-opacity-30 rounded-[10px] shadow-inner backdrop-blur-[100px] mt-[33px] !border-2 !border-white !border-opacity-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                        <span>Search Prices</span>
                    </Button>
                </div>
                <div class="w-[599px] h-full bg-white bg-opacity-10 backdrop-opacity-10 rounded-tl-[10px] rounded-tr-[32px] rounded-bl-[10px] rounded-br-[32px] shadow-inner backdrop-blur-[100px] !border-[1px] !border-white !border-opacity-20    py-[32px] ">
<div className='scrollbar-track-[#0000] flex flex-col gap-y-3 pl-4 pr-1 h-full overflow-auto !scrollbar-thumb-rounded !scrollbar-thumb-[#cfd2d4]  !scrollbar-track-rounded-full  !scrollbar-thin '>
{trips.map((trip, index) => {
  console.log(trip);
  return (
    <a href={`/book?tripId=${trip.id}`}>
      <Infoitem 
        key={index}
        from={trip.from}
        destination={trip.to}
        price={trip.price}
        travelDate={new Date(trip.departureTime).toLocaleDateString()}
        travelDuration={`${trip.duration} hours`}
        startingTime={new Date(trip.departureTime).toLocaleTimeString()}
      />
    </a>
  )
})}
              </div></div>
            </div>

        </div>
    )

}
