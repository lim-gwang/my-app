import React, { useState, useEffect } from 'react';
import { IonIcon, IonButton, IonVirtualScroll, IonModal } from '@ionic/react';
import { chevronDown } from 'ionicons/icons';
import { useSelector } from 'react-redux';
import NewRegisterModal from '../RegisterModal/NewRegisterModal';
import './RegisterTable.css';

function RegisterTable({windowSize, thisDeskTop}) {
   const [ modalData, setModalData ] = useState({
      hide:false,
      id: null,
   });
   const stateItems = useSelector(state => state.itemReducer.items);
   const tableList = stateItems.map((item, index) => (
      <tr key={index}>
         <td>
            {item.RegisterNo}
         </td>
         <td>
            {item.Date}
         </td>
         <td>
            {item.Customer}
         </td>
         <td>
            <span className='text-ellipsis'>
               {item.Model}
            </span>
         </td>
         <td>
            {item.PartCount}
         </td>
         <td>
            {item.ModelSerialNo}
         </td>
         <td>
            <span className='resultBox-stand'>
               {item.Result}
            </span>
         </td>
         <td>
               <IonButton 
                  class='ion-color-tablebtn' 
                  color='ion-color-tablebtn'
                  onClick={()=> itemView(item.id)}
               >
                  상세보기
               <IonIcon 
                  icon={chevronDown} 
                  style={{
                     width:'1.3rem', 
                     marginLeft:'.5rem'
                  }}
               />
            </IonButton>
         </td>
      </tr>
   ));
   const itemView = id => {
      setModalData({
         hide:true,
         id
      })
   };


   const PcConents = () => (
      <table className='table list-table'>
         <colgroup>
            <col />
            <col />
            <col className='w10'/>
            <col />
            <col className='w10'/>
            <col />
            <col />
            <col />
         </colgroup>
         <thead>
            <tr>
               <th scope='col'>
                  Register No
               </th>
               <th scope='col'>
                  Date
               </th>
               <th scope='col'>
                  Customer
               </th>
               <th scope='col'>
                  Model
               </th>
               <th scope='col'>
                  Part Count
               </th>
               <th scope='col'>
                  Model Serial No
               </th>
               <th scope='col'>
                  Result
               </th>
               <th scope='col'>
                  View
               </th>
            </tr>
         </thead>
         <tbody>
            {tableList}
         </tbody>
      </table>
   )
   const MobileConents = () => (
      <ul className='mobile-List'>
         <li>
            <div>
               <strong>
                  Register No.
               </strong>
               <span>
                  CS202201030004
               </span>
            </div>
            <div>
               <strong>
                  Date
               </strong>
               <span>
                  2022-01-20
               </span>
            </div>
            <div>
               <strong>
                Device Model 
               </strong>
               <span>
                  aklsdmkasmd
               </span>
            </div>
            <div>
               <strong>
                  Result
               </strong>
               <span>
                  접수대기
               </span>
            </div>
            <button>
               View
            </button>
         </li>
      </ul>
   )

   const userTargetData = stateItems.filter(item=> item.id === modalData.id)[0];
   
   const closeModal = () => {
      setModalData({
         hide:false,
         id: null,
      });
   }
   return(
      <>
         <article className='register-body'>
            <p>
               총 
               <strong>
                  {stateItems.length}
               </strong>
               건의 접수가 되었습니다.
            </p>
            <div className='register-itemWrap'>
               {windowSize < 1024 || !thisDeskTop ? 
                  (
                     MobileConents()
                  ):(
                     PcConents()
                  )
               }
            </div>
         </article>
         <NewRegisterModal 
            toggleModal={modalData.hide}
            closeModal={closeModal}
         />
      </>
   )
}

export default RegisterTable;
