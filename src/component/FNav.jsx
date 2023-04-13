import React from 'react'
import './style/FNav.css';

const FNav = ( props ) => {
    // const [language, setLanguage] = useState('Chn');

    const VTSFPath = props.LogoPic.filter(val => val.Logo === 'VTSF').map(val => val.ImagePath).toString();

    function NotYet(){
        alert("We haven't started selling the ticket for 2023.");
    };

    
    

    return (
        <div>
            <div className="nav-container">
                <nav className="navbar">
                    <ul>
                        <li>
                            <a href="/Home">
                            <img
                                alt=''
                                src={VTSFPath}
                                width='70'
                                height='70'
                            />
                            </a>
                        </li>
                        <li>
                            <a href="/Home" className="noStyle">Vancouver Taiwanese Student Forum</a>
                        </li>
                        <li>
                            <a href="#home" className="hoverEffect">關於我們</a>
                        </li>
                        <li>
                            <a href="/Sponsors" className="hoverEffect">認識贊助商</a>
                        </li>
                        <li>
                            <a href="/Committee" className="hoverEffect">介紹團隊</a>
                        </li>
                        <li>
                            <a href="#detail" className="hoverEffect">活動內容</a>
                        </li>
                    </ul>
                </nav>
                <div className='ticketButton-container'>
                    <button className='custom-button left-button' onClick={NotYet}>點我購票！</button>
                    <button className='custom-button right-button' onClick={NotYet}>買起來:D</button>
                </div>
                <div className='languageButton-container'>
                    {/* <button className='languageButton' onClick={}>EN</button> */}
                </div>
            </div>
        </div>
    )
}

export default FNav