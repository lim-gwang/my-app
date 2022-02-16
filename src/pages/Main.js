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

// component
import Header from '../commonComponent/header/Header';
import SideMenu from '../commonComponent/sideMenu/SideMenu';
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
   return(
      <>
         <SideMenu/>   
         <IonPage className="ion-page" id="main-content">
         <Header windowSize={windowSize.width} thisDeskTop={thisDeskTop}/> 
            <IonContent>
                  <IonRouterOutlet>
                     <Route path={subRouterPath.page1} exact={true} render={ props => (
                        <RegisterList windowSize={windowSize.width} thisDeskTop={thisDeskTop} {...props}/>
                     )}/>
                     {/* <Route path='/home/menu1' component={RegisterList} exact={true}/> */}
                     <Route path={subRouterPath.page2} component={RegisterList2} exact={true}/>
                     <Route path={routePath.home} render={() => <Redirect to={subRouterPath.page1}/>} exact={true}/>
                     <Route component={ExceptionPath} />
                  </IonRouterOutlet>
            </IonContent>
         </IonPage>
      </>   
   ); 

}

export default Main;