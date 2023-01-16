import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import moment from 'moment';

import { getPost } from '../ApiCaller';

import '../App.css'

const BlogPost = () => {
  const {id}= useParams();
  const [Post, setPost] = useState([]);
  var imageSection;

  useEffect(() => {
    getPost(id).then(data => setPost(data));
  }, [])

  // save all image path to imageArr
  const imageArr = Post.map(obj => obj.ImagePath);

  const contentEngPre = Post.map(obj => obj.ContentEng);
  const contentEng = contentEngPre[0];

  const contentChnPre = Post.map(obj => obj.ContentChn);
  const contentChn = contentChnPre[0];

  const titlePre = Post.map(obj => obj.Title);
  const title = titlePre[0];

  const dateAndTimePre = Post.map(obj => obj.DateAndTime);
  const dateAndTime = dateAndTimePre[0];

  const editorPre = Post.map(obj => obj.Editor);
  const editor = editorPre[0];

  if (imageArr.length === 1) {
    imageSection = <img src={imageArr[0]} alt={imageArr[0]} className='PostCarouselSize'/>
  } else {
    imageSection = 
    <Carousel>
      {imageArr.map((val, index) => (
        <Carousel.Item key={index}>
          <img src={val} alt={val} className='PostCarouselSize'/>
        </Carousel.Item>
      ))} 
    </Carousel>
  }
  
  return (
    <>
      <div className='PostSection'>
        <div>
          <div className='PostTitleSection'>
            <div className='PostTitle'>
              <h2>{title}</h2>
            </div>
            <div className='PostDateAndTime'>
              {moment(dateAndTime).format('MMMM DD YYYY, h:mm:ss a')}
              <div>
                {editor}
              </div>
            </div>
          </div>
          {imageSection}
          <div className='PostContent'>
            <div>
              <p style={{whiteSpace: "pre-wrap"}}>{contentEng}</p>
              <br/>
              <p style={{whiteSpace: "pre-wrap"}}>{contentChn}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPost