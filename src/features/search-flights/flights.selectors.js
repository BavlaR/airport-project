export const flightsSelector = state => state.hasOwnProperty('flights') && state.flights;

export const flightSelector = state =>
   state.hasOwnProperty('flights') && [
      state.flights.find(flight => flight.airlineNum === state.val),
   ];

export const dateSelector = state => state.dateIsShown;

export const valSelector = state => state.val.toUpperCase();
