import React from 'react'
import './style/MobileNav.css';

const FNav = () => {

    return (
        <div>
            <div className="mobile-nav-container">
                <nav className="mobile-navbar">
                    <ul>
                        <li>
                            <a href="/Details">關於我們</a>
                        </li>
                        <li>
                            <a href="/Sponsors">認識贊助商</a>
                        </li>
                        <li>
                            <a href="/Committee">介紹團隊</a>
                        </li>
                        <li>
                            <a href="/Blog">最新資訊</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default FNav