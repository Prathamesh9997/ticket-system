import React from "react";
import Ticket from "./Ticket";
import { useState, useEffect } from "react";

function Tickets() {
  let url = "https://6065c6c1b8fbbd00175675a3.mockapi.io/tickets";
  const [ticketsData, setTicketsData] = useState([]);

  //fetch ticket data
  const getTicketData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTicketsData(data);
  };
  useEffect(() => {
    getTicketData();
  }, []);
  const saveUpdatedTicketData = async (newObj) => {
    const resp = await fetch(url + "/" + newObj.id, {
      method: "PUT",
      body: JSON.stringify(newObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await resp.json();
    getTicketData();
  };
  return (
    <div className="tickets p-2">
      {ticketsData.map((ticket) => {
        return (
          <Ticket
            key={ticket.id}
            ticket={ticket}
            saveUpdatedTicketData={saveUpdatedTicketData}
          ></Ticket>
        );
      })}
    </div>
  );
}

export default Tickets;
