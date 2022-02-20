import React, { useState, useEffect } from 'react';
import { 
   IonButton
} from '@ionic/react'; 

import { useSelector, useDispatch } from 'react-redux';

// css 
import './Register.css';

// action
import { getDevice} from '../../store/registeCategory/registeCategory';


const deviceSelector = state => state.deviceReducer;

function RegisterDevice({disabled}) {
   const dispatch = useDispatch();
   const deviceList = useSelector(deviceSelector);
   const [ forms, setForms] = useState({

   });

   // 장비 목록
   const getDeviceList = deviceList.device.map((arg, index)=> {
      return (
         <option value={arg.CodeName} key={index}>
            {arg.CodeName}
         </option>
      )
   });


   
   
   return(
      <>
      <section className='form-section'>
      <article className='device-form'>
         <div className='custom-forms'>
            <label htmlFor='device'>
               Device Model 
               <span>*</span>
            </label>
            <select id='device' disabled={disabled}>
              {getDeviceList}
            </select>
         </div>
         <div className='custom-forms'>
            <label htmlFor='SerialNo'>
               Serial No.
               <span>*</span>
            </label>
            <input type='text' id='SerialNo' disabled={disabled} placeholder='장비시리얼번호'/>
         </div>
         <div className='custom-forms'>
            <label htmlFor='Customer'>
               Customer
               <span>*</span>
            </label>
            <input type='text' id='Customer' disabled={disabled} placeholder='실사용자명'/>
         </div>
         <div className='custom-forms'>
            <label htmlFor='Requirement'>
               Requirement
               <span>*</span>
            </label>
            <textarea id='Requirement' disabled={disabled} placeholder='접수내용'/>
         </div>
      </article>
      </section>
      
   </>
   )
}

export default RegisterDevice;