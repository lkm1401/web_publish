import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import AppBestSeller from '../yes24/AppBestSeller.jsx';
import Login from '../form/CgvLoginForm.jsx';
import Signup from '../form/Signup.jsx';

export default function AppBestSellerRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="bestseller" element={<AppBestSeller />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="about" element={<About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function Home() {
    return <h2 style={{'width':'1000px', 'margin':'auto', 'padding':'40px'}}>Home Page</h2>;
}
function About() {
    return <h2 style={{'width':'1000px', 'margin':'auto' , 'padding':'40px'}}>About Page</h2>;
}


