import axios from 'axios';
import { addList, delList } from '../actions/actions';
import { 
   LOGIN
 } from '../../localServer/dotenv';


// 로그인
export const login = async (userData) => {
   const loginData = await axios.post(LOGIN, userData);
    
    return loginData;
}

// // CS 리스트
// const userData = async () => {
//     const items = await axios.get(LOCAL_DATA_ITEMS)
//         .then(res => res.data);
      
//       return items;
// };
  

// // CS 삭제
// const _delData = id => {
//    return axios.delete(`${LOCAL_DATA_ITEMS}${id}`)
// }

// export const delData = id => dispatch => {
//    _delData(id)
//       .then(() => {
//          dispatch(delList(id));
//          alert('삭제 되었습니다.');
//       })
// }
// // CS 접수
// export const fetchUserData = dispatch => {
//    userData()
//    .then(items => {
//        dispatch(addList(items));
//    });
// };

// export const createItem = formData => (dispatch, getState) => {
//     return axios.post(LOCAL_DATA_ITEMS, formData)
//         .then(() => {
//             dispatch(fetchUserData);
//             alert('등록이 되었습니다.');
//         });
// }
