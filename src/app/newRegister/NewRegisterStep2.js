import React, { useState, useEffect } from 'react';

import { 
   IonPage,
   IonContent,
   IonButton,
   IonIcon
} from '@ionic/react';  


// action 
import { useDispatch, useSelector } from 'react-redux';
// component
import AppHeader from '../appHeader/AppHeader';
import RegisterParts from '../component/RegisterParts';

function NewRegisterStep1({title, match}) {
   const dispatch = useDispatch();
   const [ partForm, setPartForm ] = useState({
      AllowNew:true,
      Code:"",
      Product:"",
      SerialNo:"",
      ReasonID:null,
      ShipmentID:null,
      ShippingID:null,
      ShipCode:"",
      RMemo:""
   });
   useEffect(()=> {

   })

   return (
       <IonPage>
         <AppHeader title={title} match={match.params.pathName}/>
            <IonContent class='app-content tabBtn-wraper'>
               <h1 className='list-title' style={{color: '#1776e1'}}>
                  <span>STEP2.</span> 부품추가 
               </h1>
               <RegisterParts match={match.params.pathName}/>
            </IonContent>
      </IonPage>
   )
};

export default NewRegisterStep1;