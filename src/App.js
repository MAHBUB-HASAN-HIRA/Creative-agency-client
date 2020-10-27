import React, { createContext, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import CustomerReview from "./Components/Customer/CustomerReview/CustomerReview";
import CustomerServiceList from "./Components/Customer/CustomerServiceList/CustomerServiceList/CustomerServiceList";
import Order from "./Components/Customer/Order/Order";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/customer/order'>
          <Order/>
        </Route>
        <Route path='/customer/serviceList'>
          <CustomerServiceList/>
        </Route>
        <Route path='/customer/review'>
          <CustomerReview/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
