import React from 'react';
import Header from '../common/header/Header';
import Home from '../home/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Loginsignup from '../loginsignup/Loginsignup';
import Bottom from '../common/bottom/Bottom';
import Compare from '../common/comparePopup/Compare';
import About from '../about/About';
import Contact from '../contact/Contact';
import Buy from '../buy/Buy';
import Sell from '../sell/Sell';
import Feedback from '../feedback/Feedback';
import Account from '../account/Account';

const pages = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/login' element={<Loginsignup loginState={true} />} />
                    <Route exact path='/signup' element={<Loginsignup loginState={false} />} />
                    <Route exact path='/register' element={<Loginsignup loginState={false} />} />
                    <Route exact path='/compare' element={<Compare />} />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/contact' element={<Contact />} />
                    <Route exact path='/buy' element={<Buy />} />
                    <Route exact path='/sell' element={<Sell />} />
                    <Route exact path='/feedback' element={<Feedback />} />
                    <Route exact path='/account' element={<Account />} />
                </Routes>
                <Bottom />
            </Router>
        </>
    )
}

export default pages;