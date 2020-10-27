import React from 'react';
import Header from '../Header/Header';
import Nav from '../../Nav/Nav';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main className='pb-5 mainHeader'>
            <Nav/>
            <Header/>
        </main>
    );
};

export default HeaderMain;