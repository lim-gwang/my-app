import React from 'react';
import { 
   IonPage,
   IonContent,
   IonButton
} from '@ionic/react';  

import { useHistory } from 'react-router';
// component
import AppHeader from '../appHeader/AppHeader';

function RepairItem({title, match}) {
   const history = useHistory();
   
   return(
      <IonPage>
         <AppHeader title={title} goBack={true}/>
         <IonContent class='app-content tabBtn-wraper'>
            <IonButton
               onClick={() => history.goBack()}
            >
            </IonButton>
            <h1>
               {title}
               {match.params.pathName}
            </h1>
         </IonContent>
      </IonPage>
   )
}

export default RepairItem;