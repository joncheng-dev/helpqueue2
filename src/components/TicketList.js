import React from "react";
import Ticket from "./Ticket";

const tempTicketList = [
  {
    location: "1999",
    names: "Homer and Marge",
    issue: "Internet Explorer froze!",
  },
  {
    location: "1998",
    names: "Joe and Barney",
    issue: "Need more beer.",
  },
  {
    location: "Springfield, PA",
    names: "Mr. Burns and Smithers",
    issue: "Nuclear meltdown",
  },
];

function TicketList() {
  return (
    <React.Fragment>
      {tempTicketList.map((ticket, index) => (
        <Ticket location={ticket.location} names={ticket.names} issue={ticket.issue} key={index} />
      ))}
    </React.Fragment>
  );
}

export default TicketList;
