import React from 'react';

import { 
   IonPage,
   IonContent,
   IonButton,
   IonIcon
} from '@ionic/react';  

// ionicon
import { 
   addOutline 
} from 'ionicons/icons';

// router
import { subRouterPath } from '../../router/router';

// component
import AppHeader from '../appHeader/AppHeader';
import RegisterParts from '../component/RegisterParts';

function NewRegisterStep1({title}) {
   return (
       <IonPage>
         <AppHeader title={title}/>
            <IonContent class='app-content tabBtn-wraper'>
               <h1 className='list-title' style={{color: '#1776e1'}}>
                  <span>STEP2.</span> 부품추가 
               </h1>
               <RegisterParts/>
               <div className='part-area-add'>
                  <IonButton
                     class='ion-color-part-area-add'
                     color='ion-color-part-area-add'
                  >
                     <IonIcon icon={addOutline}/>
                     ADD
                  </IonButton>
               </div>
               <div slot='fixed' className='app-btn-wrap half'>
                  <IonButton 
                     class='app-tab-btn ion-color-tab-back' 
                     color='ion-color-tab-back'
                     routerDirection='back' 
                     routerLink='/home/menu2'
                  >
                     이전
                  </IonButton>
                  <IonButton class='app-tab-btn' routerLink='/home/menu2/step3'>
                     다음
                  </IonButton>
               </div>
            </IonContent>
      </IonPage>
   )
};

export default NewRegisterStep1;