import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from "axios";
import { Carousel } from 'react-bootstrap';

import LikeButton from '../component/LikeButton';

import '../App.css'

const BlogPost = () => {
  const {id}= useParams();

  const [Post, setPost] = useState([]);
  const getPost = () => {
    Axios.get(`http://localhost:3001/BlogPostDetail/${id}`).then((response) => {
      setPost(response.data);
    });
  };

  useEffect(() => {
    getPost();
  }, [])

  const imageArr = Post.map(obj => obj.ImagePath);

  if (imageArr.length === 1) {
    var imageSection = <img src={imageArr[0]} alt={imageArr[0]} className='PostCarouselSize'/>
  } else {
    var imageSection = 
    <Carousel>
      {imageArr.map((val) => (
        <Carousel.Item>
          <img src={val} alt={val} className='PostCarouselSize'/>
        </Carousel.Item>
      ))} 
    </Carousel>
  }
  
  return (
    <>
      <div className='PostSection'>
        <div>
          {imageSection}
          <LikeButton />
        </div>
      </div>
    </>
  )
}

export default BlogPost