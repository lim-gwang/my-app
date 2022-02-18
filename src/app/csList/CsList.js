import React, { useState } from 'react';
import { 
   IonPage,
   IonContent,
   IonRouterOutlet,
   IonModal,
   IonButton,
   IonDatetime,
   IonPopover,
   IonInput,
   IonItem,
   IonRouterLink
} from '@ionic/react';  

//css 
import './csList.css';
import '../../style/app.css';

//component
import Nav from '../nav/Nav';
import SideMenu from '../../commonComponent/sideMenu/SideMenu';
import Header from '../../commonComponent/header/Header';



function CsList() {
   const [ search, setSearch ] = useState({
      date1: null,
      date2: null,
      device: null,
      serial: null,
      customer: null,
      status: null,
      quick: null,
      count: null
   });

   const onChangeData = value => e => {
      setSearch({
         ...search,
         [value]: e.target.value,
      });
   };

   return (
      <>
         <SideMenu/>
         <IonPage id="main-content">
         <Header/> 
            <IonContent class='app-content content-bg'>
               <h2 className='list-title'>Register List</h2>
               <section className='form-section'>
                  <article className='form-header'>
                     <div className='header-top'>
                        <strong>
                           검색조건 설정
                        </strong>
                        
                     </div>
                     <div className='header-mid'>
                        <div className='reset-area'>
                           <span>
                              접수일
                           </span>
                           <button
                              className='reset-btn'
                           >
                              초기화
                           </button> 
                        </div>
                        <div className='filter-wrap'>
                           <div className='date-inputs'>
                              <span>
                                 <input 
                                    type='date'
                                    onChange={onChangeData('date1')}
                                 />
                              </span>                              
                              <span>
                                 ~
                              </span>
                              <span>
                                 <input
                                    type='date'
                                    onChange={onChangeData('date2')}
                                 />
                              </span>
                           </div>
                           <ul className='date-tab'>
                              <li className='items'>
                                 <input type="radio" className='hidden' name='days' id='today' defaultChecked={true}/>
                                 <label htmlFor='today'>
                                    오늘
                                 </label>
                              </li>
                              <li className='items'>
                                 <input type="radio" className='hidden' name='days' id='month-1'/>
                                 <label htmlFor='month-1'>
                                    1개월
                                 </label>
                              </li>
                              <li className='items'>
                                 <input type="radio" className='hidden' name='days' id='month-3'/>
                                 <label htmlFor='month-3'>
                                    3개월
                                 </label>
                              </li>
                              <li className='items'>
                                 <input type="radio" className='hidden' name='days' id='month-6'/>
                                 <label htmlFor='month-6'>
                                    6개월
                                 </label>
                              </li>
                              <li className='items'>
                                 <input type="radio" className='hidden' name='days' id='month-9'/>
                                 <label htmlFor='month-9'>
                                    9개월
                                 </label>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <IonButton
                        class='ion-search-submit'
                     >
                        검색
                     </IonButton>
                  </article>
                  <article className='form-body'>
                     <p className='list-count-txt'>
                        총
                        <span>
                           0
                        </span>
                        건의 접수가 있습니다.
                     </p>
                     <article className='form-list'>
                        <div className='form-list-item'>
                           <IonRouterLink
                              routerLink=''
                           >
                              <div className='item-header'>
                                 <span className='item-date'>
                                    2022-01-20
                                 </span>
                                 <span className='item-view'>
                                    View
                                 </span>
                              </div>
                              <ul className='item-contents'>
                                 <li>
                                    <strong>
                                       Register No.
                                    </strong>
                                    <div>
                                       <span>
                                          CS202020202020
                                       </span>
                                    </div>
                                 </li>
                                 <li>
                                    <strong>
                                       Device Model 
                                    </strong>
                                    <div>
                                       <span>
                                          abcdefghijklmnop
                                       </span>
                                    </div>
                                 </li>
                                 <li>
                                    <strong>
                                       Result
                                    </strong>
                                    <div>
                                       <span className='result-box'>
                                          접수대기
                                       </span>
                                    </div>
                                 </li>
                              </ul>
                           </IonRouterLink>      
                        </div>
                        <div className='form-list-item'>
                           <IonRouterLink
                              routerLink=''
                           >
                              <div className='item-header'>
                                 <span className='item-date'>
                                    2022-01-20
                                 </span>
                                 <span className='item-view'>
                                    View
                                 </span>
                              </div>
                              <ul className='item-contents'>
                                 <li>
                                    <strong>
                                       Register No.
                                    </strong>
                                    <div>
                                       <span>
                                          CS202020202020
                                       </span>
                                    </div>
                                 </li>
                                 <li>
                                    <strong>
                                       Device Model 
                                    </strong>
                                    <div>
                                       <span>
                                          abcdefghijklmnop
                                       </span>
                                    </div>
                                 </li>
                                 <li>
                                    <strong>
                                       Result
                                    </strong>
                                    <div>
                                       <span className='result-box'>
                                          접수대기
                                       </span>
                                    </div>
                                 </li>
                              </ul>
                           </IonRouterLink>      
                        </div>
                     </article>
                  </article>
               </section>
               
            <Nav/>
            </IonContent>
         </IonPage>
      </>
   )
}

export default CsList;