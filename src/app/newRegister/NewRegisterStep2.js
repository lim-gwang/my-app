import React, { useState, useEffect } from 'react';

import { 
   IonPage,
   IonContent,
   IonButton,
   IonIcon
} from '@ionic/react';  

// ionicon
import { 
   addOutline 
} from 'ionicons/icons';

// router
import { subRouterPath } from '../../router/router';
// action 
import { useDispatch, useSelector } from 'react-redux';
import { addCsPart } from '../../store/actions/actions';
// component
import AppHeader from '../appHeader/AppHeader';
import RegisterParts from '../component/RegisterParts';

function NewRegisterStep1({title}) {
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
         <AppHeader title={title}/>
            <IonContent class='app-content tabBtn-wraper'>
               <h1 className='list-title' style={{color: '#1776e1'}}>
                  <span>STEP2.</span> 부품추가 
               </h1>
               <RegisterParts/>
            </IonContent>
      </IonPage>
   )
};

export default NewRegisterStep1;