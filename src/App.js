import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login'
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home></Home>
            </Route>
            <Route path="/login">
            <Login></Login>
          </Route>
         
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="*">
            <h1>\under construction!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
