import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {dayBefore, dayAfter, getDiary} from '../../../redux/actions'
import './DayPagination.css'

function DayPagination() {
   let dispatch = useDispatch()
   const dayNumber = useSelector((state) => state.day.number);
   const dayMaxNumber = useSelector((state) => state.dayMaxNumber);

   const  dayBeforeButton = function(){
      dispatch(dayBefore(dayNumber))
   }
      const  dayAfterBotton = function(){
      dispatch(dayAfter(dayNumber))
   }

   return (
       <div className='dayhandlerconteiner'>
      <div className='dayChange'>


        <button className='changeDayBotton' disabled={dayNumber===1? true: false} onClick={dayBeforeButton}>{'<'}</button>
        <p className='titleDay'>{dayNumber}</p>
        <button className='changeDayBotton' disabled={dayNumber===dayMaxNumber? true: false} onClick={dayAfterBotton}>{'>'}</button>
      </div>
       </div>
 
   )
}

export default DayPagination;
