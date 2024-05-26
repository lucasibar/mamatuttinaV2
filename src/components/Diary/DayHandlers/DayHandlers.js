import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';


import { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import {addNewItem} from '../../../redux/actions'

export default function DayHandlers() {

    let dispatch = useDispatch()
    let initialSate ={
        name: "",
        unit:"",
        cuantity: ""
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
const handleClean=(e)=>{
    e.preventDefault()
    setItem(initialSate)
    }
  
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
    <div>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         <Button>AGREGAR ITEM</Button>
        </AccordionSummary>

        <AccordionDetails>
            <form onSubmit={handleSubmit} className='addItemFormconteiner'>
                <Input 
                    type="text"
                    name="name" 
                    value={item.name} 
                    placeholder="Nombre" 
                    onChange={handleChangeItem}/>
                <Input 
                    type="text" 
                    name="unit" 
                    value={item.unit} 
                    placeholder="unidades" 
                    onChange={ handleChangeItem }/>
                <Input 
                    type="text" 
                    name="cuantity" 
                    value={item.cuantity} 
                    placeholder="cantidad" 
                    onChange={ handleChangeItem }/>
        

            </form>
          
        </AccordionDetails>
       
        <AccordionActions>
          <Button onClick={handleClean}>LIMPIAR</Button>
          <Button onClick={handleSubmit}>AGREGAR</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}