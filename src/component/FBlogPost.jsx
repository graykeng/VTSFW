import React from 'react'
import { useParams } from 'react-router-dom';
import moment from 'moment';

import './style/FBlogPost.css'

const FBlogPost = ( props ) => {
  function truncateString(str) {
    var maxLength = 50;
    var suffix = "...";

    if (/^[a-zA-Z]/.test(str)) {
      maxLength = 50;
    } else {
      maxLength = 25;
    }
    
    if (str.length > maxLength) {
      str = str.substring(0, maxLength) + suffix;
    }
    
    return str;
  }

  return (
    <div className='main'>
        <div className='date'>
            <div className='day'>
              {moment(props.date).format("DD")}
            </div>
            <div className='year-month'>
              {moment(props.date).format("YYYY.MM")}
            </div>
        </div>
        <div className='title-and-content'>
          <div className='title'>
            {props.title}
          </div>
          <div>
            {truncateString(props.ContentEng)}
          </div>
        </div>
    </div>
  )
}

export default FBlogPost