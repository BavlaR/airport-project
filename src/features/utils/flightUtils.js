export const flightStatus = ['Landed', 'In flight', 'Departed at', 'Check-in', 'On time'];
export const flightStatusMark = ['LN', 'FR', 'DP', 'CK', 'ON'];

export const getFlightStatus = (mark, statusArr, markArr) => statusArr[markArr.indexOf(mark)];
