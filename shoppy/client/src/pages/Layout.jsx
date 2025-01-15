import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function Layout({cartCount}) {
    return (
        <div>
            <Header cartCount = {cartCount} />
            <Outlet />
            <Footer />
        </div>
    );
}

