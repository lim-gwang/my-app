import React, { useState, useEffect } from 'react';
import { 
   IonButton,
   IonIcon,
   IonAlert,
} from '@ionic/react'; 

// ionicon
import { 
   removeOutline, 
   chevronUpOutline, 
   addOutline 
} from 'ionicons/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router';

// action
import { 
   addCsPart, 
   delCsPart, 
   csPartToggle,
   csRemoveToggle,
} from '../../store/actions/actions';


function RepairPart({disabled, match}) {
   const dispatch = useDispatch();
   const history = useHistory();
   const partSelector = state => state.deviceReducer;
   const csListSelector = state => state.CSListReducer;
   const partList = useSelector(partSelector);
   const csList = useSelector(csListSelector);
   const location = useLocation().pathname;
   const [showAlert2, setShowAlert2] = useState(false);
   const [ parts, setParts ] = useState([
      ...csList.Details,
   ]);
   useEffect(()=>{
      setParts([
         ...csList.Details
      ])
     
   }, [csList]);

   // CS 증상코드
   const getCsReasonList = partList.csReason.map((arg, index) => (
      <option value={arg.Code} key={index}>
         {arg.CodeName}
      </option>
   ));
   // 배송방법
   const getShippingList = partList.shipping.map((arg, index)=> (
      <option value={arg.Code} key={index}>
         {arg.CodeName}
      </option>
   ));
   // 배송
   const getShipment = partList.shipment.map((arg, index)=> (
      <option value={arg.Code} key={index}>
         {arg.CodeName}
      </option>
   ));

   const onHandleChange = (index, name) => e => {   
      setParts(state => {
         state[index][name] = e.target.value
         return [...state]
      });

   };

   const formCheck = () => {
      let check = true;
      for (let i = 0; i < parts.length; i++) {
         if((parts[i].Product && parts[i].ReasonID && parts[i].ShipmentID && parts[i].RMemo) == false) {
            setShowAlert2(true);
            check = false;
            break;
         }
      };
      
      if(check) {
         dispatch(csRemoveToggle());
         history.push(`/home/repair/step3/${match}`);
      }
   };


   const [ img, setImg ] = useState(null);
   const [ previewImg, setPreviewImg ] = useState(null);
   
   const onFileUpload = e => {
      let reader = new FileReader()

      if(e.target.files[0]) {
         reader.readAsDataURL(e.target.files[0])
         
         setImg([...img, e.target.files[0]])
      }

      reader.onloadend = () => {
         const previewImgUrl = reader.result

         if(previewImgUrl) {
            setPreviewImg([...previewImg, previewImgUrl])
         }
        
      }
      
   };

   return(
      <>
         <section className='form-section'>
            <article className='summary-length-form'>
               Summary <span>{csList.Details.length} Items</span>
            </article>
            {
               parts.map((arg, index)=> (
                  <article 
                     key={index}
                     className={arg.toggle ? 'parts-form active' : 'parts-form'} 
                     style={{marginBottom: '20px'}}
                  >
                     <button onClick={() => dispatch(csPartToggle(index))}>
                        <strong>
                           Item No.<span>{index + 1}</span>
                        </strong>
                        <div>
                           {
                              disabled === false ? (
                                 <IonButton 
                                    class='ion-color-remove-item'
                                    color='ion-color-remove-item'
                                    onClick={ (e)=>  {
                                       e.stopPropagation();
                                       dispatch(delCsPart(index));
                                    }}
                                 >
                                    <IonIcon icon={removeOutline}/>
                                 </IonButton>
                              ) : (
                                 <></>
                              )
                           }
                           <span className='toggle-area'>
                              <IonIcon icon={chevronUpOutline}/>
                           </span>
                        </div>
                     </button>
                     <div className='parts-body'>
                        <div className="custom-forms">
                           <label htmlFor={`Product${index}`}>
                              부품<span>*</span>
                           </label>
                           <select
                              id={`Product${index}`}
                              disabled={disabled}
                              value={arg.Product || ''}
                              onChange={onHandleChange(index, 'Product')}
                           >
                              <option value=''>
                                 선택해주세요.
                              </option>
                              <option value="1">1</option>
                           </select>
                        </div>
                        <div className="custom-forms">
                           <label htmlFor={`SerialNo${index}`}>
                              부품시리얼번호
                           </label>
                           <input 
                              id={`SerialNo${index}`}
                              type='text' 
                              value={arg.SerialNo}
                              disabled={disabled}
                              onChange={onHandleChange(index, 'SerialNo')}
                              placeholder='부품시리얼번호'
                            />
                        </div>
                        <div className="custom-forms">
                           <label htmlFor={`ReasonID${index}`}>
                              증상<span>*</span>
                           </label>
                           <select 
                              id={`ReasonID${index}`}
                              value={arg.ReasonID || ''}
                              onChange={onHandleChange(index, 'ReasonID')}
                              disabled={disabled}
                           >
                              <option value=''>
                                 선택해주세요.
                              </option>
                              {getCsReasonList}
                           </select>
                        </div>
                        <div className="custom-forms">
                           <label htmlFor={`ShipmentID${index}`}>
                              배송
                           </label>
                           <select 
                              id={`ShipmentID${index}`}
                              disabled={disabled}
                              value={arg.ShipmentID || ''}
                              onChange={onHandleChange(index, 'ShipmentID')}
                           >
                              <option value=''>
                                 선택해주세요.
                              </option>
                              {getShipment}
                           </select>
                        </div>
                        <div className="custom-forms">
                           <label htmlFor={`ShippingID${index}`}>
                              배송방법<span>*</span>
                           </label>
                           <select 
                              id={`ShippingID${index}`}
                              disabled={disabled}
                              value={arg.ShippingID || ''}
                              onChange={onHandleChange(index, 'ShippingID')}
                           >
                              <option value=''>
                                 선택해주세요.
                              </option>
                              {getShippingList}
                           </select>
                        </div>
                        <div className="custom-forms">
                           <label htmlFor={`ShipCode${index}`}>
                              운송장번호
                           </label>
                           <input 
                              id={`ShipCode${index}`}
                              type='text' 
                              value={arg.ShipCode}
                              disabled={disabled} 
                              onChange={onHandleChange(index, 'ShipCode')}
                              placeholder='운송장번호'
                           />
                        </div>
                        <div className="custom-forms">
                           <label htmlFor={`RMemo${index}`}>
                              요청사항<span>*</span>
                           </label>
                           <textarea 
                              id={`RMemo${index}`}
                              disabled={disabled} 
                              value={arg.RMemo}
                              onChange={onHandleChange(index, 'RMemo')}
                              placeholder='요청사항을 입력하세요'
                           />
                        </div>
                        <div className="custom-forms">
                           <strong className='forms-title'>
                              첨부파일<span>*</span>
                           </strong>
                           <div className='files-wrap'>
                              <label className='upload-btn' htmlFor={`file${index}`}>
                                 <span>1</span>/5
                              </label>
                              <input 
                                 type="file" 
                                 id={`file${index}`}
                                 className="hidden" 
                                 accept='.jpg, .jpeg, .gif, .png' 
                                 multiple={true}
                                 onChange={onFileUpload}
                              />
                              <ul className='file-list'>
                                 
                              </ul>
                           </div>
                        </div>
                     </div>
                  </article>
               ))
            }
         </section>
         {
            disabled === false ? (
               <div className='part-area-add'>
                  <IonButton
                     class='ion-color-part-area-add'
                     color='ion-color-part-area-add'
                     onClick={()=> dispatch(addCsPart())}
                  >
                  <IonIcon icon={addOutline}/>
                     ADD
                  </IonButton>
               </div>
            ) : (
               <></>
            )
         }
         <IonAlert
            isOpen={showAlert2}
            onDidDismiss={() => setShowAlert2(false)}
            cssClass='my-custom-class'
            header={''}
            subHeader={''}
            message={'필수입력사항을 입력하지 않았습니다.'}
            buttons={['확인']}
         />
         <div slot='fixed' className='app-btn-wrap half'>
            <IonButton 
               class='app-tab-btn ion-color-tab-back' 
               color='ion-color-tab-back'
               routerDirection='back' 
               onClick={()=> history.goBack()}
            >
               이전
            </IonButton>
            <IonButton 
               class='app-tab-btn' 
               onClick={() => formCheck()}
            >
               다음
            </IonButton>
         </div>
      </>
   )
}

export default RepairPart;