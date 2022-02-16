import React, { useState } from 'react';
import { 
   IonButton,
} from '@ionic/react';


//router url
import { subRouterPath } from '../../router/router';

//css
import './Nav.css';

function Nav() {
   const [ open, setOpen ] = useState(false);

   const toggleNav = () => {
      setOpen(!open);
   }

   return (
      <div className='fix-nav'>
         <button onClick={toggleNav}>
            이미지!
         </button>
         <div className={open ? 'nav-link open' : 'nav-link'}>
            <IonButton
               class='ion-color-nav'
               color='ion-color-nav'
               routerLink={subRouterPath.page2}
               onClick={() => setOpen(false)}
            >
               CS요청
            </IonButton>
         </div>
      </div>
   )
}

export default Nav;