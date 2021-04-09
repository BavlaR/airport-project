import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import wing from '../img/wing.jpg';
import './airportBoard.scss';
import { getDepartData, getArriveData, changeVal } from './search-flights/flights.actions';
import * as selectors from './search-flights/flights.selectors';
import Search from './search-flights/components/search/Search';
import FlightsDetails from './flights/components/flights-details/FlightsDetails';

const AirportBoard = p => {
   const { flights } = p;
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
         {flights && <FlightsDetails flights={p.val ? p.flight : flights} date={p.dateIsShown} />}
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

AirportBoard.propTypes = {
   flights: PropTypes.oneOfType([
      PropTypes.bool.isRequired,
      PropTypes.arrayOf(PropTypes.object).isRequired,
   ]),
   flight: PropTypes.oneOfType([
      PropTypes.bool.isRequired,
      PropTypes.arrayOf(PropTypes.object).isRequired,
   ]),
   dateIsShown: PropTypes.bool.isRequired,
   val: PropTypes.string.isRequired,
   isDepart: PropTypes.bool.isRequired,
   isArrive: PropTypes.bool.isRequired,
   getDepartData: PropTypes.func.isRequired,
   getArriveData: PropTypes.func.isRequired,
   changeVal: PropTypes.func.isRequired,
};
