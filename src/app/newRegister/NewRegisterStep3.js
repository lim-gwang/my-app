import React, { useEffect, useState } from 'react';
import { 
   IonPage,
   IonContent,
   IonButton,
   IonAlert
} from '@ionic/react';  

import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

// css
import '../../style/ionAlertStyle.css';

// action
import { csClear } from '../../store/actions/actions';
import { addCsList } from '../../store/user/user';

//component
import AppHeader from '../appHeader/AppHeader';
import RegisterDevice from '../component/RegisterDevice';
import RegisterParts from '../component/RegisterParts';
import Loading from '../../loading/Loding';

function NewRegisterStep3({title, match}) {
   const history = useHistory();
   const dispatch = useDispatch();
   const [ disabled, setDisabled ] = useState(true);
   const [ loading, setLoading ] = useState(false);
   const [ showAlert3, setShowAlert3 ] = useState(false);
   const [ showAlert4, setShowAlert4 ] = useState(false);
   const [ itemTarget, setItemTarget ] = useState("");
   const csData = useSelector(state => state.CSListReducer);

   useEffect(()=> {

   }, [itemTarget])

   const formSubmit = async () => {

      try {
         setLoading(true);

         await addCsList(csData)
            .then(res=> {

               setItemTarget(res.IdentityCode);

               if(res.IdentityCode) {
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
      <>
      <IonPage>
         <AppHeader title={title} match={match.params.pathName}/>
         <IonContent class='app-content tabBtn-wraper'>
            <h1 className='list-title' style={{color: '#1776e1'}}>
               <span>STEP3.</span> CS 요청 내용 확인 
            </h1>
            <RegisterDevice disabled={disabled}/>
            <RegisterParts disabled={disabled}/>
            <div slot='fixed' className='app-btn-wrap half'>
                  <IonButton 
                     class='app-tab-btn ion-color-tab-back' 
                     color='ion-color-tab-back'
                     routerDirection='back' 
                     routerLink='/home/menu2/step2'
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
                  history.push('/home');
               }}
               cssClass='custom-alert-modal'
               header={'CS요청이 완료되었습니다.'}
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

      
      </>
   )
}

export default NewRegisterStep3;