
import './App.css';
import React from 'react';
import Header from './Components/Header/header';
import Home from './Components/Home/home';
import Subreddits from './Components/Subreddits/subreddits';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Switch } from 'react-router-dom';
import IndividualPost from './Components/IndividualPost/IndividualPost';

function App() {
 
  return (
    <Router>
      <div className="App">
        <header>
          <Header/>
        </header>
        <main>
            <Switch>
            <Route path="/post" exact>
              <IndividualPost/>
            </Route>
            <Route path="/">
              <Home />     
              <aside>
                <Subreddits />
              </aside>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
