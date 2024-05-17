import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function DayPagination() {
   const dayNumber = useSelector((state) => state.day.number);
   return (
      <div className='dayChange'>
        <button className='dayBeforeBotton'>{'<'}</button>
        <p className='titleDay'>{dayNumber}</p>
        <button className='dayAfterBotton'>{'>'}</button>
      </div>
   )
}

export default DayPagination;
