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
const _getDevicePart = async () => {
   const list = await axios.get(DEVICE_PART, headersToken())
      .then(res => res.data.List);

   return list;
}
export const getDevicePart = (dispatch, getState) => {
   _getDevicePart()
      .then(list => {
         dispatch(devicePart(list))
      });
};

// CS 증상코드
const _getCsReason = async () => {
   const list = await axios.get(CS_REASON, headersToken())
      .then(res => res.data.List);

   return list;
}
export const getCsReason = (dispatch, getState) => {
   _getCsReason()
      .then(list => {
         dispatch(csReason(list))
      });
};

// 배송방법
const _getShipping = async () => {
   const list = await axios.get(SHIPPING, headersToken())
      .then(res => res.data.List);

   return list;
}
export const getShipping = (dispatch, getState) => {
   _getShipping()
      .then(list => {
         dispatch(shipping(list))
      });
};

// 배송
const _getShipment = async () => {
   const list = await axios.get(SHIPMENT, headersToken())
      .then(res => res.data.List);

   return list;
}
export const getShipment = (dispatch, getState) => {
   _getShipment()
      .then(list => {
         dispatch(shipment(list))
      });
};