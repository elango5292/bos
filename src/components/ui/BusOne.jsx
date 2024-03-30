import { useEffect, useState } from 'react';
export default function Busone(props) {
  const [booked, setBooked] = useState(["4a", "6b", "5c", "5d", "10c", "9d"]);
  const [selected, setSelected] = useState(["3a", "2b", "6c", "9c"]);
  const [pending, setPending] = useState(["5a", "5b"]);

  // 0 - available, 1 - selected, 2 - pending, 3 - booked

  const [seatStatus, setSeatstatus] = useState({
    "1c":0,"1d":0,
    "2a":0,"2b":0,"2c":0,"2d":3,
    "3a":0,"3b":0,"3c":0,"3d":3,
    "4a":1,"4b":0,"4c":0,"4d":3,
    "5a":0,"5b":1,"5c":0,"5d":3,
    "6a":0,"6b":0,"6c":2,"6d":3,
    "7a":3,"7b":2,"7c":0,"7d":3,
    "8c":0,"8d":3,
    "9c":0,"9d":2,
    "10a":0,"10b":3,"10c":1,"10d":2
  });

useEffect(()=>{

console.log(seatStatus)

},[seatStatus])

  const cbooked = "!fill-[#FF3B30] stroke-[#FFF] stroke-2 hover:stroke-2 hover:stroke-[#6d6d6d]";
  const cavailable = "fill-[#C7C7CC] stroke-[#FFF] stroke-2 hover:stroke-2 hover:stroke-[#6d6d6d]";
  const cpending = "fill-[#FFCC00] animate-pulse stroke-[#FFF] stroke-2 hover:stroke-2 stroke-[#FFF] stroke-2 hover:stroke-[#6d6d6d]";
  const cselected = "fill-[#34C759] hover:stroke-2 stroke-[#FFF] stroke-2 hover:stroke-[#6d6d6d]";

  function handleSelect(e) {

    if (seatStatus[e.target.id] === 0) {
      setSeatstatus({ ...seatStatus, [e.target.id]: 1 });
     
    }
    else if (seatStatus[e.target.id] === 1) {
      setSeatstatus({ ...seatStatus, [e.target.id]: 0 });
     
    }
  }

  function classSelector(id) {
    if (seatStatus[id] === 3) {
      return cbooked
    }
    else if (seatStatus[id] === 2) {
      return cpending
    }
    else if (seatStatus[id] === 1) {
      return cselected
    }
    else if (seatStatus[id] === 0) {
      return cavailable

    }
   
  }

  return (

    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="bus"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 1080 1920"
      {...props}
    >
      <rect
        id="busground"
        width="908.235"
        height="1751.596"
        fill="#d9d9d9"
        strokeWidth="0"
        rx="75"
        ry="75"
        transform="matrix(.875 0 0 1 142.647 84.202)"
      ></rect>
      <rect
        id="driver"
        width="101.366"
        height="101.366"
        fill="#6d6d6d"
        strokeWidth="0"
        rx="10"
        ry="10"
        transform="translate(796.778 185.08)"
      ></rect>
      <g id="1" strokeWidth="0" transform="translate(-7.249)">
        <rect
          id="1d"
          width="101.366"
          height="101.366"
          fill="#efefef"
          rx="10"
          ry="10"
          transform="translate(804.026 409.937)"
          onClick={handleSelect}
          className={classSelector("1d")}
        ></rect>
        <rect
          id="1c"
          width="101.366"
          height="101.366"
          fill="#efefef"
          onClick={handleSelect}
          className={classSelector("1c")}
          rx="10"
          ry="10"
          transform="translate(679.168 409.937)"
        ></rect>
        <rect
          id="conductor"
          width="101.366"
          height="101.366"
          fill="#6d6d6d"
          rx="10"
          ry="10"
          transform="translate(189.105 409.937)"
        ></rect>
      </g>
      <g
        id="4"
        fill="#efefef"
        strokeWidth="0"
        transform="translate(-7.249 278.508)"
      >
        <rect
          id="4b"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          className={classSelector("4b")}
          transform="translate(313.963 556.706)"
          onClick={handleSelect}
        ></rect>
        <rect
          id="4d"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          className={classSelector("4d")}
          transform="translate(804.026 556.706)"
          onClick={handleSelect}
        ></rect>
        <rect
          id="4c"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          className={classSelector("4c")}
          transform="translate(679.168 556.706)"
          onClick={handleSelect}
        ></rect>
        <rect
          id="4a"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          className={classSelector("4a")}
          transform="translate(189.105 556.706)"
          onClick={handleSelect}
        ></rect>
      </g>
      <g
        id="6"
        fill="#efefef"
        strokeWidth="0"
        transform="translate(-7.249 562.027)"
      >
        <rect
          id="6b"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          className={classSelector("6b")}
          transform="translate(313.963 556.706)"
          onClick={handleSelect}
        ></rect>
        <rect
          id="6d"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          className={classSelector("6d")}
          transform="translate(804.026 556.706)"
          onClick={handleSelect}
        ></rect>
        <rect
          id="6c"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          className={classSelector("6c")}
          transform="translate(679.168 556.706)"
          onClick={handleSelect}
        ></rect>
        <rect
          id="6a"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          className={classSelector("6a")}
          transform="translate(189.105 556.706)"
          onClick={handleSelect}
        ></rect>
      </g>
      <g
        id="9"
        fill="#efefef"
        strokeWidth="0"
        transform="translate(-7.249 859.847)"
      >
        <rect
          id="9d"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          className={classSelector("9d")}
          transform="translate(804.026 684.165)"
          onClick={handleSelect}
        ></rect>
        <rect
          id="9c"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          className={classSelector("9c")}
          transform="translate(679.168 684.165)"
          onClick={handleSelect}
        ></rect>
      </g>
      <g
        id="10"
        fill="#efefef"
        strokeWidth="0"
        transform="translate(-7.249 1001.606)"
      >
        <rect
          id="10d"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          className={classSelector("10d")}
          transform="translate(804.026 684.165)"
          onClick={handleSelect}
        ></rect>
        <rect
          id="10c"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          className={classSelector("10c")}
          transform="translate(679.168 684.165)"
          onClick={handleSelect}
        ></rect>
        <rect
          id="10b"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          className={classSelector("10b")}
          transform="translate(313.963 684.165)"
          onClick={handleSelect}
        ></rect>
        <rect
          id="10a"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          className={classSelector("10a")}
          transform="translate(189.105 684.165)"
          onClick={handleSelect}
        ></rect>
      </g>
      <g
        id="7"
        fill="#efefef"
        strokeWidth="0"
        transform="translate(-7.249 576.328)"
      >
        <rect
          id="7d"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          className={classSelector("7d")}
          transform="translate(804.026 684.165)"
          onClick={handleSelect}
        ></rect>
        <rect
          id="7c"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          className={classSelector("7c")}
          transform="translate(679.168 684.165)"
          onClick={handleSelect}
        ></rect>
        <rect
          id="7b"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          className={classSelector("7b")}
          transform="translate(313.963 684.165)"
          onClick={handleSelect}
        ></rect>
        <rect
          id="7a"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          className={classSelector("7a")}
          transform="translate(189.105 684.165)"
          onClick={handleSelect}
        ></rect>
      </g>
      <g
        id="8"
        fill="#efefef"
        strokeWidth="0"
        transform="translate(-7.249 584.578)"
      >
        <rect
          id="8d"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          className={classSelector("8d")}
          transform="translate(804.026 817.674)"
          onClick={handleSelect}
        ></rect>
        <rect
          id="8c"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          transform="translate(679.168 817.674)"
          className={classSelector("8c")}
          onClick={handleSelect}
        ></rect>
      </g>
      <g
        id="2"
        fill="#efefef"
        strokeWidth="0"
        transform="translate(-7.249 -5.01)"
      >
        <rect
          id="2b"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          transform="translate(313.963 556.706)"
          className={classSelector("2b")}
          onClick={handleSelect}
        ></rect>
        <rect
          id="2d"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          transform="translate(804.026 556.706)"
          className={classSelector("2d")}
          onClick={handleSelect}
        ></rect>
        <rect
          id="2c"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          transform="translate(679.168 556.706)"
          className={classSelector("2c")}
          onClick={handleSelect}
        ></rect>
        <rect
          id="2a"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          transform="translate(189.105 556.706)"
          className={classSelector("2a")}
          onClick={handleSelect}
        ></rect>
      </g>
      <g
        id="3"
        fill="#efefef"
        strokeWidth="0"
        transform="translate(-7.249 9.29)"
      >
        <rect
          id="3d"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          transform="translate(804.026 684.165)"
          className={classSelector("3d")}
          onClick={handleSelect}
        ></rect>
        <rect
          id="3c"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          transform="translate(679.168 684.165)"
          className={classSelector("3c")}
          onClick={handleSelect}
        ></rect>
        <rect
          id="3b"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          transform="translate(313.963 684.165)"
          className={classSelector("3b")}
          onClick={handleSelect}
        ></rect>
        <rect
          id="3a"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          transform="translate(189.105 684.165)"
          className={classSelector("3a")}
          onClick={handleSelect}
        ></rect>
      </g>
      <g
        id="5"
        fill="#efefef"
        strokeWidth="0"
        transform="translate(-7.249 292.81)"
      >
        <rect
          id="5d"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          className={classSelector("5d")}
          transform="translate(804.026 684.165)"
          onClick={handleSelect}
        ></rect>
        <rect
          id="5c"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          transform="translate(679.168 684.165)"
          className={classSelector("5c")}
          onClick={handleSelect}
        ></rect>
        <rect
          id="5b"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          transform="translate(313.963 684.165)"
          className={classSelector("5b")}
          onClick={handleSelect}
        ></rect>
        <rect
          id="5a"
          width="101.366"
          height="101.366"
          rx="10"
          ry="10"
          transform="translate(189.105 684.165)"
          className={classSelector("5a")}
          onClick={handleSelect}
        ></rect>
      </g>
      <rect
        id="door1"
        width="89.892"
        height="174.932"
        fill="#aeaeae"
        strokeWidth="0"
        rx="0"
        ry="0"
        transform="matrix(.42182 0 0 1 142.647 159.442)"
      ></rect>
      <rect
        id="light2"
        width="89.892"
        height="174.932"
        fill="#ececec"
        strokeWidth="0"
        rx="0"
        ry="0"
        transform="matrix(0 .20239 -.67668 0 322.659 85.065)"
      ></rect>
      <rect
        id="light1"
        width="89.892"
        height="174.932"
        fill="#ececec"
        strokeWidth="0"
        rx="0"
        ry="0"
        transform="matrix(0 .20239 -.67668 0 875.715 85.065)"
      ></rect>
      <rect
        id="door2"
        width="89.892"
        height="174.932"
        fill="#aeaeae"
        strokeWidth="0"
        rx="0"
        ry="0"
        transform="matrix(.42182 0 0 1 142.647 1416.152)"
      ></rect>
    </svg>

  )
}