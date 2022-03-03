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
import { 
   getDevice,
   // getDevicePart,
   getCsReason,
   getShipping,
   getShipment
} from '../store/registeCategory/registeCategory';

// component
import CsList from './csList/CsList';
import NewRegisterStep1 from './newRegister/NewRegisterStep1';
import NewRegisterStep2 from './newRegister/NewRegisterStep2';
import NewRegisterStep3 from './newRegister/NewRegisterStep3';
import ExceptionPath from '../exceptionPath/ExceptionPath';
import DetailItem from './detailItem/DetailItem';
import RepairRegisterStep1 from './repair/RepairRegisterStep1';
import RepairRegisterStep2 from './repair/RepairRegisterStep2';
import RepairRegisterStep3 from './repair/RepairRegisterStep3';

const menuTitle = appMenuTree.depth1[0].depth2.map(menu => menu.title);

function AppMain() {
   let token = sessionStorage.getItem('token');
   const dispatch = useDispatch();

   useEffect(()=> {
      token = sessionStorage.getItem('token');

      // 장비 종류
      dispatch(getDevice);
      // 부품 종류
      // dispatch(getDevicePart);
      // CS 증상코드
      dispatch(getCsReason);
      // 배송방법
      dispatch(getShipping);
      // 배송
      dispatch(getShipment);

   }, []);

   // token 값이 없으면 로그인 페이지로 이동 
   if(!token) {
      window.location.href = '/login';
      return;
   }

   return (
      <IonPage className="ion-page">
         <IonContent scrollY={false} >
            <IonRouterOutlet>
               <Route path={subRouterPath.page1} exact={true}>
                  <CsList title={menuTitle[0]}/>
               </Route>
               <Route path='/home/menu2/add' exact={true} render={props=> (
                  <NewRegisterStep1 title={menuTitle[1]} match={props.match}/>
               )}>
               </Route>
               <Route path='/home/menu2/add/step2' exact={true} render={props=> (
                  <NewRegisterStep2 title={menuTitle[1]} match={props.match}/>
               )}>
               </Route>
               <Route path='/home/menu2/add/step3' exact={true} render={props=> (
                  <NewRegisterStep3 title={menuTitle[1]} match={props.match}/>
               )}>
               </Route>
               <Route path='/home/detail/:pathName' exact={true} render={props=> (
                  <DetailItem title='CS 상세내역' match={props.match}/>
               )}>
               </Route>
               <Route path='/home/repair/:pathName' exact={true} render={props=> (
                  <RepairRegisterStep1 title='CS내역 수정' match={props.match} />
               )}>
               </Route>
               <Route path='/home/repair/step2/:pathName' exact={true} render={props=> (
                  <RepairRegisterStep2 title='CS내역 수정' match={props.match} />
               )}>
               </Route>
               <Route path='/home/repair/step3/:pathName' exact={true} render={props=> (
                  <RepairRegisterStep3 title='CS내역 수정' match={props.match} />
               )}>
               </Route>
               <Route path={routePath.home} render={() => <Redirect to={subRouterPath.page1}/>} exact={true}/>
               <Route component={ExceptionPath} />
            </IonRouterOutlet>
         </IonContent>

      </IonPage>
   )
}

export default AppMain;
