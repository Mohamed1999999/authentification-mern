import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './SignUp'
import Login from './Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react';

const App = () => {
    return (
        <div className='App'>
        <BrowserRouter>
            <Routes>
                <Route path='/inscription' element={<Signup/>} ></Route>
                <Route path='/connection' element={<Login/>} ></Route>
            </Routes>
        </BrowserRouter>
        </div>
    );
};

export default App;