import React, { useState } from 'react';
import { 
   IonPage,
   IonContent,
   IonButton,
   IonAlert,
} from '@ionic/react';  

import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'; 
// action
import { csClear } from '../../store/actions/actions';
import { addCsList } from '../../store/user/user';
// component
import RepairHeader from './RepairHeader';
import RepairDevice from './RepairDevice';
import RepairPart from './RepairPart';
import Loading from '../../loading/Loding';

function RepairRegisterStep3({title, match}) {
   const history = useHistory();
   const dispatch = useDispatch();
   const csData = useSelector(state => state.CSListReducer);
   const [ loading, setLoading ] = useState(false);
   const [ showAlert3, setShowAlert3 ] = useState(false);
   const [ showAlert4, setShowAlert4 ] = useState(false);
   const [ itemTarget, setItemTarget ] = useState("");

   console.log(csData, 'step3')

   const formSubmit = async () => {

      try {
         setLoading(true);

         await addCsList(csData)
            .then(res=> {
                  console.log(res,' then')
               setItemTarget(res.IdentityCode);

               if(res.Result) {
                  setShowAlert3(true);
               } else {
                  setShowAlert4(true);
               }
            })
            .catch(err => {
               console.log(err, 'err')
            });

      } catch (err) {
         console.log(err);
      }
      
      setLoading(false);
      
   };



   return (
      <IonPage>
      <RepairHeader title={title} match={match.params.pathName}/>
      <IonContent class='app-content tabBtn-wraper'>
         <h1 className='list-title' style={{color: '#1776e1'}}>
            <span>STEP3.</span> CS 요청 내용 확인 
         </h1>

         <RepairDevice disabled={true} match={match.params.pathName}/>
         <RepairPart disabled={true} match={match.params.pathName}/>
         <div slot='fixed' className='app-btn-wrap half'>
               <IonButton 
                  class='app-tab-btn ion-color-tab-back' 
                  color='ion-color-tab-back'
                  routerDirection='back' 
                  onClick={()=> history.goBack()}
               >
                  이전
               </IonButton>
               <IonButton 
                  type='submit'
                  class='app-tab-btn'
                  onClick={formSubmit}
               >
                  완료
               </IonButton>
         </div>
         <IonAlert
            isOpen={showAlert3}
            onDidDismiss={() => {
               setShowAlert3(false);
               dispatch(csClear());
            }}
            cssClass='custom-alert-modal'
            header={'CS내역이 수정되었습니다.'}
            subHeader={''}
            message={'요청내역은 관리 목록에서 확인할 수 있습니다.'}
            buttons={[
               {
                  text: '내역 확인하기',
                  role: 'cancel',
                  handler: () => {
                     history.push(`/home/detail/${itemTarget}`); 
                  }
               },
               {
                  text: '홈으로',
                  handler: () => {
                     dispatch(csClear());
                     history.push('/home');
                  }
               }
               ]}
         />
         <IonAlert
            isOpen={showAlert4}
            onDidDismiss={() => {
               setShowAlert4(false);
               dispatch(csClear());
               history.push('/home');
            }}
            cssClass='custom-alert-modal err'
            header={'에러'}
            subHeader={''}
            message={'알수없는 에러가 발생했습니다.'}
            buttons={[
               {
                  text: '홈으로',
                  handler: () => {
                     dispatch(csClear());
                     history.push('/home');
                  }
               }
               ]}
         />
      </IonContent>
      <Loading hide={loading}/>
      </IonPage>
   )
}

export default RepairRegisterStep3;