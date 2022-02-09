import React, { useState, useEffect } from 'react';
import { 
   IonModal,
   IonContent,
   IonButton,
   IonLabel,
   IonInput,
   IonIcon
} from '@ionic/react';
import { close } from 'ionicons/icons';
import './RegisterModal.css';


function NewRegisterModal({toggleModal, closeModal}) {
   const [ newData, setNewData ] = useState({

   });
 
   return(
      <IonModal
         class='custom-modal'
         isOpen={toggleModal}
         onDidDismiss={()=> closeModal()}
      >
         <div className='modal-wrap'>
            <section className='modal-header'>
               <h1>
                  Register No: CS111111 [2020-02-01 15:03:00]
               </h1>
               <article>
                  <IonButton class='modalBtn-cancel'>
                     Cancel  
                  </IonButton>
                  <IonButton class='modalBtn-save'>
                     Save 
                  </IonButton>
                  <IonButton
                     class='modalBtn-close'
                     onClick={()=> closeModal()}
                  >
                     <IonIcon icon={close}/>
                  </IonButton>
               </article>
            </section>
            <section className='modal-body'>
               <article className="modal-form">
                  <ul>
                     <li>
                        <IonLabel>
                           Device Model
                        </IonLabel>
                        <IonInput disabled={true}/>
                     </li>
                  </ul>
               </article>
               <article className='modal-items'>
                  <div className='itemCount-area'>
                     Summary 
                     <span>
                        1 Items
                     </span>
                  </div>
                  <ul className='items-list'>
                     <li className=''>

                     </li>
                  </ul>
               </article>
            </section>
         </div>
      </IonModal>
   );
}

export default NewRegisterModal;