import React from 'react';
import logo from '../icon/logo.png'


class Header extends React.Component{
    render() {
        return (
            <header>
                <img className="header__logo" src={logo} />
                <h1 className="header__title">Weather Channel</h1>
            </header>
        )
    }
}

export default Header;