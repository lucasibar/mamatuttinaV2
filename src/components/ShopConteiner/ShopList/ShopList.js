import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

 

import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getDiary} from '../../../redux/actions'


function ShopList({listItems}) {
    let dispatch = useDispatch() 

    useEffect(()=>{
        dispatch(getDiary())
    },[dispatch])

    const diariAllDays = useSelector((state) => state.diary);
    let [finalList, setFinalList]=useState([])

    useEffect(()=>{
        let itemsFilter = diariAllDays?.map(day=>{
            let items = day.ingredients_products
            return items
        })
        
        setFinalList(itemsFilter.flat())
    },[diariAllDays])
    




  return (
    <div>



        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {listItems?.map((item, index) => (
                <ListItem 
                    key={index} 
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                        </IconButton>
                    }>

                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={`${item.name}`} secondary={`${item.cuantity} ${item.unit} `} />
                </ListItem>

            ))}
        </List>


       
      

    </div>  

)
}

export default ShopList;