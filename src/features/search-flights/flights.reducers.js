const initialState = {
   dateIsShown: false,
   val: '',
   depInfocus: false,
   arrInFocus: false,
};

export default (state = initialState, action) => {
   switch (action.type) {
      case 'flights/SHOW_DEPART':
         return {
            ...state,
            flights: action.payload.depDataToShow,
            dateIsShown: action.payload.dateIsShown,
         };
      case 'flights/SHOW_ARRIVE':
         return {
            ...state,
            flights: action.payload.arrDataToShow,
            dateIsShown: action.payload.dateIsShown,
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
