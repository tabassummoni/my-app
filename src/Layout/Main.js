import React from 'react';
import Header from '../Page/Header/Header';
import { Outlet } from 'react-router-dom';
import TopHeade from '../Page/Header/TopHeade';
import Footer from '../Page/Footer/Footer';

const Main = () => {
    return (
        <div>
            <TopHeade></TopHeade>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;