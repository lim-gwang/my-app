import React, { useState, useEffect } from 'react';
import { 
   IonButton,
   IonContent,
   IonPage,
   IonRouterOutlet,
   IonTabs,
   IonHeader,
   IonTitle,
   IonToolbar,
   getPlatforms
} from '@ionic/react';  
import { IonReactRouter  } from '@ionic/react-router';
import { Redirect, Route, useParams, Link } from 'react-router-dom'; 
import { debounce } from 'lodash';

import Header from '../components/header/Header';
import SideMenu from '../components/header/SideMenu';
import RegisterList from './registerList/RegisterList';
import RegisterList2 from './testpage/RegisterList2';
import Select from 'react-select';
import ExceptionPath from '../pages/exceptionPath/ExceptionPath';
import MyPage from './myPage/MyPage';


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

function Main() {
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
   });

   return(
      <>
         <SideMenu/>   
         <IonPage className="ion-page" id="main-content">
         <Header windowSize={windowSize.width} thisDeskTop={thisDeskTop}/> 
            <IonContent>
                  <IonRouterOutlet>
                     <Route path='/home/menu1' exact={true} render={ props => (
                        <RegisterList windowSize={windowSize.width} thisDeskTop={thisDeskTop} {...props}/>
                     )}/>
                     {/* <Route path='/home/menu1' component={RegisterList} exact={true}/> */}
                     <Route path='/home/menu2' component={RegisterList2} exact={true}/>
                     <Route path='/home/myPage' component={MyPage} exact={true}/>
                     <Route path="/home" render={() => <Redirect to='/home/menu1'/>} exact={true}/>
                     <Route component={ExceptionPath} />
                  </IonRouterOutlet>
            </IonContent>
         </IonPage>
      </>
   );

}

export default Main;