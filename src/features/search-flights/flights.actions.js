import fetchFlights from '../gateway/flightsGateway';
import takeTime from '../utils/dateUtils';
import { flightStatus, flightStatusMark, getFlightStatus } from '../utils/flightUtils';

const showDepFlights = flights => {
   const depDataToShow = flights
      .filter(flight => takeTime(flight.timeDepShedule, 'DD') === takeTime(new Date(), 'DD'))
      .map(flight => {
         const { logoSmallName, name } = flight.codeShareData[0].airline.en;

         return {
            id: flight.ID,
            timeSchedule: takeTime(flight.timeDepShedule, 'HH:mm'),
            timeFact: flight.hasOwnProperty('timeTakeofFact')
               ? takeTime(flight.timeTakeofFact, 'HH:mm')
               : '',
            status: getFlightStatus(flight.status, flightStatus, flightStatusMark),
            term: flight.term,
            dest: flight['airportToID.name_en'],
            logo: logoSmallName,
            airline: name,
            airlineNum: (flight['carrierID.IATA'] || flight['carrierID.code']) + flight.fltNo,
         };
      });

   return {
      type: 'flights/SHOW_DEPART',
      payload: { depDataToShow, dateIsShown: true },
   };
};

const showArrFlights = flights => {
   const arrDataToShow = flights
      .filter(flight => takeTime(flight.timeToStand, 'DD') === takeTime(new Date(), 'DD'))
      .map(flight => {
         const { logoSmallName, name } = flight.codeShareData[0].airline.en;

         return {
            id: flight.ID,
            timeSchedule: takeTime(flight.timeToStand, 'HH:mm'),
            timeFact: flight.hasOwnProperty('timeLandFact')
               ? takeTime(flight.timeLandFact, 'HH:mm')
               : '',
            status: getFlightStatus(flight.status, flightStatus, flightStatusMark),
            term: flight.term,
            dest: flight['airportFromID.name_en'],
            logo: logoSmallName,
            airline: name,
            airlineNum: (flight['carrierID.IATA'] || flight['carrierID.code']) + flight.fltNo,
         };
      });

   return {
      type: 'flights/SHOW_ARRIVE',
      payload: { arrDataToShow, dateIsShown: true },
   };
};

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
