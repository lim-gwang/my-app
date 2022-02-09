import { IonPage, IonContent, IonButton } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import RegisterTable from '../../components/registerTable/RegisterTable';
import './RegisterList.css';

import NewRegisterModal from '../../components/RegisterModal/NewRegisterModal';

function RegisterList({windowSize, thisDeskTop}) {
   return (
      <IonPage>
         <IonContent class="ion-layout-padding bg-color1">
            <div className="title-wrap dis-flex space-between">
               <h2 className="pageTitle">
                  Register List
               </h2>
               <IonButton class='ion-color-reception' color='ion-color-reception'>
                  CS 요청
               </IonButton>
            </div>
            <section>
               <SearchBar/>
               <RegisterTable windowSize={windowSize} thisDeskTop={thisDeskTop}/>
            </section>
         </IonContent> 
      </IonPage>
   )
}

export default RegisterList;