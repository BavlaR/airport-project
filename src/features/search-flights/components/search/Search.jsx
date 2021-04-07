import React from 'react';
import './search.scss';
import SearchSingle from '../search-single/SearchSingle';
import SearchTotal from '../search-total/SearchTotal';

export default p => (
   <>
      <SearchSingle val={p.val} changeVal={p.changeVal} getDepart={p.getDepart} />
      <SearchTotal getDepart={p.getDepart} getArrive={p.getArrive} />
   </>
);
