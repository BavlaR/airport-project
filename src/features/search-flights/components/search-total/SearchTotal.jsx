import React from 'react';
import { PropTypes } from 'prop-types';
import './searchTotal.scss';

const SearchTotal = p => (
   <section className="search-total">
      <button
         className={`${p.isDepart ? 'btn-focus' : ''} search-total__btn search-total__btn-dep`}
         onClick={p.getDepart}
      >
         <span className="plane-icon">
            <i className="fas fa-plane-departure"></i>
         </span>
         DEPARTURES
      </button>
      <button
         className={`${p.isArrive ? 'btn-focus' : ''} search-total__btn search-total__btn-arr`}
         onClick={p.getArrive}
      >
         <span className="plane-icon">
            <i className="fas fa-plane-arrival"></i>
         </span>
         ARRIVALS
      </button>
   </section>
);

export default SearchTotal;

SearchTotal.propTypes = {
   getDepart: PropTypes.func.isRequired,
   getArrive: PropTypes.func.isRequired,
   isDepart: PropTypes.bool.isRequired,
   isArrive: PropTypes.bool.isRequired,
};
