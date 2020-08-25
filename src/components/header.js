import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

/*
    1- header component should trigger the menu
    2- on click we need to show / hide the navbar
    3- the state is maintained in the App component
*/

const Header = props => {
    const { menuState, setMenuState } = props;
    return (
        <header className="site-header">
            <div className="brand-logo">
                <Link to="/">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                </Link>
            </div>
            <div className="menu-icon">
                <button className={`menu-trigger ${menuState ? 'menu-close' : ''}`} onClick={() => setMenuState(!menuState)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}

export default Header;
