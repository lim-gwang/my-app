import React from 'react';
import { 
   IonPage,
   IonButton,
   IonContent,
   IonInput
 } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import '../../pages/login/login.css';

function ExceptionPath() {
   const history = useHistory();
   const localStorage = window.localStorage;

   return (
      <IonPage>
         <IonContent fullscreen='true' className='no-scroll'>
            <main id="login">
               <div className='logo-title login__logo-title'>
                  <img src="https://classys.com/wp-content/uploads/2018/09/clsaays_logo2.png" className='logo' />
               </div>
               <div className='login-form'>
                  <h2 style={{marginBottom: '5rem'}}>
                     잘못된 경로입니다.
                  </h2>
                  {
                     localStorage.lenth ? (
                        <IonButton href='/home/menu1'>
                           메인페이지로 가기
                        </IonButton>
                     ) : (
                        <IonButton href='/login' >
                           로그인페이지로 가기
                        </IonButton>
                     )
                  }
               </div>
            </main>
         </IonContent>
      </IonPage>
   )
}
export default ExceptionPath;