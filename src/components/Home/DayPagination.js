import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {dayBefore, dayAfter, getDiary} from '../../redux/actions'

function DayPagination() {
   let dispatch = useDispatch()
   const dayNumber = useSelector((state) => state.day.number);

   const  dayBeforeButton = function(){
      dispatch(dayBefore(dayNumber))
   }
      const  dayAfterBotton = function(){
      dispatch(dayAfter(dayNumber))
   }

   return (
      <div className='dayChange'>
        <button className='changeDayBotton' onClick={dayBeforeButton}>{'<'}</button>
        <p className='titleDay'>{dayNumber}</p>
        <button className='changeDayBotton' onClick={dayAfterBotton}>{'>'}</button>
      </div>
   )
}

export default DayPagination;
