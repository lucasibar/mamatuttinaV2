import * as React from 'react';
import './Home.css'
import {useState, useEffect} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Link} from 'react-router-dom'
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import {getDay, getDiary} from '../../redux/actions'
import DayPagination from './DayPagination'
import AddItem from './AddItem'
import ShopList from '../ShopList/ShopList'


function Home(props) {
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
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {actualDay.ingredients_products?.map((list, index) => (
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
{!open?
<>

<button className='addButton' style={{visibitlity : "hidden"}} onClick={openInput}>{"(volver)"}</button>
<AddItem/>
</>
:
<h1 className='addButton' onClick={openInput}>Añadir alimento</h1>
}
<button>

        <Link to = '/listacompras'>
          <span >
          lista de compras
          </span>
        </Link> 
</button>
</div>  
)
}

export default Home;