import React from 'react';
import { 
   IonPage,
   IonContent,
   IonButton
} from '@ionic/react';  

import { useHistory } from 'react-router';
// component
import RepairHeader from './RepairHeader';
import RepairDevice from './RepairDevice';

function RepairRegisterStep1({title, match}) {
   const history = useHistory();

   return (
      <IonPage>
      <RepairHeader title={title} match={match.params.pathName}/>
      <IonContent class='app-content tabBtn-wraper'>
         <h2 className='list-title' style={{color: '#1776e1'}}>
            <span>STEP1.</span> CS 요청 정보 입력
         </h2>
         <RepairDevice match={match.params.pathName}/>
      </IonContent>
      </IonPage>
   )
}

export default RepairRegisterStep1;