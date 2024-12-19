import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header.jsx';

export default function Layout() {
    return (
        <div>
            <Header>
                <Link to="" style={{'padding':'10px'}}>Home</Link>
                <Link to="airbnb" style={{'padding':'10px'}}>Airbnb</Link>
                <Link to="aladin" style={{'padding':'10px'}}>Aladin</Link>
                <Link to="avatar" style={{'padding':'10px'}}>Avatar</Link>
                <Link to="counter" style={{'padding':'10px'}}>Counter</Link>
                <Link to="olive" style={{'padding':'10px'}}>OliveYoung</Link>
                <Link to="yes24" style={{'padding':'10px'}}>Yes24</Link>
            </Header>
            <Outlet />
            {/* <Footer>
                <div style={{}}>Footer</div>
            </Footer> */}
        </div>
    );
}

