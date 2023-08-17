import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import './Main.css'
import DisplayStudents from './components/DisplayCustomer';
import { Button } from '@mui/material';
const Home = () => {
    return (
        <>
            <div className='center'>
                <div>
                    <h1 >Welcome to the Home Page</h1>
                    <div className='button'>
                        <Button className='margin-rght'> <Link to="/app">Add customers</Link></Button>
                    </div>
                </div>
            </div>

        </>
    );
};

const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/app" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Main;


