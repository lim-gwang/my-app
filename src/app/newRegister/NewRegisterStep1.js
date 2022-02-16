import { 
   IonPage,
   IonContent,
   IonHeader,
   IonToolbar,
   IonButtons,
   IonBackButton,
   IonTitle,
   IonRouterOutlet,
   IonButton
} from '@ionic/react';  
import { Redirect, Route } from 'react-router-dom'; 
import React from 'react';

import { subRouterPath } from '../../router/router';
import AppHeader from '../appHeader/AppHeader';
function NewRegisterStep1({title}) {
   return (
       <IonPage>
         {/* <IonContent scrollY={true}> */}
         <AppHeader title={title}/>
            <IonContent class='app-content tabBtn-wraper'>
               <h1>
                  steop2. 부품추가 
               </h1>
               <div slot='fixed' className='app-btn-wrap half'>
                  <IonButton 
                     class='app-tab-btn ion-color-tab-back' 
                     color='ion-color-tab-back'
                     routerDirection='back' 
                     routerLink='/home/menu2'
                  >
                     이전
                  </IonButton>
                  <IonButton class='app-tab-btn' routerLink='/home/menu2/step3'>
                     다음
                  </IonButton>
               </div>
            </IonContent>
         {/* </IonContent> */}
      </IonPage>
   )
};

export default NewRegisterStep1;