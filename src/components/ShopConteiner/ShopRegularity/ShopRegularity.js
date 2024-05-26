import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import {Link} from 'react-router-dom'

import { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import {addNewItem} from '../../../redux/actions'
import ShopList from './ShopList/ShopList';

export default function ShopRegularity({listItems, regularity}) {

  return (
    <div>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
        {`Compra ${regularity}`}
        </AccordionSummary>

        <AccordionDetails>
            <ShopList listItems= {listItems}/>          
        </AccordionDetails>
       
        <AccordionActions>
          <Button >LIMPIAR</Button>
          <Button >AGREGAR</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}