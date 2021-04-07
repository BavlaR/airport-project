import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AirportBoard from './features/AirportBoard';

export default () => (
   <Provider store={store}>
      <AirportBoard />
   </Provider>
);
