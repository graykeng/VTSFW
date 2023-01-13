import React from 'react'
import { Helmet } from 'react-helmet'
import BlogPost from '../component/BlogPost'
import { Row } from 'react-bootstrap'
import moment from 'moment'

const Blog = () => {
  return (
    <div>
        <Helmet>
            <title>VTSF | Blog</title>
        </Helmet>
        <div className='BlogSection'>
          <Row xs={1} md={2}>
            {moment('20200101T010854').format('MMMM DD YYYY, h:mm:ss a')}
          </Row>
          <BlogPost />
        </div>
    </div>
  )
}

export default Blog