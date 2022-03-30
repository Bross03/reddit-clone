import "./header.css";
import React from 'react';

function Header(){
    return(
      <div className="appHeader">
        <nav>
            <h2>
                Reddit<span>Clone</span>
            </h2>        
        </nav>
        <div className="wrap">
        <form className="search">
            
            <input className="searchTerm" type="text" placeholder="Search"/>
            <button type="submit" className="searchButton">
                <i></i>
            </button>
        </form>
        </div>
      </div>
    )
}
export default Header;