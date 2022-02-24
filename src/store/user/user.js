import axios from 'axios';
import { 
   userData, 
   addList, 
   delList 
} from '../actions/actions';

import { 
   LOGIN,
   USER_DATA,
   CS_LIST,
   ADD_CS_LIST,
 } from '../../API/apiUrl';

let headersToken = () => ({
   headers: {
      jwttoken: sessionStorage.getItem('token')
   }
});

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
const _userData = async () => {
   const items = await axios.get(USER_DATA, headersToken())
   .then(res=> res.data.List);

   return items;
};

export const fetchUserData = (dispatch, getState) => {
   _userData()
      .then(items=> {
         dispatch(userData(items))
      });
};

// cs 요청 목록
const _csList = async data  => {

   let formData = new FormData();

   for ( let key in data) {
      formData.append(key, data[key]);
   }

   const list = await axios.post(CS_LIST, headersToken());

   return list;
};

export const csList = data => (dispatch, getState) => {
   _csList(data)
      .then(res=> {
         console.log(res, 'cslist');
         return res;
      });
};

// cs 접수
const _addCsList = async (data) => {

   let formData = new FormData();

   for ( let key in data) {
      formData.append(key, data[key]);
   }

   const list = await axios.post(ADD_CS_LIST, formData, headersToken());

   return list;
};

export const addCsList = data => {
   return _addCsList(data)
      .then(res=> res.data);
};

// export const fetchCsList = (dispatch, getState) => {
//    csList()
//       .then(list=> {
//          dispatch(addList(list))
//       });
// }

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
