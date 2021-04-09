import takeTime from './dateUtils';

const flightStatus = ['Landed', 'In flight', 'Departed at', 'Check-in', 'On time', 'Delayed'];
const flightStatusMark = ['LN', 'FR', 'DP', 'CK', 'ON', 'DL'];

const getFlightStatus = (mark, statusArray, markArray) => statusArray[markArray.indexOf(mark)];

const getLogoAndAirline = (status, flight) => ({
   logo: status !== 'DL' ? flight.codeShareData[0].airline.en.logoSmallName : '',
   airline: status !== 'DL' ? flight.codeShareData[0].airline.en.name : '',
});

export const getDepFlights = flights =>
   flights
      .filter(flight => takeTime(flight.timeDepShedule, 'DD') === takeTime(new Date(), 'DD'))
      .map(flight => {
         return {
            id: flight.ID,
            timeSchedule: takeTime(flight.timeDepShedule, 'HH:mm'),
            timeFact: flight.hasOwnProperty('timeTakeofFact')
               ? takeTime(flight.timeTakeofFact, 'HH:mm')
               : '',
            status: getFlightStatus(flight.status, flightStatus, flightStatusMark),
            term: flight.term,
            dest: flight['airportToID.name_en'],
            logo: getLogoAndAirline(flight.status, flight).logo,
            airline: getLogoAndAirline(flight.status, flight).airline,
            airlineNum: (flight['carrierID.IATA'] || flight['carrierID.code']) + flight.fltNo,
         };
      });

export const getArrFlights = flights =>
   flights
      .filter(flight => takeTime(flight.timeToStand, 'DD') === takeTime(new Date(), 'DD'))
      .map(flight => {
         return {
            id: flight.ID,
            timeSchedule: takeTime(flight.timeToStand, 'HH:mm'),
            timeFact: flight.hasOwnProperty('timeLandFact')
               ? takeTime(flight.timeLandFact, 'HH:mm')
               : '',
            status: getFlightStatus(flight.status, flightStatus, flightStatusMark),
            term: flight.term,
            dest: flight['airportFromID.name_en'],
            logo: getLogoAndAirline(flight.status, flight).logo,
            airline: getLogoAndAirline(flight.status, flight).airline,
            airlineNum: (flight['carrierID.IATA'] || flight['carrierID.code']) + flight.fltNo,
         };
      });
