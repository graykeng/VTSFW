import React from 'react';
import './style/FNav.css';

const FNav = ( props ) => {
    // const [language, setLanguage] = useState('Chn');

    const VTSFPath = props.LogoPic.filter(val => val.Logo === 'VTSF-BlackIcon-NoBG').map(val => val.ImagePath).toString();

    // function NotYet(){
    //     alert("We haven't started selling the ticket for 2023.");
    // };

    const handleTicketButton = () => {
        window.location.href = '/getticket';
    }

    
    

    return (
        <div>
            <div className="nav-container">
                <nav className="navbar">
                    <ul>
                        <li>
                            <a href="/">
                            <img
                                alt=''
                                src={VTSFPath}
                                width='70'
                                height='70'
                                className='phone-no-display'
                            />
                            <img
                                alt=''
                                src={VTSFPath}
                                width='50'
                                height='50'
                                className='phone-display'
                            />
                            </a>
                        </li>
                        <li>
                            <a href="/" className="noStyle">Vancouver Taiwanese Student Forum</a>
                        </li>
                        <li className='phone-no-display'>
                            <a href="/Details">關於我們</a>
                        </li>
                        <li className='phone-no-display'>
                            <a href="/Sponsors">認識贊助商</a>
                        </li>
                        <li className='phone-no-display'>
                            <a href="/Committee">介紹團隊</a>
                        </li>
                        <li className='phone-no-display'>
                            <a href="/Blog">最新資訊</a>
                        </li>
                    </ul>
                </nav>
                <div className='ticketButton-container'>
                    <button className='custom-button left-button phone-no-display' onClick={handleTicketButton}>點我購票！</button>
                    <button className='custom-button right-button phone-no-display' onClick={handleTicketButton}>買起來:D</button>
                    <button className='phone-display custom-button' onClick={handleTicketButton}>購票</button>
                </div>
                <div className='languageButton-container'>
                    {/* TODO */}
                </div>
            </div>
        </div>
    )
}

export default FNav