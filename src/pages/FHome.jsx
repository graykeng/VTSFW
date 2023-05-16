import React from 'react';
import { Link } from 'react-router-dom';

import FCarousel from '../component/FCarousel';
import FBlogPost from '../component/FBlogPost';

import './style/FHome.css';


const FHome = ( props ) => {

  const SFUTAPath = props.LogoPic.filter(val => val.Logo === 'SFUTA').map(val => val.ImagePath).toString();
  const UBCTAPath = props.LogoPic.filter(val => val.Logo === 'UBCTA').map(val => val.ImagePath).toString();
  const TGSAPath = props.LogoPic.filter(val => val.Logo === 'TGSA').map(val => val.ImagePath).toString();

  return (
    <div className="App">
      <main>
        <div className="carousel">
          <FCarousel EventPic={props.EventPic} interval={5000} />
        </div>
        <div className='information'>
          <div className='news'>
            <div className='subtitle'>
              新聞中心
            </div>
            <div className='news-content'>
              {props.BlogPostScroll.map((val, index) => {
                return (
                  <Link to={`/BlogPost/${val.PostID}`} className='no-underline'><FBlogPost date={val.DateAndTime} title={val.Title} ContentEng={val.ContentEng}/></Link>
                )
              })}
              

            </div>
          </div>
          <div className='clubs'>
            <div className='subtitle'>
              合作社團
            </div>
            <div className='clubs-logos'>
              <a href='https://www.instagram.com/sfu_ta/' target='_blank'><img className='logos' src={SFUTAPath} alt='SFUTA' width='100' height='100'/></a>
              <a href='https://www.instagram.com/ubcta/' target='_blank'><img className='logos' src={UBCTAPath} alt='UBCTA' width='100' height='100'/></a>
              <a href='https://www.instagram.com/tgsavancouver/' target='_blank'><img className='logos' src={TGSAPath} alt='TGSA' width='100' height='100'/></a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FHome;
