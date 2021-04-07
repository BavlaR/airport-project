import fetchFlights from '../gateway/flightsGateway';
import { getDepFlights, getArrFlights } from '../utils/flightUtils';

const showDepFlights = flights => ({
   type: 'flights/SHOW_DEPART',
   payload: {
      flights: getDepFlights(flights),
      dateIsShown: true,
      depInFocus: true,
      arrInFocus: false,
   },
});

const showArrFlights = flights => ({
   type: 'flights/SHOW_ARRIVE',
   payload: {
      flights: getArrFlights(flights),
      dateIsShown: true,
      depInFocus: false,
      arrInFocus: true,
   },
});

export const getDepartData = () => dispatch => {
   fetchFlights().then(flights => dispatch(showDepFlights(flights.body.departure)));
};

export const getArriveData = () => dispatch => {
   fetchFlights().then(flights => dispatch(showArrFlights(flights.body.arrival)));
};

export const changeVal = e => ({
   type: 'flights/CHANGE_VAL',
   payload: e.target.value,
});
