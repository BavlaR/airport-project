import React from 'react';
import { PropTypes } from 'prop-types';
import './flight.scss';

const Flight = p => {
   const { term } = p;
   return (
      <tr className="single-flight">
         <td className="single-flight__terminal">
            <div className={`letter ${term === 'D' ? 'letter-blue' : ''}`}>{term}</div>
         </td>
         <td>{p.timeSchedule}</td>
         <td>{p.dest}</td>
         <td>
            {p.status} {p.timeFact}
         </td>
         <td className="single-flight__airline">
            <img src={p.logo} alt="logo" height="30px" width="50px" />
            <span>{p.airline}</span>
         </td>
         <td>{p.airlineNum}</td>
         <td></td>
      </tr>
   );
};

export default Flight;

Flight.propTypes = {
   term: PropTypes.string.isRequired,
   timeSchedule: PropTypes.string.isRequired,
   dest: PropTypes.string.isRequired,
   status: PropTypes.string.isRequired,
   timeFact: PropTypes.string.isRequired,
   logo: PropTypes.string.isRequired,
   airlineNum: PropTypes.string.isRequired,
};
