import React from 'react';
import './flightsDetails.scss';
import FlightsList from '../flights-list/FlightsList';
import NoFlight from '../no-flight/NoFlight';

export default ({ flights }) => (
   <section className="flights-details">
      {flights.length > 0 ? <FlightsList flights={flights} /> : <NoFlight />}
   </section>
);
