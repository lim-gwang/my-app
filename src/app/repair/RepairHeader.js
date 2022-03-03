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
import '../appHeader/appheader.css';
// action
import { csClear } from '../../store/actions/actions';
import { csDel } from '../../store/user/user';

function RepairHeader({title, match}) {
   const history = useHistory();
   const dispatch = useDispatch();
   const [ backAlert, setBackAlert ] = useState(false);
   const [ itemCode, setItemCode ] = useState({
      Code: match,
   });

   return(
      <>
      <IonHeader mode='ios' className="ion-no-border">
         <IonToolbar>
            <IonButtons slot="start">
               <IonButton 
                  class='backBtn' 
                  onClick={()=> history.goBack()}
               >
                  CS 상세내역
               </IonButton>
            </IonButtons>
            <IonTitle class='newRegister-title'>
               {title}
            </IonTitle>
               <IonButtons slot="end">
                  <IonButton 
                     class='deleteBtn'
                     onClick={()=> dispatch(csDel(itemCode))}
                  >
                     취소
                  </IonButton>
               </IonButtons>
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
         message={'요청수정 내용이 저장되지 않습니다.'}
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

export default RepairHeader;
