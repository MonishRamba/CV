import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/infiniteScroll.css'
import InfiniteScrollComponent from './components/infiniteScroll';


function App() {
  return (
    <>
    <Router>
      <InfiniteScrollComponent />
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
    </>
  );
}

export default App;
