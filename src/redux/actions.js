import axios from 'axios'
export const GET_DAY= "GET_DAY" 
export const GET_DIARY= "GET_DIARY"
export const POST_NEW_ITEM= "POST_NEW_ITEM" 
export const PUT_DAYBEFORE= "PUT_DAYBEFORE" 
export const PUT_DAYAFTER= "PUT_DAYAFTER" 


//DAY CRUD
export const getDay = () => dispatch => {
  return dispatch({type: GET_DAY, payload: {
    number: 2,
    ingredients_products: [
        {
            name: "tomate",
            cuantity: 2,
            unit: "unidades",
            purchaseRegularity: "mensual"
        },
        {
            name: "tomate",
            cuantity: 0.5,
            unit: "kgs",
            purchaseRegularity: "mensual"
        }
    ] 
  } })
}

export const dayBefore =(dayNumber)=>dispatch => {
    return dispatch({type: PUT_DAYBEFORE, payload: dayNumber })

}
export const dayAfter =(dayNumber)=>dispatch => {
    return dispatch({type: PUT_DAYAFTER, payload: dayNumber })

}
//SHOPLIST CRUD
export const getDiary = () => dispatch => {
 return dispatch({type: GET_DIARY, payload: 
    [
        {
            number: 1,
            ingredients_products:[
              {
                  name: "porcion de pizza",
                  cuantity: 2,
                  unit: "unidades",
                  purchaseRegularity: "mensual"
              },
              {
                  name: "fideos",
                  cuantity: 1,
                  unit: "porcion",
                  purchaseRegularity: "quincenal"
              } 
            ] 
        },
        {
            number: 2,
            ingredients_products:[
              {
                  name: "tomate",
                  cuantity: 2,
                  unit: "unidades",
                  purchaseRegularity: "mensual"
              },
              {
                  name: "tomate",
                  cuantity: 0.5,
                  unit: "kgs",
                  purchaseRegularity: "mensual"
              }
            ] 
        }
        ,{
            number: 3,
            ingredients_products:[
                {
                    name: "porcion de pizza",
                    cuantity: 2,
                    unit: "unidades",
                    purchaseRegularity: "semana 1"
                },
                {
                    name: "fideos",
                    cuantity: 1,
                    unit: "porcion",
                    purchaseRegularity: "mensual"
                }
            ] 
        },      {
          number: 4,
          ingredients_products:[
              {
                  name: "tomate",
                  cuantity: 2,
                  unit: "unidades",
                  purchaseRegularity: "mensual"
              },
              {
                  name: "tomate",
                  cuantity: 1,
                  unit: "kgs",
                  purchaseRegularity: "mensual"
              }
          ] 
      },     {
        number: 5,
        ingredients_products:[
          {
              name: "tacos",
              cuantity: 5,
              unit: "porciones",
              purchaseRegularity: "quincenal"
          },
          {
              name: "fideos",
              cuantity: 1,
              unit: "porcion",
              purchaseRegularity: "mensual"
          } 
        ] 
    },
    {
        number: 6,
        ingredients_products:[
          {
              name: "tomate",
              cuantity: 2,
              unit: "unidades",
              purchaseRegularity: "mensual"
          },
          {
              name: "tomate",
              cuantity: 0.5,
              unit: "kgs",
              purchaseRegularity: "mensual"
          }
        ] 
    }
    ,{
        number: 7,
        ingredients_products:[
            {
                name: "porcion de pizza",
                cuantity: 2,
                unit: "unidades",
                purchaseRegularity: "mensual"
            },
            {
                name: "fideos",
                cuantity: 1,
                unit: "porcion",
                purchaseRegularity: "mensual"
            }
        ] 
    },      {
        number: 8,
        ingredients_products:[
            {
                name: "tomate",
                cuantity: 2,
                unit: "unidades",
                purchaseRegularity: "mensual"
            },
            {
                name: "tomate",
                cuantity: 1,
                unit: "kgs",
                purchaseRegularity: "mensual"
            }
        ] 
    },
    {
        number: 9,
        ingredients_products:[
            {
                name: "tomate",
                cuantity: 2,
                unit: "unidades",
                purchaseRegularity: "mensual"
            },
            {
                name: "tomate",
                cuantity: 1,
                unit: "kgs",
                purchaseRegularity: "mensual"
            }
        ] 
    },
    {
        number: 10,
        ingredients_products:[
            {
                name: "tomate",
                cuantity: 2,
                unit: "unidades",
                purchaseRegularity: "mensual"
            },
            {
                name: "tomate",
                cuantity: 1,
                unit: "kgs",
                purchaseRegularity: "mensual"
            }
        ] 
    },
    {
        number: 11,
        ingredients_products:[
            {
                name: "tomate",
                cuantity: 2,
                unit: "unidades",
                purchaseRegularity: "mensual"
            },
            {
                name: "tomate",
                cuantity: 1,
                unit: "kgs",
                purchaseRegularity: "mensual"
            }
        ] 
    },
    {
        number: 12,
        ingredients_products:[
            {
                name: "tomate",
                cuantity: 2,
                unit: "unidades",
                purchaseRegularity: "mensual"
            },
            {
                name: "tomate",
                cuantity: 1,
                unit: "kgs",
                purchaseRegularity: "mensual"
            }
        ] 
    },
    {
        number: 13,
        ingredients_products:[

        ] 
    },
    {
        number: 14,
        ingredients_products:[
            {
                name: "tomate",
                cuantity: 2,
                unit: "unidades",
                purchaseRegularity: "mensual"
            },
            {
                name: "tomate",
                cuantity: 1,
                unit: "kgs",
                purchaseRegularity: "mensual"
            }
        ] 
    },
    {
        number: 15,
        ingredients_products:[
        ] 
    },
    {
        number: 16,
        ingredients_products:[
            {
                name: "tomate",
                cuantity: 2,
                unit: "unidades",
                purchaseRegularity: "mensual"
            },
            {
                name: "tomate",
                cuantity: 1,
                unit: "kgs",
                purchaseRegularity: "mensual"
            }
        ] 
    },
    
    ]
   })
}

export const addNewItem = (newItem) => dispatch => {
    return dispatch({type: POST_NEW_ITEM, payload: newItem})
}
 
