import axios from 'axios';

// api url 
import { 
   // 장비 종류
   DEVICE,
   // 부품종류
   DEVICE_PART,
   // CS 증상코드
   CS_REASON,
   // 배송방법
   SHIPPING,
   // 배송
   SHIPMENT
} from '../../API/apiUrl';

// action
import { 
   device,
   devicePart,
   csReason,
   shipping,
   shipment
 } from '../actions/actions';

let headersToken = () => ({
   headers: {
      jwttoken: sessionStorage.getItem('token')
   }
});

// 장비 종류
const _getDevice = async () => {
   const list = await axios.get(DEVICE, headersToken())
      .then(res => res.data.List);

   return list;
};

export const getDevice = (dispatch, getState) => {
   _getDevice()
      .then(list => {
         dispatch(device(list))
      });
};
// 부품종류

// CS 증상코드

// 배송방법

// 배송