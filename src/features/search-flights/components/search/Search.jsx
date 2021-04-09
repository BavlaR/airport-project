import React from 'react';
import { PropTypes } from 'prop-types';
import './search.scss';
import SearchSingle from '../search-single/SearchSingle';
import SearchTotal from '../search-total/SearchTotal';

const Search = p => {
   const { getDepart } = p;
   return (
      <>
         <SearchSingle val={p.val} changeVal={p.changeVal} getDepart={getDepart} />
         <SearchTotal
            getDepart={getDepart}
            getArrive={p.getArrive}
            isDepart={p.isDepart}
            isArrive={p.isArrive}
         />
      </>
   );
};

export default Search;

Search.propTypes = {
   getDepart: PropTypes.func.isRequired,
   getArrive: PropTypes.func.isRequired,
   isDepart: PropTypes.bool.isRequired,
   isArrive: PropTypes.bool.isRequired,
   val: PropTypes.string.isRequired,
   changeVal: PropTypes.func.isRequired,
};
