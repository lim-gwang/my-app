import { useState, useEffect } from 'react';
import { 
   IonApp,
   IonRouterOutlet,
   setupIonicReact,
   IonPage
} from '@ionic/react';   
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchUserData } from './store/user/user';
import Login from './pages/login/Login';
import Main from './pages/Main';
import ExceptionPath from './pages/exceptionPath/ExceptionPath';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import './style/common.css';
import './style/ionBtnStyle.css';
setupIonicReact();

const App = () => {
   const itemSelector = (state) => state.itemReducer.items;
   const dispatch = useDispatch();

   // useEffect(() => {
   //    dispatch(fetchUserData)
   //  }, []);

   const userItem = useSelector(itemSelector);

   const routePath = {
      login: '/login',
      home: '/home'
   }
   return (
      <IonApp>
         <IonPage>
            <IonReactRouter>
               <IonRouterOutlet>
                  {/* 로그인 */}
                  <Route path='/login'component={Login}  exact={true}/>
                  {/* 기본 url */}
                  <Route path="/" render={() => <Redirect to='/home'/>} exact={true}/>
                  {/* 없는경로 */}
                  <Route component={ExceptionPath} />
               </IonRouterOutlet>
               {/* 메인페이지 */}
               <Route path='/home' component={Main}/>
            </IonReactRouter>
         </IonPage>
      </IonApp>
   );
};

export default App;
