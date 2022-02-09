import React from 'react';
import { 
  IonPage,
  IonContent
} from '@ionic/react';
function MyPage() {
   return (
      <IonPage>
         <IonContent class='ion-layout-padding bg-color1'>
            <h1 className='pageTitle'>
               my page!
            </h1>
         </IonContent>
      </IonPage>
   )
}

export default MyPage;