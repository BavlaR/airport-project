import React from 'react';
import { connect } from 'react-redux';
import wing from '../img/wing.jpg';
import './airportBoard.scss';
import { getDepartData, getArriveData, changeVal } from './search-flights/flights.actions';
import {
   flightsSelector,
   dateSelector,
   valSelector,
   flightSelector,
} from './search-flights/flights.selectors';
import Search from './search-flights/components/search/Search';
import FlightsDetails from './flights/components/flights-details/FlightsDetails';
import SearchDate from './search-flights/components/search-date/SearchDate';
// import getFlights from './gateway/flightsGateway';

const AirportBoard = p => {
   // getFlights().then(data => console.log(data));

   const { flights } = p;
   console.log(flights);
   console.log(p.flight);
   console.log(p.val);
   return (
      <main className="airport-board-container" style={{ background: `url(${wing})` }}>
         <h1 className="title">SEARCH FLIGHT</h1>
         <Search
            getDepart={p.getDepartData}
            getArrive={p.getArriveData}
            val={p.val}
            changeVal={p.changeVal}
         />
         {p.dateIsShown && <SearchDate />}
         {flights && <FlightsDetails flights={p.val ? p.flight : flights} />}
      </main>
   );
};

const mapState = state => ({
   flights: flightsSelector(state),
   flight: flightSelector(state),
   dateIsShown: dateSelector(state),
   val: valSelector(state),
});

const mapDispatch = {
   getDepartData,
   getArriveData,
   changeVal,
};

export default connect(mapState, mapDispatch)(AirportBoard);
