import "./header.css";
import React, {useState,useEffect} from 'react';
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../Reddit/reddit";

function Header(){
    const [searchTermLocal,setSearchTermLocal]=useState('');
    const dispatch=useDispatch();

    const onSearchTermChange=(e)=>{
        setSearchTermLocal(e.target.value);
    }
    useEffect(()=>{
        dispatch(setSearchTerm(searchTermLocal));
    },[searchTermLocal])
    const onSubmitSearch=(e)=>{
        e.preventDefault();
        setSearchTermLocal(e.target.value);
    }
    return(
      <div className="appHeader">
        <nav>
            <h2>
                Reddit<span>Clone</span>
            </h2>        
        </nav>
        <div className="wrap">
        <form className="search" onSubmit={onSubmitSearch}>
            
            <input className="searchTerm"
             type="text"
              placeholder="Search"
              value={searchTermLocal}
              onChange={onSearchTermChange}/>
            
        </form>
        </div>
      </div>
    )
}
export default Header;