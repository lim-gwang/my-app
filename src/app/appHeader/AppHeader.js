import React, { useEffect, useState } from 'react';
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
import { csDel } from '../../store/user/user';

function AppHeader({title, match, goBack, detail}) {
   const history = useHistory();
   const dispatch = useDispatch();
   const [ backAlert, setBackAlert ] = useState(false);
   const [ itemCode, setItemCode ] = useState({
      Code: match,
   });

   let backBtn;

   // cs 수정 페이지
   if(match === 'add') {
      backBtn = <IonButton class='backBtn' onClick={()=> setBackAlert(true)}>CS 관리</IonButton>
   // cs 상세보기
   } else {
      backBtn = <IonButton class='backBtn' onClick={()=> dispatch(csClear())} routerLink='/home'>CS 관리</IonButton>
   }

   return(
      <>
      <IonHeader mode='ios' className="ion-no-border">
         <IonToolbar>
            <IonButtons slot="start">
               {backBtn}
            </IonButtons>
            <IonTitle class='newRegister-title'>
               {title}
            </IonTitle>
            { detail && (
               <IonButtons slot="end">
                  <IonButton 
                     class='repairBtn'
                     routerLink={`/home/repair/${match}`}
                  >
                     수정
                  </IonButton>
               </IonButtons>
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
