import {
    GET_DAY,
    GET_DIARY,
    POST_NEW_ITEM

  } from './actions'


  


  
const initialState = { day: {}, diary:[]}

  const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DAY:
            return {
              ...state,
              day: action.payload
            }
        case GET_DIARY:
          return {
              ...state,
              diary: action.payload
        }
        case POST_NEW_ITEM:
          
          return {
            ...state,
            day: {
              ...state.day,
              ingredients_products:[
                ...state.day.ingredients_products,
                action.payload
              ]
            }
            
          }
          


        default: return state
  };
  };

  export default rootReducer;

