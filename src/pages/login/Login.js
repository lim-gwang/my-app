import React, { useState } from 'react';
import { 
   IonButton,
   IonContent,
   IonPage,
   getPlatforms,
 } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/user/user';
import './login.css';

const platforms = getPlatforms();
const thisDeskTop = platforms.map(arg => arg === 'desktop')[0];

function Login() {
   const history = useHistory();
   const dispatch = useDispatch();
   const [ loginData, setLoginData ] = useState({
      id: '',
      pw: ''
   });

   const handleChange = key => e =>{
      setLoginData({
         ...loginData,
         [key] : e.target.value
      })
   };
   const SubmitLogin = () => {
      login(loginData)
         .then(res=> {
            if(res.token) {
               // 로그인 성공 
               history.push('/home');
               // input 초기화
               setLoginData({
                  id:'',
                  pw: ''
               });

            } else {
               //로그인 실패
               alert(res.message);
            }
         })
         .catch(err => {
            // 로그인 실패 시
            console.log(err)
         });
   }
   const enterLogin = e => {
      if (e.key !== 'Enter') return;
      SubmitLogin();
   }

   return (
      <IonPage >
         <IonContent fullscreen='true' className='no-scroll'>
            <main id="login">
               <div className='logo-title login__logo-title'>
                  <img src="https://classys.com/wp-content/uploads/2018/09/clsaays_logo2.png" className='logo' />
               </div>
               <div className='login-form'>
                  <section className='login-section login-form__section'>
                     <article>
                        <input 
                           type='text' 
                           value={loginData.id} 
                           onChange={handleChange('id')}
                           placeholder='아이디'
                        />  
                     </article>  
                     <article>
                        <input 
                           type='password' 
                           value={loginData.pw}
                           onChange={handleChange('pw')}
                           onKeyUp={enterLogin}
                           placeholder='비밀번호'
                        />
                     </article>
                     <IonButton
                        className='btn ion-color-login'
                        color='ion-color-login'
                        routerDirection="forward"
                        expand="full"
                        onClick={() => SubmitLogin()}
                     >
                        로그인
                     </IonButton>
                  </section>
               </div>
            </main>
         </IonContent>
      </IonPage>
   )
}

export default Login;