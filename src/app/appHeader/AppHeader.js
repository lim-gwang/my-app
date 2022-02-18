import React from 'react';
import { 
   IonHeader,
   IonToolbar,
   IonButtons,
   IonTitle,
   IonButton,
} from '@ionic/react';  

//css 
import './appheader.css';

function AppHeader({title}) {
   return(
      <IonHeader mode='ios' className="ion-no-border">
         <IonToolbar>
            <IonButtons slot="start">
               <IonButton class='backBtn' routerDirection='back' routerLink='/home'>
                  CS 관리
               </IonButton>
            </IonButtons>
            <IonTitle class='newRegister-title'>
               {title}
            </IonTitle>
         </IonToolbar>
      </IonHeader>
   )
}

export default AppHeader;
