import React, { useState, useEffect } from 'react';
import { 
   IonButton,
   IonAlert
} from '@ionic/react'; 

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
// css 
import './Register.css';
// action
import { addCsDevice } from '../../store/actions/actions';




function RegisterDevice({disabled, match}) {
   const dispatch = useDispatch();
   const history = useHistory();
   const deviceSelector = state => state.deviceReducer;
   const CsListSelector = state => state.CSListReducer;
   const deviceList = useSelector(deviceSelector);
   const csList = useSelector(CsListSelector);
   const [showAlert1, setShowAlert1] = useState(false);
   const [ deviceForm, setDeviceForms ] = useState({
      ...csList
   });

   useEffect(()=> {
      setDeviceForms({
         ...csList
      })
   }, [csList]);

   const NextStep = () => {
      const { 
         CustomerName,
         ProductID,
         SerialNo,
         RMemo
       } = deviceForm;

       if(!(CustomerName && ProductID && SerialNo && RMemo) ) {
         setShowAlert1(true);
         return;
       } 
       dispatch(addCsDevice(deviceForm));
       if(match === 'add') {
         history.push('/home/menu2/step2/add');
       } else {
         history.push(`/home/menu2/add/step2`);
       }
   }

   // 장비 목록
   const getDeviceList = deviceList.device.map((arg, index)=> {
      return (
         <option value={arg.Code} key={index}>
            {arg.CodeName}
         </option>
      )
   });

   const onChange = name => e => {
      setDeviceForms({
         ...deviceForm,
         [name]: e.target.value,
      })
   };

   return(
      <>
      <section className='form-section'>
         <article className='device-form'>
            <div className='custom-forms'>
               <label htmlFor='device'>
                  Device Model 
                  <span>*</span>
               </label>
               <select id='device' 
                  disabled={disabled}
                  value={deviceForm.ProductID}
                  onChange={onChange('ProductID')}
               >  
                  <option value=''>
                     선택해주세요. 
                  </option>
                  {getDeviceList}
               </select>
            </div>
            <div className='custom-forms'>
               <label htmlFor='SerialNo'>
                  Serial No.
                  <span>*</span>
               </label>
               <input 
                  type='text' 
                  id='SerialNo' 
                  value={deviceForm.SerialNo}
                  disabled={disabled}
                  onChange={onChange('SerialNo')}
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
                  value={deviceForm.CustomerName}
                  disabled={disabled} 
                  onChange={onChange('CustomerName')}
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
                  value={deviceForm.RMemo}
                  disabled={disabled} 
                  onChange={onChange('RMemo')}
                  placeholder='접수내용'
               />
            </div>
         </article>
      </section>
      <div slot='fixed' className='app-btn-wrap'>
         <IonButton 
            class='app-tab-btn' 
            // routerLink='/home/menu2/step2'
            onClick={NextStep}
         >
            다음
         </IonButton>
      </div>
      <IonAlert
         isOpen={showAlert1}
         onDidDismiss={() => setShowAlert1(false)}
         cssClass='my-custom-class'
         header={''}
         subHeader={''}
         message={'필수입력사항을 입력하지 않았습니다.'}
         buttons={['확인']}
      />
   </>
   )
}

export default RegisterDevice;