import React, { useState } from 'react';
import { 
   IonButton,
   IonContent,
   IonInput,
   IonPage
 } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/user/user';
import './login.css';
function Login() {
   const [ loginData, setLoginData ] = useState({
      id: '',
      pw: ''
   });
   const history = useHistory();
   const dispatch = useDispatch();

   // const handleChange = key => e =>{
   //    setLoginData({
   //       ...loginData,
   //       [key] : e.target.value
   //    })
   // };
   // const Login = e => {
   //    // if (e.key !== 'Enter') return 
   //    console.log(e)
   //    login(loginData);
   // }

   return (
      <IonPage >
         <IonContent fullscreen='true' className='no-scroll'>
            <main id="login">
               <div className='logo-title login__logo-title'>
                  <img src="https://classys.com/wp-content/uploads/2018/09/clsaays_logo2.png" className='logo' />
               </div>
               <div className='login-form'>
                  <form>
                     <section className='login-section login-form__section'>
                        <article>
                           <IonInput 
                              type='text' 
                              value={loginData.id} 
                              // onIonChange={handleChange('id')}
                              placeholder='아이디'
                           />  
                        </article>  
                        <article>
                           <IonInput 
                              type='password' 
                              vale={loginData.pw} 
                              // onIonChange={handleChange('pw')}
                              placeholder='비밀번호'
                           />
                        </article>
                        {/* <button 
                           className='btn login-btn login-section__btn'
                           onClick={()=> history.push('/home')}
                        >
                           로그인
                        </button> */}
                        <IonButton
                           className='btn ion-color-login'
                           color='ion-color-login'
                           // routerLink='/home'
                           routerDirection="forward"
                           expand="full"
                           onClick={()=> history.push('/home')}
                        >
                           로그인
                        </IonButton>
                     </section>
                  </form>
                  <Link to="/login" className='userData-search'>
                     아이디/비밀번호 찾기
                  </Link>
               </div>
            </main>
         </IonContent>
      </IonPage>
   )
}

export default Login;