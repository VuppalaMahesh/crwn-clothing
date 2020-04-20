import React from 'react';
import {Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currenetUser}) => (
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
                {
                    currenetUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                    ) : (
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                    )}
            </BrowserRouter>
        </div>
    </div>
)

export default Header;