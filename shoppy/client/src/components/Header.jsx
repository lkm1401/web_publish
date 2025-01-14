import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header-outer'>
            <div className='header'>
                <Link to='/'>
                    Shoppy Logo
                </Link>
                <nav>
                    <Link to='/all'>Products</Link>
                    <Link to='/cart'>MyCart</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                </nav>
            </div>
        </div>
    );
}

