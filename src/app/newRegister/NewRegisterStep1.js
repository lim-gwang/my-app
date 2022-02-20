import React from 'react';
import { 
   IonPage,
   IonContent,
   IonButton
} from '@ionic/react';  
import { Redirect, Route } from 'react-router-dom'; 

// router url
import { appMenuTree } from '../../router/router';

// component
import AppHeader from '../appHeader/AppHeader';
import RegisterDevice from '../component/RegisterDevice';

function NewRegister({title}) {

   return(
      <IonPage>
         <AppHeader title={title}/>
         <IonContent 
            class='app-content tabBtn-wraper'
            scrollY={true}
            scrollEvents={true}
            onIonScrollStart={() => {}}
            onIonScroll={() => {}}
            onIonScrollEnd={() => {}}
         >
            <h2 className='list-title' style={{color: '#1776e1'}}>
               <span>STEP1.</span> CS 요청 정보 입력
            </h2>
           <RegisterDevice/>
           <div slot='fixed' className='app-btn-wrap'>
               <IonButton class='app-tab-btn' routerLink='/home/menu2/step2'>
                  다음
               </IonButton>
            </div>
         </IonContent>
      </IonPage>
   )
}

export default NewRegister;