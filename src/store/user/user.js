import axios from 'axios';
import { addList, delList } from '../actions/actions';
import { 
   LOGIN,
   USER_DATA
 } from '../../API/apiUrl';


// 로그인
export const login = ({id, pw}) => {
   let formData = new FormData();
   formData.append('id', id);
   formData.append('pw', pw);

   return axios.post(LOGIN, formData)
      .then(res => {
         const message = res.data.Message;
         const token = res.data.IdentityCode;
         sessionStorage.setItem('token', token);
         return  {
            message,
            token
         };
      });
}
// 로그아웃
export const logout = () => {
   sessionStorage.removeItem('token');
}

// 유저 정보
const userData = async () => {

    const items = await axios.get(USER_DATA, {
      headers: {
         jwttoken: sessionStorage.getItem('jwttoken')
      }
   })
   .then(res => res);
      
   return items;
};
  

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
