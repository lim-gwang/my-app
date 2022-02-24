import React, { useState } from 'react';
import { 
   IonButton,
   IonContent,
   IonPage,
   getPlatforms,
 } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//css
import './login.css';

//action 
import { login } from '../store/user/user';
import { userData } from '../store/actions/actions';

// component
import Loading from '../loading/Loding';

const platforms = getPlatforms();
const thisDeskTop = platforms.map(arg => arg === 'desktop')[0];

function Login() {
   const token = sessionStorage.getItem('token');
   const history = useHistory();
   const [ loading, setLoading ] = useState(false);
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

   const SubmitLogin = async () => {

      try {
         setLoading(true);

         await login(loginData)
            .then(res=> {
               if(res.token) {
                  // 로그인 성공 
                  history.push('/home');
                  setLoginData({
                     id: '',
                     pw: ''
                  });
               };
            })
            .catch(err=> {
               console.log(err)
            });

      } catch (err) {
         console.log(err);
      }

      setLoading(false);
   }

   const enterLogin = e => {
      if (e.key !== 'Enter') return;

      SubmitLogin();
   }

   // token값이 있다면 main 페이지로 이동
   if(token) {
      window.location.href = '/home';
   }

   return (
      
      <IonPage >
         <Loading hide={loading}/>
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
                        class='btn ion-color-login'
                        color='ion-color-login'
                        routerDirection="forward"
                        expand="full"
                        onTouchEnd={() => SubmitLogin()}
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