import React from 'react';
import moment from 'moment';
import './flightsDate.scss';

export default () => (
   <div className="search-date">
      <div className="search-date__icon">
         <time className="date">{moment(new Date()).format('DD/MM')}</time>
         <div className="icon">
            <i className="far fa-calendar"></i>
         </div>
      </div>
      <span className="search-date-today">TODAY</span>
   </div>
);
