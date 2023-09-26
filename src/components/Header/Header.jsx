import React from 'react'
import './Header.scss';


const Header = () => {
    return (
        <div className="header">
            <ul className="header-list">
                <li className="logo"><a href='/'>Port<span>folio</span></a></li>
                <li className="header-list-items"><a href='/'>Home</a></li>
                <li className="header-list-items"><a href='/'>About Us</a></li>
                <li className="header-list-items"><a href='/'>Portfolio</a></li>
                <li className="header-list-items"><a href='/'>Blog</a></li>
            </ul>
            <div></div>
            {/* <div className="header-hireMeBtn"><a href='/'>Hire me!</a></div> */}

        </div>
    )
}

export default Header;
