
import {React} from 'react';

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
        <a href="/dashboard"> Dashboard</a>
        <br/>
        <br/>
        <hr/>
        <a href="/buttons"> Buttons(Component)</a>
        <br/>
        <br/>
        <hr/>
        <a href="/cards"> Cards(Components)</a>
        <br/>
        <br/>
        <hr/>
        <a href="/others"> Others</a>
        <br/>
        <br/>
        <hr/>
        <a href="/signin"> SignIn</a>
        <br/>
        <br/>
        <hr/>
        <a href="/logout"> Logout</a>
        <br/>
        <br/>
        <hr/>
        <a href="/nopage"> No Page</a>
        <br/>
        <br/>
        <hr/>
        </div>
        </div>
      
    )
}