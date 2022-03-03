const url = 'http://kr.hslens.com:14987';
export const LOGIN = url+'/api/User/Login';
export const USER_DATA = url+'/api/User/SessionTest';
export const CS_LIST = url+'/api/CS/Gets';

// CS 요청 저장 및 수정 
export const ADD_CS_LIST = url+'/api/CS/Put';
// CS 요청 취소
export const DEL_CS_LIST = url+'/api/CS/Cancel';

// 장비 종류
export const DEVICE = url+'/api/Code/Device';
// 부품종류
export const DEVICE_PART = url+'/api/Code/DevicePart';
// CS 증상코드
export const CS_REASON = url+'/api/Code/CSReason';
// 배송방법
export const SHIPPING = url+'/api/Code/Shipping';
// 배송
export const SHIPMENT = url+'/api/Code/Shipment';