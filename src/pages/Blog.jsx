import React from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                      <Link to={`/BlogPost/${val.PostID}`}><img src={val.ImagePath} alt={val.PostID} className='BlogGridSingle' /></Link>
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