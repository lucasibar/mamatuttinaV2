import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

import {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getDay, getDiary} from '../../redux/actions'
import DayPagination from './DayPagination/DayPagination'
import DayHandlers from './DayHandlers/DayHandlers'

import './Diary.css'



function Diary(props) {
  let dispatch = useDispatch() 
var numberDay= 2 //Este numero va a tener que venir de la cache donde se va a aguardar el ultimo que uso 
let [open, setOpen] = useState(false)
  useEffect(()=>{
    dispatch(getDay(numberDay))
    dispatch(getDiary())
  },[dispatch])

  const actualDay = useSelector((state) => state.day);


  function openInput(){
    setOpen(!open)
  }
 

  return (
    <div>
    <DayPagination />

    {/* <div className='handlers'>
            <NavLink to = '/listacompras'>
            <Button variant="text" style={{      
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center',
              marginLeft: '10px',
              }}
            >
            VER LISTA DE COMPRAS
            </Button>
            </NavLink>
    </div> */}
<DayHandlers />


    <br/>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {actualDay.ingredients_products?.map((list, index) => (
      <ListItem key={index} secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`${list.name}`} secondary={`${list.cuantity} ${list.unit} `} />
      </ListItem>
  ) ) }
        

  </List>
  
      <NavLink to = '/mamatuttinav2/listacompras'>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      />
            </NavLink>


</div>  
)
}

export default Diary;




