
import './App.css';
import React from 'react';
import Header from './Components/Header/header';
import Home from './Components/Home/home';
import Subreddits from './Components/Subreddits/subreddits';

function App() {
 
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <Home />
        <aside>
         <Subreddits />
        </aside>
      </main>
    </div>
  );
}

export default App;
