import ticketListReducer from "../../reducers/ticket-list-reducer";

describe("ticketListReducer", () => {
  let action;
  const currentState = {
    1: {
      names: "Homer and Bart",
      location: "Moe's Tavern",
      issue: "Out of Duff",
      id: 1,
    },
    2: {
      names: "Marge and Lisa",
      location: "Springfield Elementary",
      issue: "missing chess club books",
      id: 2,
    },
  };

  const ticketData = {
    names: "Homer and Bart",
    location: "Moe's Tavern",
    issue: "Out of Duff",
    id: 1,
  };

  test("Should return default state if no action type passed into reducer", () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new ticket to mainTicketList", () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: "ADD_TICKET",
      names: names,
      location: location,
      issue: issue,
      id: id,
    };
    expect(ticketListReducer({}, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id,
      },
    });
  });

  test("Should successfully delete a ticket", () => {
    action = {
      type: "DELETE_TICKET",
      id: 1,
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {
        names: "Marge and Lisa",
        location: "Springfield Elementary",
        issue: "missing chess club books",
        id: 2,
      },
    });
  });
});
