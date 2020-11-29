import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AddService from "./Components/Admin/AddServices/AddService/AddService";
import AdminServiceList from "./Components/Admin/AdminServiceList/AdminServiceList/AdminServiceList";
import MakeAdmin from "./Components/Admin/MakeAdmin/MakeAdmin";
import CustomerReview from "./Components/Customer/CustomerReview/CustomerReview";
import CustomerServiceList from "./Components/Customer/CustomerServiceList/CustomerServiceList/CustomerServiceList";
import Order from "./Components/Customer/Order/Order";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  
useEffect(() => {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  if(userInfo){
    if(userInfo.email){
      setLoggedInUser(userInfo);
      fetch(`https://creative-agency-101.herokuapp.com/isAdmin?email=${userInfo.email}`)
      .then(res => res.json())
      .then(data => {
          if(data){
            setIsAdmin(true);
          };
        })
      .catch(error => console.log(error));
    };
  };
},[loggedInUser.email]);

  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser, isAdmin}}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <PrivateRoute path='/dashboard/order'>
          <Order/>
        </PrivateRoute>
        <PrivateRoute path='/dashboard/serviceList'>
          <CustomerServiceList/>
        </PrivateRoute>
        <PrivateRoute path='/dashboard/review'>
          <CustomerReview/>
        </PrivateRoute>
        <PrivateRoute path='/admin/serviceList'>
          {isAdmin && <AdminServiceList/>}
        </PrivateRoute>
        <PrivateRoute path='/admin/addService'>
          {isAdmin &&  <AddService/>}
        </PrivateRoute>
        <PrivateRoute path='/admin/makeAdmin'>
          {isAdmin &&  <MakeAdmin/>}
        </PrivateRoute>
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
