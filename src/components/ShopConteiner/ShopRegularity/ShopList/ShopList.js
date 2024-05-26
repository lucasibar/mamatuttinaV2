import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';





import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getDiary} from '../../../../redux/actions'


function ShopList({listItems}) {

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