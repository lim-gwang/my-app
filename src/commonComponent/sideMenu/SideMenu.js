import React from 'react';
import { 
   IonContent,
   IonMenu,
   IonHeader,
   IonList,
   IonMenuToggle,
   IonButton,
} from '@ionic/react';  
import { IonReactRouter  } from '@ionic/react-router';
import { useHistory, NavLink } from 'react-router-dom'; 

// function
import { logout } from '../../store/user/user';

// router url 
import { appMenuTree } from '../../router/router';

//css
import './sideMenu.css';


function SideMenu () {
   const history = useHistory();

   const menus = appMenuTree.depth1[0].depth2.map((menu, index) => (
      <li key={index}>
         <NavLink 
            to={menu.url} 
            className='ion-color-header-menu' 
            activeClassName='active'
         >
            {menu.title}
         </NavLink>
      </li>
   ));

   const logoutAction = () => {
      logout();
      history.push('/login');
    };

   return (
      <IonMenu content-id="main-content">
         <IonHeader>
            <div className='sideMenu-header'>
               <strong>
                  홍길동
                  <span>
                     님 
                  </span>
               </strong>
               <button
                  onClick={logoutAction}
               >
                  로그아웃
               </button>
            </div>
         </IonHeader>
         <IonContent scrollY={false}>
            <IonList>
               {/* <IonListHeader>
                  Navigate
               </IonListHeader> */}
               <IonMenuToggle auto-hide="false">
                  <ul className='side-nav'>
                     <li className='depth1'>
                       {appMenuTree.depth1[0].title}
                        <ul className='depth2'>
                           {menus}
                        </ul>
                     </li>
                  </ul>
               </IonMenuToggle>
            </IonList>
         </IonContent>
      </IonMenu>
   )
}

export default SideMenu;