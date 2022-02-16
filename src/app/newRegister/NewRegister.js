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
            class='app-content tabBtn-wraper'
            scrollY={true}
            scrollEvents={true}
            onIonScrollStart={() => {}}
            onIonScroll={() => {}}
            onIonScrollEnd={() => {}}
         >
            <div slot='fixed' className='app-btn-wrap'>
               <IonButton class='app-tab-btn' routerLink='/home/menu2/step2'>
                  다음
               </IonButton>
            </div>
       
         </IonContent>
         {/* </IonContent> */}
      </IonPage>
   )
}

export default NewRegister;