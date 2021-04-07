import takeTime from './dateUtils';

const flightStatus = ['Landed', 'In flight', 'Departed at', 'Check-in', 'On time'];
const flightStatusMark = ['LN', 'FR', 'DP', 'CK', 'ON'];
const getFlightStatus = (mark, statusArray, markArray) => statusArray[markArray.indexOf(mark)];

export const getDepFlights = flights =>
   flights
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

export const getArrFlights = flights =>
   flights
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
