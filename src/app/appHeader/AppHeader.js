import React, { useState } from 'react';
import { 
   IonHeader,
   IonToolbar,
   IonButtons,
   IonTitle,
   IonButton,
   IonAlert
} from '@ionic/react';  

import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
//css 
import './appheader.css';
// action
import { csClear } from '../../store/actions/actions';

function AppHeader({title}) {
   const history = useHistory();
   const dispatch = useDispatch();
   const [ backAlert, setBackAlert ] = useState(false);

   return(
      <>
      <IonHeader mode='ios' className="ion-no-border">
         <IonToolbar>
            <IonButtons slot="start">
               <IonButton 
                  class='backBtn' 
                  onClick={()=> setBackAlert(true)}
               >
                  CS 관리
               </IonButton>
            </IonButtons>
            <IonTitle class='newRegister-title'>
               {title}
            </IonTitle>
         </IonToolbar>
      </IonHeader>
      <IonAlert
         isOpen={backAlert}
         onDidDismiss={() => {
            setBackAlert(false);
         }}
         cssClass='custom-alert-modal back'
         header={'CS요청을 취소하시겠습니까?'}
         subHeader={''}
         message={'취소 요청내역이  목록에서 삭제됩니다.'}
         buttons={[
            {
               text: '네',
               handler: () => {
                  setBackAlert(false);
                  dispatch(csClear());
                  history.push('/home');
               }
            },
            {
               text: '아니오',
               role: 'cancel',
               handler: () => {
                  setBackAlert(false);
               }
            }
         ]}
      />
      </>
   )
}

export default AppHeader;
