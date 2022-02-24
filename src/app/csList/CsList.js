import React, { useState, useEffect } from 'react';
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

import { useSelector, useDispatch } from 'react-redux';

// css 
import './csList.css';
import '../../style/app.css';

// api ul
import { CS_LIST } from '../../API/apiUrl';

// action
import { clearSearch } from '../../store/actions/actions';
import { csList } from '../../store/user/user';

//component
import Nav from '../nav/Nav';
import SideMenu from '../../commonComponent/sideMenu/SideMenu';
import Header from '../../commonComponent/header/Header';

const getSaerchData = state => state.itemReducer.searchFilter;

// let today = new Date();   
// let year = String(today.getFullYear()); // 년도
// let month = ("0" + (today.getMonth() + 1)).slice(-2) ; // 월
// let date = ("0 "+ today.getDate()).slice(-2); // 날짜
// let todayString = `${year}-${month}-${date}`;

function CsList() {
   const dispatch = useDispatch();
   const searchData = useSelector(getSaerchData);
   const [ dateBtns , setDateBtns ] = useState([
      {
         title: "오늘",
         fnCode: "today",
         done: false,
      },
      {
         title: "1개월",
         fnCode: "month-1",
         done: false,
      },
      {
         title: "3개월",
         fnCode: "month-3",
         done: false,
      },
      {
         title: "6개월",
         fnCode: "month-6",
         done: false,
      },
      {
         title: "9개월",
         fnCode: "month-9",
         done: false,
      },
   ]);
   const [ search, setSearch ] = useState({
      ...searchData,
   });
   
   useEffect(()=> {
      setSearch({
         ...searchData,
      });
      csList(search);
   }, [searchData]);


   const dateSelectBtn = dateBtns.map((arg, index) => {
      let fnDate = arg.fnCode;

      return (
            <li className={arg.done ? 'items active' : 'items'} key={index}>
               <button onClick={() => onClickData(fnDate, index)}>
                  {arg.title}
               </button>
            </li>
         )
   });
   const removeDateBtn = dateBtns.map(arg => {
      return {
         ...arg,
         done: false,
      }
   });
   const prevDate = date => {
      let d = new Date(); 
      let monthOfYear = d.getMonth();
      d.setMonth(monthOfYear - date);

      let year = d.getFullYear();
      let month = ("0" + (d.getMonth() + 1)).slice(-2);
      let day = ("0" + (d.getDate())).slice(-2);

      return `${year}-${month}-${day}`
   };
   const onClickData = (value, id) => {
      const filterDate = dateBtns.map((arg,index) => {
         if(index === id) {
            return {
               ...arg,
               done: !arg.done,
            }
         } else {
            return {
               ...arg,
               done: false,
            }
         }
      });
      setDateBtns(filterDate);
      switch(value) {
         case "today": 
            setSearch({
               ...searchData,
               date1: prevDate(0),
               date2: prevDate(0),
            });
            break; 
         case "month-1":
            setSearch({
               ...searchData,
               date1: prevDate(1),
               date2: prevDate(0),
            });
            break;
         case "month-3":
            setSearch({
               ...searchData,
               date1: prevDate(3),
               date2: prevDate(0),
            });
            break;
         case "month-6":
            setSearch({
               ...searchData,
               date1: prevDate(6),
               date2: prevDate(0),
            });
            break;
         case "month-9":
            setSearch({
               ...searchData,
               date1: prevDate(9),
               date2: prevDate(0),
            });
            break;
         default:
            setSearch({
               ...searchData,
            });
      }
   };
   const onChangeData = name => e => {
      setSearch({
         ...search,
         [name]: e.target.value,
      });
   };


   return (
      <>
         <SideMenu/>
         <IonPage id="main-content">
         <Header/> 
            <IonContent 
               class='app-content content-bg'
               scrollY={true}
               scrollEvents={true}
               onIonScrollStart={() => {}}
               onIonScroll={() => {}}
               onIonScrollEnd={() => {}}
            >
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
                                 type="button"
                                 onClick={()=> dispatch(clearSearch())}
                              >
                                 초기화
                              </button> 
                           </div>
                           <div className='filter-wrap'>
                              <div className='date-inputs'>
                                 <span>
                                    <input 
                                       type='date'
                                       value={search.date1}
                                       name="date1"
                                       onClick={() => setDateBtns(removeDateBtn)}
                                       onChange={onChangeData('date1')}
                                    />
                                 </span>                              
                                 <span>
                                    ~
                                 </span>
                                 <span>
                                    <input
                                       type='date'
                                       value={search.date2}
                                       name="date2"
                                       onClick={() => setDateBtns(removeDateBtn)}
                                       onChange={onChangeData('date2')}
                                    />
                                 </span>
                              </div>
                              <ul className='date-tab'>
                                 {dateSelectBtn}
                                 {/* <li className='items'>
                                    <button onClick={() => onClickData('today')}>
                                       오늘
                                    </button>
                                 </li>
                                 <li className='items'>
                                    <button onClick={() => onClickData('month-1')}>
                                       1개월전
                                    </button>
                                 </li>
                                 <li className='items'>
                                    <button onClick={() => onClickData('month-3')}>
                                       3개월
                                    </button>
                                 </li>
                                 <li className='items'>
                                    <button onClick={() => onClickData('month-6')}>
                                       6개월
                                    </button>
                                 </li>
                                 <li className='items'>
                                    <button onClick={() => onClickData('month-9')}>
                                       9개월
                                    </button>
                                 </li> */}
                              </ul>
                           </div>
                        </div>
                        <IonButton
                           class='ion-search-submit'
                           type="submit"
                           onClick={()=> csList(search)}
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