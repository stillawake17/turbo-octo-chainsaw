
import * as React from 'react';

import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'; 
import Contact from './pages/Contact'; 
import Header from './components/Header';
import NotFound from './pages/NotFound';
import ProjectGallery from './components/ProjectGallery';
import Project from './components/Project';
import Book from './components/Book';
import PayPalButton from './components/PayPalButton';




function App() {
  const title = 'Portfolio';
  return (
    <>
    <Header title={title}/>
    <Routes>
        <Route path="/" element={<Home title={title} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/projectGallery" element={<ProjectGallery />} />
        {/* <Route path="/project" element={<Project />} /> */}
        <Route path="/book" element={<Book />} />
        <Route path="/pay" element={<PayPalButton />} />
    </Routes>
   
    
      
    </>
    )
  }

export default App;