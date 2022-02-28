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

function AppHeader({title, match, goBack}) {
   const history = useHistory();
   const dispatch = useDispatch();
   const [ backAlert, setBackAlert ] = useState(false);

   let backBtn;

   if(goBack) {
      backBtn = <IonButton class='backBtn' onClick={()=> history.goBack()}>CS 상세내역</IonButton>
   } else if(match) {
      backBtn = <IonButton class='backBtn' routerLink='/home'>CS 관리</IonButton>
   } else {
      backBtn = <IonButton class='backBtn' onClick={()=> setBackAlert(true)}>CS 관리 </IonButton>
   }
      console.log(match)
   return(
      <>
      <IonHeader mode='ios' className="ion-no-border">
         <IonToolbar>
            <IonButtons slot="start">
               {backBtn}
            </IonButtons>
            <IonTitle class='newRegister-title'>
               {title === 'add' ? {title} : 'CS내역 수정'}
            </IonTitle>
            { match !== 'add' ? (
               <IonButtons slot="end">
                  <IonButton 
                     class='repairBtn'
                     routerLink={`/home/menu2/${match}`}
                  >
                     수정
                  </IonButton>
               </IonButtons>
            ) : (
               <></>
            )}
         </IonToolbar>
      </IonHeader>
      <IonAlert
         isOpen={backAlert}
         onDidDismiss={() => {
            setBackAlert(false);
         }}
         cssClass='custom-alert-modal back'
         header={`${title}을 취소하시겠습니까?`}
         subHeader={''}
         message={'요청내역이 목록에서 삭제됩니다.'}
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
