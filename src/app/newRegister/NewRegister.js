import React from 'react';
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

   IonTabs,
   IonTabBar,
   IonTabButton,
   IonIcon,
   IonLabel,
} from '@ionic/react';  
import { Redirect, Route } from 'react-router-dom'; 

// icon
import { person, call } from 'ionicons';

// router url
import { appMenuTree } from '../../router/router';
 
// component
import NewRegisterStep1 from './NewRegisterStep1';

//css
import './newRegister.css';
import AppHeader from '../appHeader/AppHeader';

function NewRegister({title}) {
   return(
      <IonPage>
         {/* <IonContent> */}
         <AppHeader title={title}/>
            <IonContent 
               class='app-content'
               scrollY={true}
               scrollEvents={true}
               onIonScrollStart={() => {}}
               onIonScroll={() => {}}
               onIonScrollEnd={() => {}}
            >
                  <div>

                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                           <h1>
                              step1 cs 요청 정보 입력
                           </h1>
                  </div>
               <IonButton slot='fixed' routerLink='/home/menu2/step2'>
                  다음
               </IonButton>
            </IonContent>
         {/* </IonContent> */}
      </IonPage>
   )
}

export default NewRegister;