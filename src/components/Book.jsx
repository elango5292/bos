import React, { useState, useEffect } from 'react';
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
import { useSearchParams } from 'react-router-dom';
import { Button } from './ui/button.tsx';
import api from '../api.js';

const rectStyle = {
  height: '65px',
  flexShrink: 0,
  borderRadius: '100px',
  background: 'rgba(255, 255, 255, 0.10)',
  boxShadow: '0px 8px 6px 0px rgba(0, 0, 0, 0.05), 0px 1px 1px 0px rgba(255, 255, 255, 0.25) inset, 0px -1px 1px 0px rgba(255, 255, 255, 0.10) inset',
  backdropFilter: 'blur(50px)',
};

export function Book() {
  const [tripData, setTripData] = useState(
    {
      "1c": 0,
      "1d": 0,
      "2a": 0,
      "2b": 0,
      "2c": 0,
      "2d": 0,
      "3a": 0,
      "3b": 0,
      "3c": 0,
      "3d": 0,
      "4a": 0,
      "4b": 0,
      "4c": 0,
      "4d": 0,
      "5a": 0,
      "5b": 0,
      "5c": 0,
      "5d": 0,
      "6a": 0,
      "6b": 0,
      "6c": 0,
      "6d": 0,
      "7a": 0,
      "7b": 0,
      "7c": 0,
      "7d": 0,
      "8c": 0,
      "8d": 0,
      "9c": 0,
      "9d": 0,
      "10a": 0,
      "10b": 0,
      "10c": 0,
      "10d": 0
  }
  );
  const [searchParams] = useSearchParams();
  const tripId = searchParams.get('tripId');
  const [showPayment, setShowPayment] = useState(false);
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

  const [selectedSeats,setSelectedSeats] = useState([])
  const totalPrice = Object.values(seatStatus).reduce((total, status) => {
    return status === 1 ? total + (tripData?.price || 0) : total;
  }, 0);

  console.log(tripId)
  useEffect(() => {
    const fetchTripData = async () => {
      try {

        api.post('/trip', { id: tripId })
      .then(response => {
        console.log(response.data)
        setTripData(response.data);
        setSeatstatus(response.data.seats)
      })
      .catch(error => {
        console.error(error);
      });

      } catch (error) {
        console.error('Error fetching trip data:', error);
      }
    };

    fetchTripData();
  }, [tripId]);

  const updateTripData = async () => {
    try {

      api.post('/trip', { id: tripId })
    .then(response => {
      console.log(response.data)
      setTripData(response.data);
      setSeatstatus(response.data.seats)
    })
    .catch(error => {
      console.error(error);
    });

    } catch (error) {
      console.error('Error fetching trip data:', error);
    }
  };

  function handleBook() {
    try {
      const selectedSeats = Object.entries(seatStatus)
        .filter(([, status]) => status === 1)
        .map(([seat]) => seat);
  
      api
        .post('/book', { tripId: tripId, seatNos: selectedSeats })
        .then((response) => {
          console.log(response.data);
          alert('Booking successful!');
          setShowPayment(false);
          updateTripData();
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error('Error fetching trip data:', error);
    }
  }

  function updateStatus() {
    try {
      const selectedSeats = Object.entries(seatStatus)
        .filter(([, status]) => status === 1)
        .map(([seat]) => seat);
  
      api
        .post('/updateSeat', { tripId: tripId, seatNos: selectedSeats })
        .then((response) => {
          console.log(response.data);
          updateTripData();
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error('Error fetching trip data:', error);
    }
  }

  if (!tripData) {
    return <div>Loading...</div>;
  }

  const { from, to, departureTime, price, duration, seats } = tripData;

  return (
    <div>
      <div className="flex flex-col md:flex-row h-auto md:h-screen select-none">

        <div className="bg-[#383838] md:flex md:flex-col md:gap-y-4 md:items-center w-full md:pt-2 md:w-[60vw]  ">
          <div className="pt-2 ">
            <NavigationMenu >
              <div className="flex w-screen flex-row justify-center">
                <div style={rectStyle} className="flex w-[57vw] flex-row items-center justify-between">
                  <NavigationMenuList>
                    <NavigationMenuItem className="ml-8">
                      <NavigationMenuLink className="NavigationMenuLink text-white text-2xl font-bold" href="/">
                        Bos
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                  <NavigationMenuList className="gap-x-[16px]">

                    <NavigationMenuItem>
                      <NavigationMenuLink className="NavigationMenuLink" href="/dashboard">
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
                      <NavigationMenuLink className="NavigationMenuLink" href="/auth">
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
<div className="px-6 flex flex-wrap w-[70%] text-white justify-between">
        <div className="flex flex-col items-start mb-2">
          <span className="font-medium">Bus Number: {tripData.busId}</span>
          <span className="font-medium">Seat price: {price}</span>
        </div>
        <div className="flex flex-col items-start mb-2">
          <span className="font-medium">Time: {new Date(departureTime).toLocaleTimeString()}</span>
          <span className="font-medium">Date: {new Date(departureTime).toLocaleDateString()}</span>
        </div>
        <div className="flex flex-col items-start mb-2">
          <span className="font-medium">Duration: {duration} hours</span>
        </div>
      </div>
<div>

</div>

          </div>
          { !showPayment ? <div className=' w-[95%] h-auto min-h-[200px]'>
          <div className="w-[95%] h-auto min-h-[200px]  bg-white bg-opacity-10 rounded-[32px] shadow shadow-inner border-2 border-white border-opacity-20 backdrop-blur-[143.12px]">

     <div className="w-full  h-[60px] flex flex-row gap-x-2 pl-3 items-center  bg-grey-100 bg-opacity-10 rounded-t-[32px] shadow  border-b-2 border-white border-opacity-20 backdrop-blur-[143.12px]">
     <div className="h-6 w-6 rounded-md border-2 border-[#35C759] bg-[#35C759] bg-opacity-50"></div>
     <><p className="text-white text-l font-bold">Selected Seats</p></>
      </div>     
      <div className="flex flex-row     p-3 gap-x-2 items-center overflow-x-scroll">
      {Object.keys(seatStatus).map(seat => {
      if (seatStatus[seat] === 1) {
        return (
          <div key={seat} className="w-[50px] my-1 h-[100px] flex-shrink-0 bg-white bg-opacity-5 rounded-[32px] shadow shadow-inner border-2 border-white border-opacity-5 backdrop-blur-[143.12px] flex items-center justify-center text-white text-xl font-black">
            {seat}
          </div>
        );
      } else {
        return null;
      }
    })}
      
     
      </div>

</div>

<p className='text-white font-bold text-lg'>Total price: {totalPrice}</p>

<Button onClick={()=>{setShowPayment(true)}} className='bg-white-200 px-9 py-2 hover:bg-white-300'>Book</Button> </div>: <PaymentQuestion handleBook={handleBook} setShowPayment={setShowPayment} />}
        </div>
        <div className="bg-white-200 md:min-w-[550px] md:w-[40vw] md:flex md:flex-row md:justify-center  pt-[80px]">
        <Busone className="h-full" seatStatus={seatStatus} setSeatstatus={setSeatstatus} />
          </div>
      </div></div>
  );
}

const PaymentQuestion = ({handleBook,setShowPayment}) => {
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePaymentStatusChange = (event) => {
    setPaymentStatus(event.target.value);
  };

  const handleSubmit = () => {
    if (paymentStatus === 'paid') {
      handleBook()
    } else {
      setShowPayment(false)
      console.log('You have not paid yet.');
    }
  };

  const Payment = () => {
    // Your payment logic here
    console.log('Payment successful!');

    return (
      <div>
        <p>Thank you for your payment!</p>
      </div>
    );
  };

  return (
    <div className='flex flex-col bg-white-200 p-7 rounded-md  text-white gap-4 border-2 border-white-300'>
      <h2>Have you paid?</h2>
      <div className='flex flex-row gap-x-7'>
        <label>
          <input
            type="radio"
            value="paid"
            checked={paymentStatus === 'paid'}
            onChange={handlePaymentStatusChange}
          />
          Paid
        </label>
        <label>
          <input
            type="radio"
            value="not_paid"
            checked={paymentStatus === 'not_paid'}
            onChange={handlePaymentStatusChange}
          />
          Not Paid
        </label>
      </div>
      <Button className='bg-white-100 px-9 rounded-md py-2 hover:bg-white-300' onClick={handleSubmit}>Submit</Button>
    </div>
  );
};