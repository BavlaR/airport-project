import React from 'react';
import './flight.scss';

export default p => (
   <tr className="single-flight">
      <td className="single-flight__terminal">
         <div className={`letter ${p.term === 'D' ? 'letter-blue' : ''}`}>{p.term}</div>
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
