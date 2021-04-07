import React from 'react';
import './flightsList.scss';
import Flight from '../flight/Flight';

export default p => (
   <table className="flights-list">
      <thead>
         <tr className="flights-list__head">
            <th className="terminal">Terminal</th>
            <th className="time">Local time</th>
            <th className="dest">Destination</th>
            <th className="status">Status</th>
            <th className="airline">Airline</th>
            <th className="flight">Flight</th>
            <th className="detail"></th>
         </tr>
      </thead>
      <tbody>
         {p.flights.map(flight => (
            <Flight key={flight.id} {...flight} />
         ))}
      </tbody>
   </table>
);
