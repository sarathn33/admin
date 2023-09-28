
import React from 'react';
import { Link } from 'react-router-dom';

export function Nav(){
    return(
        <div className='navbar'>
            <div className='top-bar'>
               <span>SB ADMIN 2.0</span>
            <input className='search' type="text" placeholder="Search.."/>
            <a href="#" class="notification">
  <span>Inbox</span>  
  <span class="badge">3</span> 
</a>
            </div>
              <div className="side-bar">
        <Link to="/dashboard"> Dashboard</Link>
        <br/>
        <br/>
        <hr/>
        <Link to="/buttons"> Buttons(Component)</Link>
        <br/>
        <br/>
        <hr/>
        <Link to="/cards"> Cards(Components)</Link>
        <br/>
        <br/>
        <hr/>
        <Link to="/others"> Others</Link>
        <br/>
        <br/>
        <hr/>
        <Link to="/signin"> SignIn</Link>
        <br/>
        <br/>
        <hr/>
        <Link to="/logout"> Logout</Link>
        <br/>
        <br/>
        <hr/>
        <Link to="/nopage"> No Page</Link>
        <br/>
        <br/>
        <hr/>
        </div>
        </div>
      
    )
}