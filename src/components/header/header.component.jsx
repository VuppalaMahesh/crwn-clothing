import React from 'react';
import {Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

const Header = () => (
    <div className='header'>
        <BrowserRouter>
            <Link to="/" className="logo-container">
                    <Logo className='logo' />
            </Link>
        </BrowserRouter>
        
        <div className="options">
            <BrowserRouter>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
            </BrowserRouter>
        </div>
    </div>
)

export default Header;