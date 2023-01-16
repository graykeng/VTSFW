import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from "axios";

import '../App.css'

const BlogPost = () => {
  const {id}= useParams();

  const [Post, setPost] = useState({});
  const getPost = () => {
    Axios.get(`http://localhost:3001/BlogPostDetail/${id}`).then((response) => {
      setPost(response.data);
    });
  };

  useEffect(() => {
    getPost();
  }, [])
  
  return (
    <>
      <div className='PostSection'>
        {Post.PostID}
      </div>
    </>
  )
}

export default BlogPost