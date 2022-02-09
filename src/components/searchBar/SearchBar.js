import React, { useState, useRef } from 'react';
import { IonInput, IonButton, IonLabel, IonToggle, IonCheckbox  } from '@ionic/react';
import { Calendar } from 'react-date-range';
import './SearchBar.css';
import 'react-date-range/dist/styles.css' ;
import 'react-date-range/dist/theme/default.css' ; 
function SearchBar() {

   const handleSelect = (date) => {
      console.log(date); // native Date object
    }

   return (
      <>
      <article className='register-header'>
         <form action='' >
            <div className='register-header__section01 dis-flex space-between'>
               <h3 className='register-header__title'>
                  검색조건 설정
               </h3>
               <button>
                  초기화
               </button>
            </div>
            <div className='register-header__section02 dis-flex space-between'>
               <div className='date-wrap dis-flex'>
                  <span>
                     접수일
                  </span>
                  <div className='date-range dis-flex'>
                     <span>
                        <IonInput
                           type='date'
                           value=''
                        />
                     </span>
                     <span className='input-area'>
                        ~
                     </span>
                     <span>
                        <IonInput
                           type='date'
                           value=''
                        />
                     </span>
                  </div>
                  <ul className='data-tab dis-flex'>
                     <li>
                        <input type='radio' id='to-day' name='data-tab' className='hidden' defaultChecked/>
                        <label htmlFor='to-day'>
                           오늘
                        </label>
                     </li>
                     <li>
                        <input type='radio' id='1-month' name='data-tab' className='hidden'/>
                        <label htmlFor='1-month'>
                           1개월
                        </label>
                     </li>
                     <li>
                        <input type='radio' id='3-month' name='data-tab' className='hidden'/>
                        <label htmlFor='3-month'>
                           3개월
                        </label>
                     </li>
                     <li>
                        <input type='radio' id='6-month' name='data-tab' className='hidden'/>
                        <label htmlFor='6-month'>
                           6개월
                        </label>
                     </li>
                     <li>
                        <input type='radio' id='9-month' name='data-tab' className='hidden'/>
                        <label htmlFor='9-month'>
                           9개월
                        </label>
                     </li>
                  </ul>
               </div>
               <IonButton class='ion-color-search' color='ion-color-search'>
                  검색
               </IonButton>
            </div>            
         </form>
      </article>
      </>
   )
}

export default SearchBar;