import React from 'react';
import {Link} from 'react-router-dom';
// import './floatingButtons.css';

export const FloatingButtons = () => {
    return (
        <div id="floatingbtns">
        
        <Link to="/sortmodal">
        <button id="sortbtn"   data-toggle="modal" data-target="#sortModal" >
            <i className="fa fa-sort"></i>
        </button>
        </Link>
    

        <Link to="/filtermodal">
        <button id="filterbtn" data-toggle="modal" data-target="#filtertModal">
            <i className="fa fa-filter"></i>
        </button>
        </Link>
        
    </div>
    )
}
