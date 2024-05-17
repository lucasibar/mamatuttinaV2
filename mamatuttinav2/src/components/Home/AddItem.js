import * as React from 'react';
// import './AddItem.css'
import { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import {addNewItem} from '../../redux/actions'



function AddItem(props) {
    let dispatch = useDispatch()
    let initialSate ={
        name: "",
        unit:"",
        cuantity: 0
    } 
    let [item, setItem]=useState(initialSate)

// function validateUser(value) {
//     if(!/\S+@\S+\.\S+/.test(value)) {
//       setError('el usuario tiene que ser un email');
//     } else {
//       setError('');
//     }
//     setItemName(value);
//   }
  
    const handleChangeItem = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value,
        });
    };


const handleSubmit=(e)=>{
e.preventDefault()
dispatch(addNewItem(item))
setItem(initialSate)
}





return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        name="name" 
        value={item.name} 
        placeholder="Nombre" 
        onChange={handleChangeItem}/>
          
    <input 
        type="text" 
        name="unit" 
        value={item.unit} 
        placeholder="unidades" 
        onChange={ handleChangeItem }/>
    
    <input 
    type="text" 
    name="cuantity" 
    value={item.cuantity} 
    placeholder="{`${item.cuantity}`}" 
    onChange={handleChangeItem}/>

    <input 
    type="submit"
    // disabled = {!username || error? true : false}
     />
  </form>
)
}

export default AddItem;