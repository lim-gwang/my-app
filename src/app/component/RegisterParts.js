import React from 'react';
import { 
   IonButton,
   IonIcon 
} from '@ionic/react'; 

// ionicon
import { 
   removeOutline, 
   chevronUpOutline, 
   addOutline 
} from 'ionicons/icons';
import { useSelector, useDispatch } from 'react-redux';

//css 
import './Register.css';

// action
import { getDevice} from '../../store/registeCategory/registeCategory';

function RegisterParts({disabled}) {
   return(
      <>
         <section className='form-section'>
            <article className='summary-length-form'>
               Summary <span>2 Items</span>
            </article>
            <article className='parts-form'>
               <button>
                  <strong>
                     Item No.<span>1</span>
                  </strong>
                  <div>
                     <IonButton 
                        class='ion-color-remove-item'
                        color='ion-color-remove-item'
                     >
                        <IonIcon icon={removeOutline}/>
                     </IonButton>
                     <span className='toggle-area'>
                        <IonIcon icon={chevronUpOutline}/>
                     </span>
                  </div>
               </button>
               <div className='parts-body'>
                  <div className="custom-forms">
                     <label htmlFor="parts">
                        부품<span>*</span>
                     </label>
                     <select id="device" disabled={disabled}>
                        <option value="">부품</option>
                        <option value="1">1</option>
                     </select>
                  </div>
                  <div className="custom-forms">
                     <label htmlFor="parts">
                        부품시리얼번호
                     </label>
                     <input type='text' disabled={disabled} placeholder='부품시리얼번호'/>
                  </div>
               <div className="custom-forms">
                     <label htmlFor="parts">
                        증상<span>*</span>
                     </label>
                     <select id="device" disabled={disabled}>
                        <option value="">증상</option>
                        <option value="1">1</option>
                     </select>
                  </div>
                  <div className="custom-forms">
                     <label htmlFor="parts">
                        배송
                     </label>
                     <select id="device" disabled={disabled}>
                        <option value="">아니오/1:1교환/...</option>
                        <option value="1">1</option>
                     </select>
                  </div>
                  <div className="custom-forms">
                     <label htmlFor="parts">
                        배송방법<span>*</span>
                     </label>
                     <select id="device" disabled={disabled}>
                        <option value="">배송방법</option>
                        <option value="1">1</option>
                     </select>
                  </div>
                  <div className="custom-forms">
                     <label htmlFor="parts">
                        배송방법<span>*</span>
                     </label>
                     <input type='text' disabled={disabled} placeholder='운송장번호'/>
                  </div>
                  <div className="custom-forms">
                     <label htmlFor="parts">
                        요청사항<span>*</span>
                     </label>
                     <textarea disabled={disabled} placeholder='요청사항을 입력하세요'/>
                  </div>
               </div>
            </article>
         </section>
         
      </>
   )
}

export default RegisterParts;