import Nav from "./nav.js";
import React, { useState, useEffect } from 'react';
import api from '../api'; // path to your api.js file

function Ticket({ ticket, onCancel }) {
  return (
    <div className="text-white p-4 h-24 m-2 border-2 rounded-md border-[#6f6f6f] bg-[#414141]">
      <p className="font-black text-lg">Seat: {ticket.seatNo}</p>
      <button onClick={() => onCancel(ticket.id)}>[x] Cancel</button>
    </div>
  );
}

export function Dashboard() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    api.get('/tickets')
      .then(response => {
        console.log(response.data);
        setTickets(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleCancel = (ticketId) => {
    api.post('/cancel', { id: ticketId })
      .then(response => {
        setTickets(tickets.filter(ticket => ticket.id !== ticketId));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="h-screen w-screen bg-[#212121]">
    <Nav />
    <div className="flex flex-wrap px-16 pt-4 gap-4">
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} onCancel={handleCancel} />
      ))}
    </div>
  </div>
  );
}
