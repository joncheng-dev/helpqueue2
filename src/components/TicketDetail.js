import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props) {
  const { ticket } = props;

  return (
    <React.Fragment>
      <hr />
      <h1>Ticket Detail</h1>
      <h3>{ticket.location}</h3>
      <h3>{ticket.names}</h3>
      <p>
        <em>{ticket.issue}</em>
      </p>
      <hr />
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
};

export default TicketDetail;
