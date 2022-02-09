import React from 'react';
import { 
   IonContent,
   IonMenu,
   IonHeader,
   IonToolbar,
   IonTitle,
   IonList,
   IonItem,
   IonListHeader,
   IonMenuToggle,
   IonButton
} from '@ionic/react';  
import { IonReactRouter  } from '@ionic/react-router';
import { Redirect, Route, useParams, Link, NavLink } from 'react-router-dom'; 
import { menus } from './Header';
function SideMenu () {
   return (
      <IonMenu content-id="main-content">
         <IonHeader style={{textAlign:'center'}}>
            {/* <IonToolbar color="">
               <IonTitle>Menu</IonTitle>
            </IonToolbar> */}
            <img src="https://classys.com/wp-content/uploads/2018/09/clsaays_logo2.png" alt="classys"/>
         </IonHeader>
         <IonContent>
            <IonList>
               {/* <IonListHeader>
                  Navigate
               </IonListHeader> */}
               <IonMenuToggle auto-hide="false">
                  <ul className='side-nav'>
                     {menus}
                  </ul>
               </IonMenuToggle>
            </IonList>
         </IonContent>
      </IonMenu>
   )
}

export default SideMenu;