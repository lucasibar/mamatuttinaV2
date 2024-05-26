import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import {Link} from 'react-router-dom'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { NavLink } from 'react-router-dom';

import { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import {getDiary } from '../../redux/actions'
import ShopRegularity from './ShopRegularity/ShopRegularity';
import {itemListAcumulator} from '../../utils/itemListGenerator'


export default function DayHandlers() {
  let dispatch = useDispatch() 

  useEffect(()=>{
      dispatch(getDiary())
  },[dispatch])

  const diariAllDays = useSelector((state) => state.diary);
  let [mensualList, setMensualList]=useState([])
  let [biweeklyList, setBiweeklyList]=useState([])
  let [week1List, setWeek1List]=useState([])
  let [week2List, setWeek2List]=useState([])


  useEffect(()=>{
      for(let i= 0; i<diariAllDays.length; i++){
        
        for(let j= 0; j<diariAllDays[i].ingredients_products.length; j++){
          if(diariAllDays[i].ingredients_products[j].purchaseRegularity == "quincenal"){
            setBiweeklyList(itemListAcumulator(biweeklyList, diariAllDays[i].ingredients_products[j]))
          }
          else if(diariAllDays[i].ingredients_products[j].purchaseRegularity == "semana 1"){
            setWeek1List(itemListAcumulator(week1List, diariAllDays[i].ingredients_products[j]))
          }
          else if(diariAllDays[i].purchaseRegularity == "semana 2"){
            setMensualList(itemListAcumulator(mensualList, diariAllDays[i]))
          }
          else{
            // diariAllDays[i].purchaseRegularity = "mensual"
            setMensualList(itemListAcumulator(mensualList, diariAllDays[i].ingredients_products[j]))
          }
        }
       
      }
  },[diariAllDays])



  return (
    <div>

<ShopRegularity listItems= {mensualList} regularity= "mensual"/>
<ShopRegularity listItems= {biweeklyList} regularity= "quincenale"/>
<ShopRegularity listItems= {week1List} regularity= "semana 1"/>
<ShopRegularity listItems= {week2List} regularity= "semana2"/>
     

     
<NavLink to = '/mamatuttinav2'>
<SpeedDial
  ariaLabel="SpeedDial basic example"
  sx={{ position: 'absolute', bottom: 16, right: 16 }}
  icon={<SpeedDialIcon />}
/>
</NavLink>

    </div>
  );
}