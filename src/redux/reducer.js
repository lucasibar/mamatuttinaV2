import {
    GET_DAY,
    GET_DIARY,
    POST_NEW_ITEM,
    PUT_DAYBEFORE,
    PUT_DAYAFTER

  } from './actions'


  


  
const initialState = { day: {}, diary:[], dayMaxNumber:16}

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
        case PUT_DAYBEFORE:
        let dayNumber = action.payload
        let beforeDay= state.diary.filter(d=> d.number=== dayNumber-1 )
        let dayBefore = beforeDay[0]

        return{         
            ...state,
           day: dayBefore
        }
        case PUT_DAYAFTER:
        let numberDay = action.payload
        let afterDay= state.diary.filter(d=> d.number=== numberDay+1 )
        let dayAfter = afterDay[0]
        return{         
            ...state,
           day: dayAfter
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

