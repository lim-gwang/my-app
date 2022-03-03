import React, { useState, useEffect } from 'react';
import { 
   IonPage,
   IonContent,
   IonButton,
   IonAlert

} from '@ionic/react';  

import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

//css
// import '../component/Register.css';
//action 
import { addCsDevice } from '../../store/actions/actions';
// component




function RepairDevice({disabled, match}) {
   const history = useHistory();
   const dispatch = useDispatch();
   const deviceSelector = state => state.deviceReducer;
   const getCsList = state => state.CSListReducer;
   const CsList = useSelector(getCsList);
   const deviceList = useSelector(deviceSelector);
   const [showAlert1, setShowAlert1] = useState(false);
   const [ targetDeviceData, setTargetDeviceData ] = useState(CsList);

   const NextStep = () => {
      const { 
         CustomerName,
         ProductID,
         SerialNo,
         RMemo
       } = targetDeviceData;

       if(!(CustomerName && ProductID && SerialNo && RMemo) ) {
         setShowAlert1(true);
         return;
       };

      dispatch(addCsDevice(targetDeviceData));

      history.push(`/home/repair/step2/${match}`);
      
   };

   console.log(CsList)
   const onChange = name => e => {
      setTargetDeviceData({
         ...targetDeviceData,
         [name]: e.target.value,
      });
   }

   // 장비 목록
   const getDeviceList = deviceList.device.map((arg, index)=> {
      return (
         <option value={arg.Code} key={index} >
            {arg.CodeName}
         </option>
      )
   });

   return (
      <>
         <section className='form-section'>
            <article className='device-form'>
                  <div className='custom-forms'>
                     <label htmlFor='device'>
                        Device Model 
                        <span>*</span>
                     </label>
                     <select id='device' 
                        value={targetDeviceData.ProductID || ''}
                        onChange={onChange('ProductID')}
                        disabled={disabled}
                     >  
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
                        value={targetDeviceData.SerialNo || ''}
                        onChange={onChange('SerialNo')}
                        placeholder='장비시리얼번호'
                        disabled={disabled}
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
                        value={targetDeviceData.CustomerName || ''}
                        onChange={onChange('CustomerName')}
                        placeholder='실사용자명'
                        disabled={disabled}
                     />
                  </div>
                  <div className='custom-forms'>
                     <label htmlFor='Requirement'>
                        Requirement
                        <span>*</span>
                     </label>
                     <textarea 
                        id='Requirement' 
                        value={targetDeviceData.RMemo || ''}
                        onChange={onChange('RMemo')}
                        placeholder='접수내용'
                        disabled={disabled}
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

export default RepairDevice;