import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import BlogPost from './BlogPost'
import { Row, Col } from 'react-bootstrap'
import { Route, Link } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'

const Blog = ( props ) => {
  return (
    <div>
        <Helmet>
            <title>VTSF | Blog</title>
        </Helmet>
        <div className='BlogSection'>
          <Row>
            {props.BlogPostGrid.map((val, index) => {
              return (
                <Col key={index} md={4}>
                  <div className='BlogCol'>               
                      <Link to={`/BlogPost/${val.PostID}`}><img src={val.ImagePath} alt={val.PostID} width='100%' /></Link>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
    </div>
  )
}

export default Blog

{/* {moment('20200101T010854').format('MMMM DD YYYY, h:mm:ss a')} */}
// const [Post, setPost] = useState({});
  // const [Error, setError] = useState('');
  // const [Loading, setLoading] = useState(false);

  // const fetchPost = async(PostID) => {
  //   setLoading(true);
  //   try {
  //     const response = await 
  //     axios.get(`http://localhost:3001/BlogPostDetail/${PostID}`);
  //     setPost(response.data);
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };