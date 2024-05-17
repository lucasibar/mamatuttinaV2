import * as React from 'react';
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import {getDay, getDiary} from '../../redux/actions'


function ShopList(props) {
    let dispatch = useDispatch() 
    const diariAllDays = useSelector((state) => state.diary);


    useEffect()
      
  return (
    <div>
        <h1 >QUE ONDA BATO!!</h1>
                <Link to = '/'>
                <span >
                DIARIO
                </span>
                </Link> 



        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {diariAllDays.ingredients_products?.map((list, index) => (
            <ListItem
                key={index}
                disableGutters
                secondaryAction={
                <IconButton aria-label="comment">
                    <h6>
                    {`${list.unit}, ${list.cuantity}`}  
                    </h6>
                    <CommentIcon />
                </IconButton>
                }
            >
                <ListItemText primary={`${index}, ${list.name}`} />
            </ListItem>
            ))}
        </List>
    </div>  

)
}

export default ShopList;