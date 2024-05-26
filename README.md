
















<!-- 
  
  const initialState = {
    actualDay:{
          day: "Dia 1",
          almuerzo:{
              ingredients:[
{
name: "fideos con salsa blanca",
cuantity: 1,
portion: {
    isaPortion: false,
    portionsPerUnit: 8, //null
    ingredients:[
        {
            name,
            cuantity,
            portion,
            untis,
            ingredients
        }

    ]
},
units: "portion",
// grsUnits: 350,
ingredients:[
        {
            name: "fideos",
            cuantity: 1,
            unit: "portion",
            ingredients:[]
        },
        {
            name: "rouxe",
            cuantity: 1,
            unit: "cucharada",
            ingredients:[
                {
                    name: "manteca",
                    cuantity: 10,
                    unit: "grs",
                    ingredients:[]
                },
                {
                    name: "harina" ,
                    cuantity: 50,
                    unti: "grs",
                    ingredients:[]
                }
            ]
        }
    ]
}
                  ]
  
          }
  
      },
    // days:[
    //   {
    //     day: "Dia 1",
    //       almuerzo:{
    //           ingredients:[
    //               {
    //                   name: "fideos con salsa blanca",
    //                   cuantity: 1,
    //                   units: "portion",
    //                   ingredients:[
    //                       {
    //                           name: "fideos",
    //                           cuantity: 1,
    //                           unit: "portion",
    //                           ingredients:[]
    //                       },
    //                       {
    //                           name: "rouxe",
    //                           cuantity: 1,
    //                           unit: "cucharada",
    //                           ingredients:[
    //                               {
    //                                   name: "manteca",
    //                                   cuantity: 10,
    //                                   unit: "grs",
    //                                   ingredients:[]
    //                               },
    //                               {
    //                                   name: harina ,
    //                                   cuantity: 50,
    //                                   unti: grs,
    //                                   ingredients:[]
    //                               }
    //                           ]
    //                       }
    //                   ]
    //               }
    //               ]

    //       }
    //   },
    //   {
    //     day: "Dia 2",
    //       cena:{
    //           ingredients:[
    //               {
    //                   name: "tomate",
    //                   cuantity: 1,
    //                   units: portion,
    //                   ingredients:[]
                          
    //               }
    //               ]

    //       }
    //   }
    // ]
  };

  const rootReducer = (state = initialState, action) => {
    switch(action.type) {
    case GET_DAYS:
      return {
        ...state,
        day: action.payload
    }


  default: return state
  };
  };

  export default rootReducer;
 -->
