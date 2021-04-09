import React from 'react';
import { PropTypes } from 'prop-types';
import './flightsDetails.scss';
import FlightsList from '../flights-list/FlightsList';
import NoFlight from '../no-flight/NoFlight';
import FlightsDate from '../flights-date/FlightsDate';

const FlightsDetails = p => {
   const { flights } = p;
   return (
      <section className="flights-details">
         {p.date && <FlightsDate />}
         {flights[0] ? <FlightsList flights={flights} /> : <NoFlight />}
      </section>
   );
};

export default FlightsDetails;

FlightsDetails.propTypes = {
   flights: PropTypes.arrayOf(PropTypes.object).isRequired,
   date: PropTypes.bool.isRequired,
};
