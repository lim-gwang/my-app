import React from 'react';
import { 
   IonButton
} from '@ionic/react'; 


//css 
import './Register.css';

function RegisterDevice({disabled}) {
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
               <option value=''>
                  장비
               </option>
               <option value='1'>
                  1
               </option>
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