import React from 'react';
import { 
   IonPage,
   IonContent
} from '@ionic/react';

// component
import AppHeader from '../appHeader/AppHeader';

function NewRegisterWrap({title}) {
   return(
      <>
      <IonPage>
         <AppHeader title={title}/>
         <IonContent>
            
         </IonContent>
      </IonPage>
      
      </>
   )
}

export default NewRegisterWrap;