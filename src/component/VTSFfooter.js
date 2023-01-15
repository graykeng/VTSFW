import React from 'react'

import '../App.css'


const VTSFfooter = ( props ) => {

    const VTSFPath = props.LogoPic.filter(val => val.Logo === 'VTSF').map(val => val.ImagePath).toString();
    const InstagramPath = props.LogoPic.filter(val => val.Logo === 'Instagram').map(val => val.ImagePath).toString();
    const FacebookPath = props.LogoPic.filter(val => val.Logo === 'Facebook').map(val => val.ImagePath).toString();
    const GithubPath = props.LogoPic.filter(val => val.Logo === 'Github').map(val => val.ImagePath).toString();
    const LinkedInPath = props.LogoPic.filter(val => val.Logo === 'LinkedIn').map(val => val.ImagePath).toString();
    const EmailPath = props.LogoPic.filter(val => val.Logo === 'Email').map(val => val.ImagePath).toString();

    return (
        <footer className="page-footer font-small pt-4 Footer">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5>VANCOUVER TAIWANESE STUDENT FORUM</h5>
                        <p>Vancouver Taiwanese Student Forum, established in 2021! We are formed by Taiwanese Associations from different colleges and universities. Our intention is to help students to gain valuable experiences from professionals through workshops and expand your network through this event.</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5>VTSF SOCIAL MEDIA</h5>
                        <div className='mt-3'>
                            <a href="/" className='Logo'><img width='30' height='30' src={VTSFPath} alt="VTSF Logo"/></a>
                            <a href="https://www.instagram.com/vtsf2022/" target="_blank" rel="noopener noreferrer" className='Logo'><img width='30' height='30' src={InstagramPath} alt="Instagram Logo"/></a>
                            <a href="https://www.facebook.com/Vancouver-Taiwanese-Student-Forum-VTSF-108853708309621" target="_blank" rel="noopener noreferrer" className='Logo'><img width='30' height='30' src={FacebookPath} alt="Facebook Logo"/></a>
                        </div>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5>WEB DEVELOPER</h5>
                        <div className='mt-3'>
                            <a href="https://github.com/graykeng" target="_blank" rel="noopener noreferrer" className='Logo'><img width='30' height='30' src={GithubPath} alt="Github Logo"/></a>
                            <a href="https://www.linkedin.com/in/gray-keng-68a5681b0/" target="_blank" rel="noopener noreferrer" className='Logo'><img width='30' height='30' src={LinkedInPath} alt="Linkedin Logo"/></a>
                            <a href="mailto:graywork777@gmail.com" className='Logo'><img width='30' height='30' src={EmailPath} alt="Email Logo"/></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2023 Copyright:
                Vancouver Taiwanese Student Forum
            </div>

        </footer>
    )
}

export default VTSFfooter