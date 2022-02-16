import React from 'react';
import { 
   IonPage,
   IonContent,
   IonRouterOutlet,
} from '@ionic/react';  
import { Redirect, Route } from 'react-router-dom'; 

// router url
import { routePath, subRouterPath, appMenuTree } from '../router/router';

// component
import Header from '../commonComponent/header/Header';
import SideMenu from '../commonComponent/sideMenu/SideMenu';
import CsList from './csList/CsList';
import ExceptionPath from '../pages/exceptionPath/ExceptionPath';

//css
import '../style/app.css';
import NewRegister from './newRegister/NewRegister';
import Nav from './nav/Nav';
import NewRegisterStep1 from './newRegister/NewRegisterStep1';

const menuTitle = appMenuTree.depth1[0].depth2.map(menu => menu.title);

function AppMain() {
   return (
      <IonPage className="ion-page">
         {/* <IonContent scrollY={true}> */}
            <IonRouterOutlet>
               <Route path={subRouterPath.page1} exact={true}>
                  <CsList title={menuTitle[0]}/>
               </Route>
               <Route path={subRouterPath.page2} exact={true}>
                  <NewRegister title={menuTitle[1]}/>
               </Route>
               <Route path='/home/menu2/step2' exact={true}>
                  <NewRegisterStep1 title={menuTitle[1]}/>
               </Route>
               <Route path={routePath.home} render={() => <Redirect to={subRouterPath.page1}/>} exact={true}/>
               <Route component={ExceptionPath} />
            </IonRouterOutlet>
         {/* </IonContent> */}
      </IonPage>
   )
}

export default AppMain;
