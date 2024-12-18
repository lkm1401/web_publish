import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout() {
    return (
        <div>
            <Header>                
                <Link to="" style={{'padding':'20px'}}>Home</Link>
                <Link to="bestseller" style={{'padding':'20px'}}>BestSeller</Link>
                <Link to="login" style={{'padding':'20px'}}>Login</Link>
                <Link to="signup" style={{'padding':'20px'}}>Signup</Link>
                <Link to="about" style={{'padding':'20px'}}>About</Link>
            </Header>
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
}

