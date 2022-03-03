import React from 'react';
import { 
   IonPage,
   IonContent,
   IonButton
} from '@ionic/react';  

import { useHistory } from 'react-router';
// component
import RepairHeader from './RepairHeader';
import RepairPart from './RepairPart';

function RepairRegisterStep2({title, match}) {
   const history = useHistory();

   return (
      <IonPage>
      <RepairHeader title={title} match={match.params.pathName}/>
      <IonContent class='app-content tabBtn-wraper'>
         <h1 className='list-title' style={{color: '#1776e1'}}>
            <span>STEP2.</span> 부품추가 
         </h1>
         <RepairPart match={match.params.pathName} disabled={false}/>
      </IonContent>
      </IonPage>
   )
}

export default RepairRegisterStep2;