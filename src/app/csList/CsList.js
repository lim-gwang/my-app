import React, { useState, useEffect, useLayoutEffect } from 'react';
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

// action
import { clearSearch } from '../../store/actions/actions';
import { csList } from '../../store/user/user';

//component
import Nav from '../nav/Nav';
import SideMenu from '../../commonComponent/sideMenu/SideMenu';
import Header from '../../commonComponent/header/Header';
import Loading from '../../loading/Loding';



function CsList() {
   const dispatch = useDispatch();
   const getSaerchData = state => state.itemReducer.searchFilter;
   const getCsListData = state => state.itemReducer.items;
   const searchData = useSelector(getSaerchData);
   const csListData = useSelector(getCsListData);
   const [ searchLoading, setSearchLoading ] = useState(false);
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
      searchSubmit();

   }, []);
   
   const searchSubmit = async () => {

      try {
         setSearchLoading(true);

         await dispatch(csList(search));

      } catch(err) {

         console.log(err);
      }
      
      setSearchLoading(false);
   }

   // list
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
   
   // event 
   const prevDate = date => {
      let d = new Date(); 
      let monthOfYear = d.getMonth();
      d.setMonth(monthOfYear - date);

      let year = d.getFullYear();
      let month = ("0" + (d.getMonth() + 1)).slice(-2);
      let day = ("0" + (d.getDate())).slice(-2);

      return String(`${year}-${month}-${day}`)
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
               date1: `${prevDate(6)}`,
               date2: `${prevDate(0)}`,
            });
            break;
         case "month-9":
            setSearch({
               ...searchData,
               date1: `${prevDate(9)}`,
               date2: `${prevDate(0)}`,
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


   let list;

   if(csListData.length) {
      list = csListData.map((arg, index) => (
         <div className='form-list-item' key={index}>
            <IonRouterLink
               routerLink={`/home/detail/${arg.Code}`}
            >
               <div className='item-header'>
                  <span className='item-date'>
                     {arg.DateRequest.split('T')[0]}
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
                           {arg.Code}
                        </span>
                     </div>
                  </li>
                  <li>
                     <strong>
                        Device Model 
                     </strong>
                     <div>
                        <span>
                           {arg.ProductVal}
                        </span>
                     </div>
                  </li>
                  <li>
                     <strong>
                        Result
                     </strong>
                     <div>
                        <span className={`result-box ${arg.StatusID}`}>
                           {arg.StatusVal}
                        </span>
                     </div>
                  </li>
               </ul>
            </IonRouterLink>      
         </div>
      ));
   } else {
      list = <p style={{textAlign:'center',marginTop:'100px'}}>접수내역이 없습니다.</p>
   }

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
                                 onClick={(e)=> {
                                    setDateBtns(removeDateBtn);
                                    dispatch(clearSearch());
                                    e.stopPropagation();
                                 }}
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
                              </ul>
                           </div>
                        </div>
                        <IonButton
                           class='ion-search-submit'
                           onClick={searchSubmit}
                        >
                           검색
                        </IonButton>
                     </article>

                  <article className='form-body'>
                     <p className='list-count-txt'>
                        총
                        <span>
                          {csListData.length && csListData.length }
                        </span>
                        건의 접수가 있습니다.
                     </p>
                     <article className='form-list'>
                       {list}
                     </article>
                  </article>
               </section>
               <Nav/>
               <Loading hide={searchLoading}/>
            </IonContent>
         </IonPage>
      </>
   )
}

export default CsList;