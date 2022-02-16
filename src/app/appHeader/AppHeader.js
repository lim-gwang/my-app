import React from 'react';
import { 
   IonHeader,
   IonToolbar,
   IonButtons,
   IonTitle,
   IonButton,
} from '@ionic/react';  

function AppHeader({title}) {
   return(
      <IonHeader mode='ios' className="ion-no-border">
         <IonToolbar>
            <IonButtons slot="start">
               <IonButton routerDirection='back' routerLink='/home'>
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
