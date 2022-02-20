import React from 'react';
import ReactLoading from 'react-loading';

//css
import './loading.css';

const Loading = ({hide}) => (
   <ReactLoading
         className={ hide ? 'loadingModal active' : 'loadingModal' }
         type='spin' 
         color='#1776e1' 
         height={'100%'} 
         width={'100%'}
      />
)

export default Loading;