import {
   ADD_LIST,
   SEARCH,
   PROCESS_LIST,
   FILTER_LIST,
   USER_DATA,
   DEVICE,
   DEVICE_PART,
   CS_REASON,
   SHIPPING,
   SHIPMENT
} from './action_type';

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
export const search = () => ({
   type: SEARCH,
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

// 유저 정보 및 CS 목록 초기상태
const initialState = {
   user: {},
   items: []
}

// 유저 정보 및 CS 목록 reducer
export const itemReducer = ( state = initialState, action ) => {
   switch (action.type) {
      case USER_DATA:
         return {
            ...state,
            user: action.payload
         }
      case ADD_LIST:
         return {
            ...state,
            items: action.payload
         }
      // case FILTER_LIST:
      //    const id = action.payload;
      //    const filterList = state.items.filter(arg => arg.id === id);
      //    return {
      //       items: filterList
      //    }
      default:
         return state;
   }
}

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

// 장비, 부품 관련 리스트 초기상태
const deviceState = {
   device: [],
   devicePart: [],
   csReason: [],
   shipping: [],
   shipment: [],
}

// 장비, 부품 관련 리스트 reducer
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