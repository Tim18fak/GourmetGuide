import React, { useState } from 'react'
import SignIn from './SignIn'
import './App1.css'
import App2 from './App2'
import { BrowserRouter as Router, Route, Switch, useLocation, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import About from './Routes/About'
import Feature from './Routes/Features'
import SignIN from './SignIn'
import Faq from './Routes/Faq'
import Homepage from './Routes/Homepage';
import Header from '../src/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/about'  element={<About/>} />
        <Route path='/feature'  element={<Feature/>} />
        <Route path='/signIN'  element={<SignIN/>} />
        <Route path='/faq'  element={<Faq/>} />
        <Route path='/'  element={<Homepage/>} />
        </Routes>
    </Router>
  )
}

export default App
