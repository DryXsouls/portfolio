import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
            </Routes>
            <Footer/>
        </Router>
    </>
  );
}

export default App;
