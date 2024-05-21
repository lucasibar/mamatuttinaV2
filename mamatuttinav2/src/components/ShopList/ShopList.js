import * as React from 'react';
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import {getDiary} from '../../redux/actions'


function ShopList(props) {
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
        <h1 >QUE ONDA BATO!!</h1>
                <Link to = '/'>
                <span >
                DIARIO
                </span>
                </Link> 



        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {finalList?.map((item, index) => (
            <ListItem
                key={index}
                disableGutters
                secondaryAction={
                <IconButton aria-label="comment">
                    <h6>
                    {`${item.unit}, ${item.cuantity}`}  
                    </h6>
                    <CommentIcon />
                </IconButton>
                }
            >
                <ListItemText primary={`${index}, ${item.name}`} />
            </ListItem>
            ))}
        </List>
    </div>  

)
}

export default ShopList;