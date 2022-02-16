import React, { useState, useEffect } from 'react';
import { 
   IonHeader,
   IonToolbar,
   IonButtons,
   IonButton,
   IonIcon,
   IonMenuToggle,
} from '@ionic/react';
import { menu } from 'ionicons/icons'
import { Link, Route, useHistory, NavLink } from 'react-router-dom';

// function
import { logout } from '../../store/user/user';

// css
import '../../commonComponent/header/header.css';

const homeMenu = {
   menu : [
      {
         title: 'CS관리',
         url: '/home/menu1',
      },
      {
         title: '재고현황',
         url: '/home/menu2',
      }
   ]
};

export const menus = homeMenu.menu.map((menu, index) => {
   return (
      <li key={index}>
         <NavLink 
            to={menu.url} 
            className='ion-color-header-menu' 
            activeClassName='active'
         >
            {menu.title}
         </NavLink>
      </li>
   )
})

function Header({windowSize, thisDeskTop}) {
   const history = useHistory();

   const logoutAction = () => {
      logout();
      history.push('/login');
    }

   return(
      <>
         <IonHeader>
            <IonToolbar>
               <IonButtons slot="start">
                  <IonMenuToggle>
                     <IonButton>
                        <IonIcon icon={menu} style={{color:"#333"}}/>
                     </IonButton>
                  </IonMenuToggle>
               </IonButtons>
               <div className='header-layout dis-flex'>
                  <h1 className='logo' style={{width: '118px'}}>
                     <img src="https://classys.com/wp-content/uploads/2018/09/clsaays_logo2.png" alt="classys"/>
                  </h1>
                  {windowSize > 1024 && thisDeskTop ? (
                     <div className='menus header-layout__menus dis-flex'>
                      <ul className='route-list menus__route-list dis-flex'>
                         {menus}
                      </ul>
                      <ul className='userMenu-list menus__userMenu-list dis-flex'>
                         <li>
                            <NavLink to='/home/myPage' 
                               className='ion-color-header-menu' 
                               activeStyle={{color:'#1776E1'}}
                            >
                               마이페이지
                            </NavLink>
                         </li>
                         <li>
                            <button 
                               className='ion-color-header-menu' 
                               onClick={()=> logoutAction()}
                            >
                               로그아웃
                            </button>
                         </li>
                      </ul>
                   </div>
                  ) : (
                     <></>
                  )}
                 
               </div>
            </IonToolbar>
         </IonHeader>
      </>
   )
}

export default Header;