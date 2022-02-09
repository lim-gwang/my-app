import {
   ADD_LIST,
   SEARCH,
   PROCESS_LIST,
   DEL_LIST,
   FILTER_LIST,
} from './action_type';

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
// cs 삭제
export const delList = id => ({
   type:DEL_LIST,
   payload: id,
})
// export const filterList = id => ({
//    type: FILTER_LIST,
//    payload: id,
// })
// 초기상태
const initialState = {
   items: []
}

export const itemReducer = ( state = initialState, action ) => {
   switch (action.type) {
      case ADD_LIST:
         return {
            ...state,
            items: action.payload
         }
      case DEL_LIST:
         const id = action.payload;
         const filterList = state.items.filter(arg => arg.id !== id);
         return {
            items: filterList
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

