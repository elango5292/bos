import React, { useEffect, useRef } from 'react';
import { Input } from "./input.tsx"
import { Button } from "./button.tsx"
import Infoitem from './infoitem.js';
export default function Fromto() {

    const DottedLine = () => {
        const canvasRef = useRef(null);

        useEffect(() => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const dotRadius = 2; // The radius of the dots
            const dotSpacing = 1.4; // The space between the dots

            // Calculate the number of dots
            const numDots = Math.floor(canvas.height / (dotRadius * 2 + dotSpacing));

            // Draw the dots
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


    return (
        <div className=" flex justify-center  h-screen">
            <div className=" backdrop-opacity-10  mt-[100px] w-[1289px] bg-transparent  h-[431px] border-2 border-white border-opacity-10 bg-white bg-opacity-10   rounded-[32px]  shadow-inner backdrop-blur-[143.12px] justify-between flex flex-row ">
                <div className='flex flex-col mt-[59px] ml-[70px] '>
                    <div>
                        <label class="relative   block ">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3 " fill="white"><path d="M440-42v-80q-125-14-214.5-103.5T122-440H42v-80h80q14-125 103.5-214.5T440-838v-80h80v80q125 14 214.5 103.5T838-520h80v80h-80q-14 125-103.5 214.5T520-122v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0-80Z" /></svg>

                            <Input style={{ color: "white" }} className="!border-3 !border-white !border-opacity-40 fromto w-[565px] h-[60px] bg-white bg-opacity-30 rounded-[43px] text-[1.125rem] placeholder-white py-3 px-4 block pl-14" placeholder="Enter your location" />

                        </label>
                    </div>
                    <div className='h-[56px] overflow-hidden pl-6'>
                        <DottedLine /></div>
                    <div>
                        <label class="relative    block ">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3 " fill="white"><path d="M480-301q99-80 149.5-154T680-594q0-56-20.5-95.5t-50.5-64Q579-778 544-789t-64-11q-29 0-64 11t-65 35.5q-30 24.5-50.5 64T280-594q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-71 25.5-124.5T291-808q40-36 90-54t99-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-514Z" /></svg>
                            <Input style={{ color: "white" }} className="  fromto w-[565px] h-[60px] bg-white bg-opacity-30 rounded-[43px] text-[1.125rem] placeholder-white py-3 px-4 block pl-14 !border-3 !border-white !border-opacity-40" placeholder="Enter your destination" />

                        </label>
                    </div>
                    <Button className='flex flex-row gap-x-3 w-[202px] h-[55px] bg-white bg-opacity-30 rounded-[10px] shadow-inner backdrop-blur-[100px] mt-[33px] !border-2 !border-white !border-opacity-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                        <span>Search Prices</span>
                    </Button>
                </div>
                <div class="w-[599px] h-full bg-white bg-opacity-10 backdrop-opacity-10 rounded-tl-[10px] rounded-tr-[32px] rounded-bl-[10px] rounded-br-[32px] shadow-inner backdrop-blur-[100px] !border-[1px] !border-white !border-opacity-20    py-[32px] ">
<div className='scrollbar-track-[#0000] flex flex-col gap-y-3 pl-4 pr-1 h-full overflow-auto !scrollbar-thumb-rounded !scrollbar-thumb-[#cfd2d4]  !scrollbar-track-rounded-full  !scrollbar-thin '>
<Infoitem from="Delhi" destination="Mumbai" price="5000" travelDate="21/34/56" travelDuration="4 hours" startingTime="14:00"  />
<Infoitem from="DelhiDelhiDelhi" destination="Mumbai" price="5000" travelDate="21/34/56" travelDuration="4 hours" startingTime="14:00"  />
<Infoitem from="Delhi" destination="MumbaiDelhiDelhi" price="5000" travelDate="21/34/56" travelDuration="4 hours" startingTime="14:00"  />
<Infoitem from="DelhiDelhiDelhi" destination="MumbaiDelhiDelhi" price="5000" travelDate="21/34/56" travelDuration="4 hours" startingTime="14:00"  />
<Infoitem from="Delhi" destination="Mumbai" price="5000" travelDate="21/34/56" travelDuration="4 hours" startingTime="14:00"  />
                </div></div>
            </div>

        </div>
    )

}
