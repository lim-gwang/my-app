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
         <IonContent scrollY={true}>
         <AppHeader title={title}/>
            <IonContent class='app-content' >
               <h1>
                  steop2. 부품추가 
               </h1>
               {/* <IonBackButton class='backBtn' defaultHref="/home/menu2"  text='이전'/> */}
               <IonButton routerDirection='back' routerLink='/home/menu2'>
                  이전
               </IonButton>
               <IonButton  routerLink='/home/menu2/step2'>
                  다음
               </IonButton>
            </IonContent>
         </IonContent>
      </IonPage>
   )
};

export default NewRegisterStep1;