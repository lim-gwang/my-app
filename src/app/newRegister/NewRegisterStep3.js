import React, { useState } from 'react';
import { 
   IonPage,
   IonContent,
   IonHeader,
   IonToolbar,
   IonButtons,
   IonBackButton,
   IonTitle,
   IonRouterOutlet,
   IonButton,
   IonIcon
} from '@ionic/react';  


//component
import AppHeader from '../appHeader/AppHeader';
import RegisterDevice from '../component/RegisterDevice';
import RegisterParts from '../component/RegisterParts';

function NewRegisterStep3({title}) {
   const [ disabled, setDisabled ] = useState(true);
   return (
      <>
      <IonPage>
         <AppHeader title={title}/>
         <IonContent class='app-content tabBtn-wraper'>
            <h1 className='list-title' style={{color: '#1776e1'}}>
               <span>STEP3.</span> CS 요청 내용 확인 
            </h1>
            <RegisterDevice disabled={disabled}/>
            <RegisterParts disabled={disabled}/>
            <div slot='fixed' className='app-btn-wrap half'>
                  <IonButton 
                     class='app-tab-btn ion-color-tab-back' 
                     color='ion-color-tab-back'
                     routerDirection='back' 
                     routerLink='/home/menu2/step2'
                  >
                     이전
                  </IonButton>
                  <IonButton class='app-tab-btn' routerLink='/home/menu2/step3'>
                     완료
                  </IonButton>
            </div>
         </IonContent>
      </IonPage>

      
      </>
   )
}

export default NewRegisterStep3;