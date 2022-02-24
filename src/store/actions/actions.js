import {
   ADD_LIST,
   SEARCH,
   PROCESS_LIST,
   USER_DATA,
   DEVICE,
   DEVICE_PART,
   CS_REASON,
   SHIPPING,
   SHIPMENT,
   ADD_CS_DEVICE,
   ADD_CS_PART,
   DEL_CS_PART,
   CS_PART_TOGGLE,
   CS_CLEAR,
   CS_PART_REMOVE_TOGGLE,
   CLEAR_SEARCH,
} from './action_type';

/******************************
      유저 정보 관련 action
*******************************/
// 유저 데이터 저장
export const userData = data => ({
   type: USER_DATA,
   payload: data,
})
// CS 리스트 추가
export const addList = list => ({
   type: ADD_LIST,
   payload: list,
});
// CS 검색
export const search = data => ({
   type: SEARCH,
   payload: data,
});
export const clearSearch = () => ({
   type: CLEAR_SEARCH,
   payload: {
      date1: "",
      date2: "",
      device: "",
      serial: "",
      customer: "",
      status: "",
      quick: "",
      current: 1,
   }
})
// CS 처리 유무
export const processList = id => ({
   type: PROCESS_LIST,
   payload: id,
});
// export const filterList = id => ({
//    type: FILTER_LIST,
//    payload: id,
// })

/******************************
    CS 요청 등록 및 수정 action
*******************************/
export const addCsDevice = list => ({
   type: ADD_CS_DEVICE,
   payload: list,
});
export const addCsPart = () => ({
   type: ADD_CS_PART,
   payload: {
      toggle: true,
      AllowNew:true,
      Code:"",
      Product:"",
      SerialNo:"",
      ReasonID:null,
      ShipmentID:null,
      ShippingID:null,
      ShipCode:"",
      RMemo:""
   },
});
export const delCsPart = index => ({
   type: DEL_CS_PART,
   payload: index,
});
export const csPartToggle = index =>({
   type: CS_PART_TOGGLE,
   payload: index,
});
export const csRemoveToggle = () => ({
   type: CS_PART_REMOVE_TOGGLE,
});
export const csClear = () => ({
   type: CS_CLEAR,
   payload: {
      AllowNew: true,
      Code:"",
      AgencyID: 1,
      CustomerName:"",
      ProductID:"",
      SerialNo:"",
      Rmemo:"",
      Details: [
         {
            toggle: true,
            AllowNew:true,
            Code:"",
            Product:"",
            SerialNo:"",
            ReasonID:null,
            ShipmentID:null,
            ShippingID:null,
            ShipCode:"",
            RMemo:""
         } 
      ]
   }
});
/******************************
    장비 및 부품 종류 action
*******************************/
// 장비 종류
export const device = list => ({
   type: DEVICE,
   payload: list,
});
// 부품종류
export const devicePart = list =>({
   type: DEVICE_PART,
   payload: list,
});
// CS 증상코드
export const csReason = list =>({
   type: CS_REASON,
   payload: list,
});
// 배송방법
export const shipping = list =>({
   type: SHIPPING,
   payload: list,
});
// 배송
export const shipment = list =>({
   type: SHIPMENT,
   payload: list,
});


/******************************
   유저 정보 및 CS 목록 reducer
*******************************/
   // 유저 정보 및 CS 목록 초기상태
const initialState = {
   user: {},
   items: [],
   searchFilter: {
      date1: "",
      date2: "",
      device: "",
      serial: "",
      customer: "",
      status: "",
      quick: "",
      current: 1,
   },
}
export const itemReducer = ( state = initialState, action ) => {
   switch (action.type) {
      case USER_DATA:
         return {
            ...state,
            user: action.payload,
         }
      case ADD_LIST:
         return {
            ...state,
            items: action.payload,
         }
      case SEARCH:
         return {
            ...state,
            searchFilter: action.payload,
         }
      case CLEAR_SEARCH: 
         return {
            ...state,
            searchFilter: action.payload,
         }
      default:
         return state;
   }
}

/******************************
   CS 요청 등록 및 수정 reducer
*******************************/
   // CS 요청 등록 및 수정 초기상태
const CSListState = {
      AllowNew: true,
      Code:"",
      AgencyID: 1,
      CustomerName:"",
      ProductID:"",
      SerialNo:"",
      Rmemo:"",
      Details: [
         {
            toggle: true,
            AllowNew:true,
            Code:"",
            Product:"",
            SerialNo:"",
            ReasonID:null,
            ShipmentID:null,
            ShippingID:null,
            ShipCode:"",
            RMemo:""
         } 
      ]
};
export const CSListReducer = (state = CSListState, action) => {
   switch(action.type) {
      case ADD_CS_DEVICE: 
         return {
            ...state,
            ...action.payload,
         }
      case ADD_CS_PART:
         const removeToggle = state.Details.map(arg => {
            return {
               ...arg,
               toggle: false,
            }
         });
         removeToggle.push(action.payload);
         return {
            ...state,
            Details: removeToggle
         }
      case DEL_CS_PART: 
         const filterCsList = state.Details.filter((arg, index) => index !== action.payload);
         return {
            ...state,
            Details: filterCsList,
         }
      case CS_PART_TOGGLE:
         const toggleFilterCsList = state.Details.map((arg, index) => {
            if(index !== action.payload) {
                return arg;
            }
            return {
               ...arg,
               toggle: !arg.toggle,
            }
         });
         return {
            ...state,
            Details: toggleFilterCsList
         }
      case CS_PART_REMOVE_TOGGLE:
         const removetoggle = state.Details.map(arg => {
            return {
               ...arg,
               toggle: false,
            }
         });
         return {
            ...state,
            Details: removetoggle,
         }
      case CS_CLEAR:
         return {
            ...action.payload
         }
      default:
         return state;
   }
}

/******************************
   장비, 부품 관련 리스트 reducer
*******************************/
   // 장비, 부품 관련 리스트 초기상태
const deviceState = {
   device: [],
   devicePart: [],
   csReason: [],
   shipping: [],
   shipment: [],
}
export const deviceReducer = (state = deviceState, action) => {
   switch(action.type) {
      case DEVICE: 
         return {
            ...state,
            device: action.payload,
         }
      case DEVICE_PART: 
         return {
            ...state,
            devicePart: action.payload,
         }
      case CS_REASON: 
         return {
            ...state,
            csReason: action.payload,
         }
      case SHIPPING: 
         return {
            ...state,
            shipping: action.payload,
         }
      case SHIPMENT: 
         return {
            ...state,
            shipment: action.payload,
         }
      default:
         return state;
   }
}