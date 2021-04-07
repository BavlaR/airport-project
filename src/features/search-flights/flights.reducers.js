const initialState = {
   dateIsShown: false,
   val: '',
   depInFocus: false,
   arrInFocus: false,
};

export default (state = initialState, action) => {
   switch (action.type) {
      case 'flights/SHOW_DEPART':
         return {
            ...state,
            flights: action.payload.flights,
            dateIsShown: action.payload.dateIsShown,
            depInFocus: action.payload.depInFocus,
            arrInFocus: action.payload.arrInFocus,
         };
      case 'flights/SHOW_ARRIVE':
         return {
            ...state,
            flights: action.payload.flights,
            dateIsShown: action.payload.dateIsShown,
            depInFocus: action.payload.depInFocus,
            arrInFocus: action.payload.arrInFocus,
         };
      case 'flights/CHANGE_VAL':
         return {
            ...state,
            val: action.payload,
         };
      default:
         return state;
   }
};
