import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {dayBefore1, getDiary} from '../../redux/actions'

function DayPagination() {
   let dispatch = useDispatch()
   const dayNumber = useSelector((state) => state.day.number);

   const  dayBeforeButton = function(){
      dispatch(dayBefore1(dayNumber))
   }

   return (
      <div className='dayChange'>
        <button className='dayBeforeBotton' onClick={dayBeforeButton}>{'<'}</button>
        <p className='titleDay'>{dayNumber}</p>
        <button className='dayAfterBotton'>{'>'}</button>
      </div>
   )
}

export default DayPagination;
