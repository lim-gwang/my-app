import React, { useState, useEffect } from 'react';
import { 
   IonModal,
   IonContent,
   IonButton,
   label,
   input,
   IonIcon,
   IonTextarea,
   IonSelect,
   IonSelectOption,
   IonItemOption,
   IonInput,
} from '@ionic/react';
import { close, removeOutline, chevronDown, add } from 'ionicons/icons';
// import { FileUploader } from "react-drag-drop-files";
import { Dropzone, FileItem } from "@dropzone-ui/react";
import './RegisterModal.css';


const fileTypes =['jpg', 'png', 'pdf', 'mp4'];

function NewRegisterModal({toggleModal, closeModal}) {
   const [ files, setFiles ] = useState([]);
   const [ open, setOpen ] = useState(false);

   const [ newData, setNewData ] = useState({
      selectedFiles: null,
   });
   const updateFiles = (file) => {
      let test = file.target.files
      setFiles(test);
    };

   console.log(Array.isArray(files), files);

    const toggleItem = () => {
      setOpen(open=> !open)
    }

   const submitForm = e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', files);

      for (let key of formData.keys()) {
         console.log(key);
       }
       
       // FormData의 value 확인
       for (let value of formData.values()) {
         console.log(value);
       }
   }
   const onDelete = (e, id) => {
      setFiles(files.filter((x) => x.id !== id));
      e.stopPropagation();
    };

   return(
      <IonModal
         class='custom-modal'
         isOpen={toggleModal}
         isOpen={true}
         onDidDismiss={()=> closeModal()}
      >
         <div className='modal-wrap'>
            <section className='modal-header'>
               <h1>
                  Register No: CS111111 [2020-02-01 15:03:00]
               </h1>
               <article>
                  <button 
                     className='btn cancel'
                  >
                     Cancel  
                  </button>
                  <button
                     className='btn save'
                  >
                     Save 
                  </button>
                  <IonButton
                     class='ion-color-modal-close'
                     color='ion-color-modal-close'
                     onClick={()=> closeModal()}
                  >
                     <IonIcon icon={close} class='close-icon'/>
                  </IonButton>
               </article>
            </section>
            <section className='modal-body'>
               <article className="modal-form">
                  <ul>
                     <li className="custom-formItem">
                        <label className="essential">
                           Device Model
                           <span>
                              *
                           </span>
                        </label>
                        <input 
                           type="text"
                           placeholder='장비'
                           disabled={false}
                        />
                     </li>
                     <li className="custom-formItem">
                        <label className="essential">
                            Serial No
                            <span>
                              *
                           </span>
                        </label>
                        <input 
                           type="text"
                           placeholder='장비시리얼번호'
                           disabled={false}
                        />
                     </li>
                     <li className="custom-formItem">
                        <label className="essential">
                           Customer
                           <span>
                              *
                           </span>
                        </label>
                        <input 
                           type="text"
                           placeholder='실사용자명'
                           disabled={false}
                        />
                     </li>
                     <li className="custom-formItem">
                        <label className="essential">
                           Requirement
                           <span>
                              *
                           </span>
                        </label>
                        <textarea 
                           placeholder='접수내용'
                           disabled={false}
                        />
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
                     <li className={open ? '' : 'close'}>
                        <div className='itemHeader'>
                           <strong className='title'>
                              Item No.
                              <span>
                                 1
                              </span>
                           </strong>
                           <div className='btnWrap'>
                              <button
                                 className='itemBtn delete'
                              >
                                 <IonIcon icon={removeOutline}></IonIcon>
                              </button>
                              <button
                                 className='itemBtn toggle'
                                 onClick={toggleItem}
                              >
                                 <IonIcon icon={chevronDown}></IonIcon>
                              </button>
                           </div>
                        </div>
                        <div className='itemBody'>
                           <div>
                              <span>
                                 <label>
                                    PART
                                    <span>
                                       *
                                    </span>
                                 </label>
                                 <input
                                    type='text'
                                    disabled={false}
                                 />
                              </span>
                              <span>
                                 <label>
                                    Serial No
                                 </label>
                                 <input
                                    type='text'
                                    disabled={false}
                                 />
                              </span>
                              <span>
                                 <label>
                                    Resason
                                 </label>
                                 <input 
                                    type='text'
                                    disabled={false}
                                 />
                              </span>
                           </div>
                           <div>
                           <span>
                              <label>
                                 배송
                              </label>
                              <input
                                 type='text'
                                 disabled={false}
                              />
                           </span>
                           <span>
                              <label>
                                 배송방법
                                 <span>
                                    *
                                 </span>
                              </label>
                              <input
                                 type='text'
                                 disabled={false}
                              />
                           </span>
                           <span>
                              <label>
                                 운송장번호
                              </label>
                              <input 
                                 type='text'
                              />
                           </span>
                        </div>
                        <div>
                           <span>
                              <label>
                                 요청사항
                                 <span>
                                    *
                                 </span>
                              </label>
                              <textarea />
                           </span>
                        </div>
                        <div className='col-ful'>
                           <strong className='file-title'>
                              첨부파일
                              <span>
                                 *
                              </span>
                           </strong>
                           <div>
                              <form id='test'>
                                 <div>
                                    <input 
                                       type='file' 
                                       maxLength='5' 
                                       multiple={true} 
                                       accept={fileTypes} 
                                       onChange={(e)=> updateFiles(e)}
                                    />

                                 </div>
                              </form>
                           </div>
                        </div>
                        </div>
                        
                     </li>
                  </ul>
                  <div className="btnWrap line">
                     <button
                        className='additem-btn'
                     >
                        <IonIcon icon={add}></IonIcon>
                        ADD
                     </button>
                  </div>
               </article>
            </section>
         </div>
      </IonModal>
   );
}

export default NewRegisterModal;