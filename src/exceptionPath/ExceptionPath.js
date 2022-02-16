import React from 'react';
import { 
   IonPage,
   IonButton,
   IonContent,
 } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';

// router url
import { routePath } from '../router/router';

// css
import '../login/login.css';

function ExceptionPath() {
   const token = sessionStorage.getItem('token');

   return (
      <IonPage>
         <IonContent scrollY={false}>
            <main id="login">
               <div className='logo-title login__logo-title'>
                  <img src="https://classys.com/wp-content/uploads/2018/09/clsaays_logo2.png" className='logo' />
               </div>
               <div className='login-form'>
                  <h2 style={{marginBottom: '5rem'}}>
                     잘못된 경로입니다.
                  </h2>
                  {
                     token ? (
                        <IonButton href={routePath.home}>
                           메인페이지로 가기
                        </IonButton>
                     ) : (
                        <IonButton href={routePath.login} >
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