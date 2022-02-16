import React from 'react';
import { 
   IonPage,
   IonContent,
   IonRouterOutlet
} from '@ionic/react';  



//component
import Nav from '../nav/Nav';
import SideMenu from '../../commonComponent/sideMenu/SideMenu';
import Header from '../../commonComponent/header/Header';



function CsList() {
   return (
      <>
         <SideMenu/>
         <IonPage id="main-content">
         <Header/> 
            <IonContent class='app-content' scrollY={true}>
               <h1>
                  APP!!!!!
               </h1>
               <Nav/>
            </IonContent>
         </IonPage>
      </>
   )
}

export default CsList;