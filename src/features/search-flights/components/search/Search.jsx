import React from 'react';
import './search.scss';
import SearchSingle from '../search-single/SearchSingle';
import SearchTotal from '../search-total/SearchTotal';

export default p => {
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
