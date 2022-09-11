
import './App.css';
import React from 'react';
import Header from './Components/Header/header';
import Home from './Components/Home/home';

import { BrowserRouter as Router, Route } from "react-router-dom"
import { Routes } from 'react-router-dom';
import IndividualPost from './Components/IndividualPost/IndividualPost';

function App() {
 
  return (
    <Router>
      <div className="App">
        <header>
          <Header/>
        </header>
        <main>
            <Routes>
            <Route path="/post" exact element={<IndividualPost/>}/>
            <Route path="/" className="mainPage" element={<Home/>}/>
            </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
