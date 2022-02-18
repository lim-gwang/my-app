import React, { useState, useEffect } from 'react';
import { 
   IonPage,
   IonContent,
   IonRouterOutlet,
} from '@ionic/react';  
import { Redirect, Route } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';

// router url
import { routePath, subRouterPath, appMenuTree } from '../router/router';

// css
import '../style/app.css';

// action
import { csList, userData } from '../store/user/user';

// component
import CsList from './csList/CsList';
import NewRegisterStep1 from './newRegister/NewRegisterStep1';
import NewRegisterStep2 from './newRegister/NewRegisterStep2';
import NewRegisterStep3 from './newRegister/NewRegisterStep3';
import ExceptionPath from '../exceptionPath/ExceptionPath';



const menuTitle = appMenuTree.depth1[0].depth2.map(menu => menu.title);

function AppMain() {
   const dispatch = useDispatch();
   const [ disabled, setDisabled ] = useState(false);

   useEffect(()=> {
      // csList();
   }, [])

   return (
      <IonPage className="ion-page">
         <IonContent scrollY={false} >
            <IonRouterOutlet>
               <Route path={subRouterPath.page1} exact={true}>
                  <CsList title={menuTitle[0]}/>
               </Route>
               <Route path={subRouterPath.page2} exact={true}>
                  <NewRegisterStep1 title={menuTitle[1]} disabled={disabled}/>
               </Route>
               <Route path='/home/menu2/step2' exact={true}>
                  <NewRegisterStep2 title={menuTitle[1]}  disabled={disabled}/>
               </Route>
               <Route path='/home/menu2/step3' exact={true}>
                  <NewRegisterStep3 title={menuTitle[1]}  disabled={disabled}/>
               </Route>
               <Route path={routePath.home} render={() => <Redirect to={subRouterPath.page1}/>} exact={true}/>
               <Route component={ExceptionPath} />
            </IonRouterOutlet>
         </IonContent>

      </IonPage>
   )
}

export default AppMain;
