import React from 'react';
import { PropTypes } from 'prop-types';
import './searchSingle.scss';

const SearchSingle = p => (
   <section className="search-form-container">
      <form className="search-form">
         <span className="search-form__icon">
            <i className="fas fa-search"></i>
         </span>
         <input
            type="text"
            className="search-form__input"
            value={p.val}
            onChange={p.changeVal}
            placeholder="Flight #"
         />
         <button
            type="submit"
            className="search-form__btn"
            onClick={e => {
               e.preventDefault();
               p.getDepart();
            }}
         >
            SEARCH
         </button>
      </form>
   </section>
);

export default SearchSingle;

SearchSingle.propTypes = {
   getDepart: PropTypes.func.isRequired,
   val: PropTypes.string.isRequired,
   changeVal: PropTypes.func.isRequired,
};
