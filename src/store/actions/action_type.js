// 유저 관련 action type
export const ADD_LIST = 'ADD_LIST';
export const USER_DATA = 'USER_DATA';
export const PROCESS_LIST = 'PROCESS_LIST';
export const DEL_LIST = 'DEL_LIST';
export const FILTER_LIST = 'FILTER_LIST';
// 검색
export const SEARCH = 'SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';
// CS 요청 저장
   // 장비 추가
export const ADD_CS_DEVICE = 'ADD_CS_DEVICE';
   // 부품 추가
export const ADD_CS_PART = 'ADD_CS_PART';
   // 부품 제거
export const DEL_CS_PART = 'DEL_CS_PART';
   // 부품 토글 기능
export const CS_PART_TOGGLE = 'CS_PART_TOGGLE';
   // 부품 토글 전체 닫기
export const CS_PART_REMOVE_TOGGLE = 'CS_PART_REMOVE_TOGGLE';
   // CS 요청 초기화
export const CS_CLEAR = 'CS_CLEAR';

// CS 요청 수정

// 장비 및 부품관련 action type
   // 장비 종류
export const DEVICE = 'DEVICE';
   // 부품종류
export const DEVICE_PART = 'DEVICE_PART';
   //CS 증상코드
export const CS_REASON = 'CS_REASON';
   // 배송방법
export const SHIPPING = 'SHIPPING';
   // 배송
export const SHIPMENT = 'SHIPMENT';