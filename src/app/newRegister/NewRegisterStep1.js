import React, { useState } from 'react';
import { 
   IonPage,
   IonContent,
   IonButton
} from '@ionic/react';  
import { Redirect, Route } from 'react-router-dom'; 

// component
import AppHeader from '../appHeader/AppHeader';
import RegisterDevice from '../component/RegisterDevice';

function NewRegister({title, match}) {
   const [ DeviceForm, setDeviceForms ] = useState({
      AllowNew: true,
      Code:"",
      AgencyID: 1,
      CustomerName:"",
      ProductID:"",
      SerialNo:"",
      Rmemo:"",
      Details: []
   });

   const deviceSave = name => e => {
      setDeviceForms({
         ...DeviceForm,
         [name]: e.target.value,
      });
   }
   
   let repair= true;
   if(match.params.pathName === 'add') repair= false;

   return(
      <IonPage>
         <AppHeader title={title} match={match.params.pathName}/>
         <IonContent class='app-content tabBtn-wraper'>
            <h2 className='list-title' style={{color: '#1776e1'}}>
               <span>STEP1.</span> CS 요청 정보 입력
            </h2>
           <RegisterDevice deviceSave={deviceSave} match={match.params.pathName}/>
         </IonContent>
      </IonPage>
   )
}

export default NewRegister;