import React from 'react'
import { Helmet } from 'react-helmet'
import BlogPost from '../component/BlogPost'
import { Row, Col } from 'react-bootstrap'
import moment from 'moment'

const Blog = ( props ) => {
  return (
    <div>
        <Helmet>
            <title>VTSF | Blog</title>
        </Helmet>
        <div className='BlogSection'>
          <Row>
            {props.BlogPost.map((val, index) => {
              return (
                <Col key={index} md={4}>
                  <div className='BlogCol'>
                    
                      <img src={val.ImagePath} width='100%' class='image-class' />
                    
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row >
            <Col>
              1 of 3
            </Col>
            <Col>
              2 of 3
            </Col>
            <Col>
              3 of 3
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default Blog

{/* {moment('20200101T010854').format('MMMM DD YYYY, h:mm:ss a')} */}