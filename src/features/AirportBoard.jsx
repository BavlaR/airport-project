import React from 'react';
import { connect } from 'react-redux';
import wing from '../img/wing.jpg';
import './airportBoard.scss';
import {
   getDepartData,
   getArriveData,
   changeVal,
   // getDepartSingle,
} from './search-flights/flights.actions';
// {
//    flightsSelector,
//    flightSelector,
//    dateSelector,
//    valSelector,
//    isDepartSelector,
//    isArriveSelector
// }
import * as selectors from './search-flights/flights.selectors';
import Search from './search-flights/components/search/Search';
import FlightsDetails from './flights/components/flights-details/FlightsDetails';
import SearchDate from './search-flights/components/search-date/SearchDate';
// import getFlights from './gateway/flightsGateway';

const AirportBoard = p => {
   // getFlights().then(data => console.log(data));

   const { flights } = p;
   console.log(flights);
   console.log(p.val);
   return (
      <main className="airport-board-container" style={{ background: `url(${wing})` }}>
         <h1 className="title">SEARCH FLIGHT</h1>
         <Search
            getDepart={p.getDepartData}
            getArrive={p.getArriveData}
            isDepart={p.isDepart}
            isArrive={p.isArrive}
            val={p.val}
            changeVal={p.changeVal}
         />
         {p.dateIsShown && <SearchDate />}
         {flights && <FlightsDetails flights={p.val ? p.flight : flights} />}
      </main>
   );
};

const mapState = state => ({
   flights: selectors.flightsSelector(state),
   flight: selectors.flightSelector(state),
   dateIsShown: selectors.dateSelector(state),
   val: selectors.valSelector(state),
   isDepart: selectors.isDepartSelector(state),
   isArrive: selectors.isArriveSelector(state),
});

const mapDispatch = {
   getDepartData,
   getArriveData,
   changeVal,
};

export default connect(mapState, mapDispatch)(AirportBoard);
