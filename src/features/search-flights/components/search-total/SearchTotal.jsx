import React from 'react';
import './searchTotal.scss';

export default p => (
   <section className="search-total">
      <button className="search-total__btn search-total__btn-dep" onClick={p.getDepart}>
         <span className="plane-icon">
            <i className="fas fa-plane-departure"></i>
         </span>
         DEPARTURES
      </button>
      <button className="search-total__btn search-total__btn-arr" onClick={p.getArrive}>
         <span className="plane-icon">
            <i className="fas fa-plane-arrival"></i>
         </span>
         ARRIVALS
      </button>
   </section>
);
