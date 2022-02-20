import { useState, useEffect } from 'react';
import { 
   IonApp,
   IonRouterOutlet,
   setupIonicReact,
   IonPage,
   getPlatforms,
   IonContent
} from '@ionic/react';   
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//component
import Login from './login/Login';
import Main from './web/Main';
import ExceptionPath from './exceptionPath/ExceptionPath';

// router url
import { routePath } from './router/router';

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

// import './style/common.css';
import './style/ionBtnStyle.css';
import AppMain from './app/AppMain';
setupIonicReact();

// 현재 기기 체크
const platforms = getPlatforms();
const thisDeskTop = platforms.map(arg => arg === 'desktop')[0];

const App = () => {
   const token = sessionStorage.getItem('token');
   const itemSelector = (state) => state.itemReducer.items;
   const dispatch = useDispatch();

   // useEffect(() => {
   //    dispatch(fetchUserData)
   //  }, []);

   const userItem = useSelector(itemSelector);


   let mainPage = null;


   if(thisDeskTop) {
      // web
      mainPage = <Route path={routePath.home} component={Main}/>
   } else {
      // app
      mainPage =  <Route path={routePath.home} component={AppMain}/>
   }

   return (
      <IonApp>
         <IonPage>
            <IonReactRouter>
               <IonRouterOutlet>
                  {/* 로그인 */}
                  <Route path={routePath.login} component={Login}  exact={true}/>
                  {/* 기본 url */}
                  <Route path="/" render={() => <Redirect to={routePath.home}/>} exact={true}/>
                  {/* 없는경로 */}
                  <Route component={ExceptionPath} />
               </IonRouterOutlet>
               {mainPage}
            </IonReactRouter>
         </IonPage>
      </IonApp>
   )
};

export default App;
