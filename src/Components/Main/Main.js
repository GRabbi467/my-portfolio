import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Main.css';

const Main = () => {
    return (
        <div className='nav'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;