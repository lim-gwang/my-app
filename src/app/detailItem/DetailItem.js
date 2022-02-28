import React, { useEffect, useState } from 'react';
import { 
   IonPage,
   IonContent,
   IonIcon,
} from '@ionic/react';  
// ionicon
import { 
   chevronUpOutline, 
} from 'ionicons/icons';

import { useSelector, shallowEqual } from 'react-redux';
// css
import './detailItem.css';

// action

//component 
import AppHeader from '../appHeader/AppHeader';


function DetailItem({title, match}) {
   const Match = match.params.pathName;
   const getTargetList = state => state.itemReducer.items;
   const targetList = useSelector(getTargetList, shallowEqual);
   const filterList = targetList.filter(arg => arg.Code === Match);
   const [ disabled, setDisabled ] = useState(true);
   const [ content, setContent ] = useState({});

   let addToggle;

   if(filterList[0]) {
      addToggle = filterList[0].Details.map(arg => {
         return {
            ...arg,
            toggle: false,
         }
      });
   } ;
   
   useEffect(()=> {
      setContent({
         ...filterList[0],
         Details: addToggle,
      });

   },[]);

   const onClickToggle = index => {
      const toggleTarget = content.Details.map((arg, id) => {
         if(id === index) {
            return {
               ...arg,
               toggle: !arg.toggle,
            }
         }
         return {
            ...arg,
         }
      });

      setContent({
         ...content,
         Details: toggleTarget,
      });
   };

   let partList;

   if(content.Details) {
      partList = content.Details.map((arg, index)=> (
         <article 
            key={index}
            className={arg.toggle ? 'parts-form active' : 'parts-form'} 
            style={{marginBottom: '20px'}}
         >
            <button onClick={() => onClickToggle(index)}>
               <strong>
                  Item No.<span>{index + 1}</span>
               </strong>
               <div>
                  <span className='toggle-area'>
                     <IonIcon icon={chevronUpOutline}/>
                  </span>
               </div>
            </button>
            <div className='parts-body'>
               <div className="custom-forms">
                  <label htmlFor={`Product${index}`}>
                     부품<span>*</span>
                  </label>
                  <input
                     type='text'
                     id={`Product${index}`}
                     disabled={disabled}
                     defaultValue={arg.Product}
                  />
               </div>
               <div className="custom-forms">
                  <label htmlFor={`SerialNo${index}`}>
                     부품시리얼번호
                  </label>
                  <input 
                     id={`SerialNo${index}`}
                     type='text' 
                     defaultValue={arg.SerialNo}
                     disabled={disabled}
                     placeholder='부품시리얼번호'
                  />
               </div>
               <div className="custom-forms">
                  <label htmlFor={`ReasonID${index}`}>
                     증상<span>*</span>
                  </label>
                  <input 
                     type='text'
                     id={`ReasonID${index}`}
                     defaultValue={arg.ReasonID}
                     disabled={disabled}
                  />
               </div>
               <div className="custom-forms">
                  <label htmlFor={`ShipmentID${index}`}>
                     배송
                  </label>
                  <input 
                     type='text'
                     id={`ShipmentID${index}`}
                     disabled={disabled}
                     defaultValue={arg.ShipmentID}
                  />
               </div>
               <div className="custom-forms">
                  <label htmlFor={`ShippingID${index}`}>
                     배송방법<span>*</span>
                  </label>
                  <input 
                     type='text'
                     id={`ShippingID${index}`}
                     disabled={disabled}
                     defaultValue={arg.ShippingID}
                  />
               </div>
               <div className="custom-forms">
                  <label htmlFor={`ShipCode${index}`}>
                     운송장번호
                  </label>
                  <input 
                     id={`ShipCode${index}`}
                     type='text' 
                     defaultValue={arg.ShipCode}
                     disabled={disabled} 
                     placeholder='운송장번호'
                  />
               </div>
               <div className="custom-forms">
                  <label htmlFor={`RMemo${index}`}>
                     요청사항<span>*</span>
                  </label>
                  <textarea 
                     id={`RMemo${index}`}
                     disabled={disabled} 
                     defaultValue={arg.RMemo}
                     placeholder='요청사항을 입력하세요'
                  />
               </div>
               <div className="custom-forms">
                  <strong className='forms-title'>
                     첨부파일<span>*</span>
                  </strong>
                  <div className='files-wrap'>
                  </div>
               </div>
            </div>
         </article>
      ));
   } else {
      partList = <></>
   }

   console.log(content)
   return (
      <>
         <IonPage>
            <AppHeader title={title} match={Match}/>
            <IonContent class='app-content tabBtn-wraper'>
            <h2 className='list-title'>
               Register No : {Match}
            </h2>
            <section className='form-section disabled-form'>
               <article className='device-form'>
                  <div className='custom-forms'>
                     <label htmlFor='device'>
                        Device Model 
                        <span>*</span>
                     </label>
                     <input 
                        type='text' 
                        id='device'
                        defaultValue={content.SerialNo}
                        disabled={disabled}
                     />
                  </div>
                  <div className='custom-forms'>
                     <label htmlFor='SerialNo'>
                        Serial No.
                        <span>*</span>
                     </label>
                     <input 
                        type='text' 
                        id='SerialNo' 
                        defaultValue={content.SerialNo}
                        disabled={disabled}
                        placeholder='장비시리얼번호'
                     />
                  </div>
                  <div className='custom-forms'>
                     <label htmlFor='Customer'>
                        Customer
                        <span>*</span>
                     </label>
                     <input 
                        type='text' 
                        id='Customer' 
                        defaultValue={content.CustomerName}
                        disabled={disabled} 
                        placeholder='실사용자명'
                     />
                  </div>
                  <div className='custom-forms'>
                     <label htmlFor='Requirement'>
                        Requirement
                        <span>*</span>
                     </label>
                     <textarea 
                        id='Requirement' 
                        defaultValue={content.RMemo}
                        disabled={disabled} 
                        placeholder='접수내용'
                     />
                  </div>
               </article>
            </section>
            <section className='form-section'>
               <article className='summary-length-form'>
                  Summary 
                  <span>
                     {content.Details ? content.Details.length : 0}
                     Items
                  </span>
               </article>
               {partList}
            </section>
            </IonContent>
         </IonPage>
      </>
   )
}

export default DetailItem