import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import flightsReducer from './features/search-flights/flights.reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(flightsReducer, composeEnhancers(applyMiddleware(thunk)));
