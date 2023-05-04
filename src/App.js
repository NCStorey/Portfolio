import React from 'react';
import Navbar from './components/navbar/navbar';
import './App.css'
import Home from './pages/home/home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Contact from './pages/contact/contact';
import AboutMe from './pages/aboutme/aboutme';
import Gallery from './pages/gallery/gallery';



function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
