import React, { useState, useEffect } from 'react';
import { 
   IonContent,
   IonPage,
   IonRouterOutlet,
   getPlatforms
} from '@ionic/react';  
import { IonReactRouter  } from '@ionic/react-router';
import { Redirect, Route, useHistory } from 'react-router-dom'; 
import { debounce } from 'lodash';

// router url
import { routePath, subRouterPath } from '../router/router';

//action
import { userData } from '../store/user/user';

// component
import Header from '../commonComponent/header/Header';
import SideMenu from '../commonComponent/sideMenu/SideMenu';
import Select from 'react-select';
import ExceptionPath from '../exceptionPath/ExceptionPath';
import Asd from './client/Asd';


const options = [
   { value: 'chocolate', label: 'Chocolate' },
   { value: 'strawberry', label: 'Strawberry' },
   { value: 'vanilla', label: 'Vanilla' }
 ]
export const com = () => (
   <>
   <IonPage>
      <IonContent class="ion-layout-padding">
         <h1>Component!1111</h1>
         <Select options={options} />
      </IonContent>
   </IonPage>

   </>
)
// destTop check
const platforms = getPlatforms();
const thisDeskTop = platforms.map(arg => arg === 'desktop')[0];
// 권한 체크
let grant = null;

function Main() {
   const token = sessionStorage.getItem('token');
   const history = useHistory();

   // window width check
   const [ windowSize, setWindowSize ] = useState({
      width: window.innerWidth
   });
   const handleResize = debounce(() => {
      setWindowSize({
         width: window.innerWidth
      })
   }, 200);

   useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      }
   }, []);

   if(!token) {
      window.location.href = '/login';
   }

   return(
      <>
         <SideMenu/>   
         <IonPage className="ion-page" id="main-content">
         <Header windowSize={windowSize.width} thisDeskTop={thisDeskTop}/> 
            <IonContent>
                  <IonRouterOutlet>
                     <Route path='/home/menu1/:pathName' exact={true} render={ () => (
                        <IonPage>
                           <IonContent>
                           <h1>page2</h1>
                           <Asd open={true}/>
                        </IonContent>
                     </IonPage>
                     )}/>
                     <Route path={subRouterPath.page2} exact={true} render={ () => (
                        <IonPage>
                           <IonContent>
                              <h1>page2</h1>
                           </IonContent>
                        </IonPage>
                     )}/>
                     <Route path={routePath.home} render={() => <Redirect to={subRouterPath.page1}/>} exact={true}/>
                     <Route component={ExceptionPath} />
                  </IonRouterOutlet>
            </IonContent>
         </IonPage>
      </>   
   ); 

}

export default Main;