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

import {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getDay, getDiary} from '../../redux/actions'
import DayPagination from './DayPagination/DayPagination'
import DayHandlers from './DayHandlers/DayHandlers'

import './ItemsConteiner.css'



function ItemsConteiner(props) {
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

)
}

export default ItemsConteiner;




