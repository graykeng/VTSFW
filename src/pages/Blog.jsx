import React from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style/Blog.css';

const handleBackToTop = () => {
  window.scrollTo(0,0);
}

const Blog = ( props ) => {
  return (
    <div>
        <Helmet>
            <title>VTSF | Blog</title>
        </Helmet>
        <div className='BlogSection'>
        <h1 className='BlogGridTitle'>Blog Posts</h1>
        <hr/>
          <Row>
            {props.BlogPostGrid.map((val, index) => {
              return (
                <Col key={index} md={4}>
                  <div className='BlogCol'>               
                      <Link to={`/BlogPost/${val.PostID}`}><img src={val.ImagePath} alt={val.PostID} className='BlogGridSingle' /></Link>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
        <hr/>
        <div className='ButtonField'>
            <button className='TopButton' onClick={handleBackToTop}>Back to top</button>
        </div>
    </div>
  )
}

export default Blog