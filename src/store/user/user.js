import axios from 'axios';
import { 
   userData, 
   addList, 
   delList,
   filterList
} from '../actions/actions';

import { 
   LOGIN,
   USER_DATA,
   CS_LIST,
   ADD_CS_LIST,
 } from '../../API/apiUrl';

const headersToken = () => ({
   headers: {
      'Content-Type': 'multipart/form-data',
      jwttoken: sessionStorage.getItem('token'),
   }
});
const tokenRenewal = newToken => {
   sessionStorage.setItem('token', newToken);
}  

const form_data = data => {
   let formData = new FormData();

   for ( let key in data) {
      formData.append(key, data[key]);
   }

   // for (var pair of formData.entries()) {
   //    console.log(pair[0]+ ': ' + pair[1]);
   // }

   return formData;
}

// 로그인
export const login = ({id, pw}) => {
   let formData = new FormData();
   formData.append('id', id);
   formData.append('pw', pw);

   return axios.post(LOGIN, formData)
      .then(res => {
         console.log(res, 'login');
         const message = res.data.Message;
         const token = res.data.Token;
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
         dispatch(userData(items));
      });
};

// cs 요청 목록
const _csList = async data  => {
   const list = await axios.post(CS_LIST, form_data(data), headersToken());

   return list;
};

export const csList = data => ( dispatch, getState ) => {
   _csList(data)
      .then(res=> {
         let token = res.data.Token;
         tokenRenewal(token);
         
         dispatch(addList(res.data.List));
      });
};

// cs 검색 필터 목록
const _csFilterList = async data  => {
   const list = await axios.post(CS_LIST, form_data(data), headersToken());

   return list;
};

export const csFilterList = data => ( dispatch, getState ) => {
   _csFilterList(data)
      .then(res=> {
         // dispatch(filterList(res.data.List));
         dispatch(addList(res.data.List));
      });
};

// cs 접수
const _addCsList = async data => {

   const list = await axios.post(ADD_CS_LIST, form_data(data), headersToken());

   return list;
};

export const addCsList = data => {
   return _addCsList(data)
      .then(res=> {
         let token = res.data.Token;
         tokenRenewal(token);
         
         return res.data;
      });
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
