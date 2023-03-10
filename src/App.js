import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/dashboard';
import { Nav } from './components/nav';
import { Cards } from './components/cards';
import { Buttons } from './components/buttons';
import { Others } from './components/others';
import { SignIn } from './components/sign';
import { LogOut } from './components/logout';
import { Nopage } from './components/nopage';



function App() {
  return (
    <div className="App">
   <Switch>
   
     <Route exact path="/"> 
      <Nav/><Dashboard/>
      </Route>


     <Route path="/dashboard">
      <Redirect to ="/"/>
      </Route>


    <Route path="/cards">
    <Nav/><Cards/>
    </Route>


     <Route path="/buttons">
      <Nav/><Buttons/>
      </Route>

      <Route path="/others">
      <Nav/><Others/>
      </Route>

      <Route path="/signin">
        <Nav/><SignIn/>
      </Route>

      <Route path="/logout">
        <Nav/><LogOut/>
      </Route>

      <Route path="/**">
        <Nav/><Nopage/>
      </Route>


    
   </Switch>
    </div>
  );
}

export default App;
