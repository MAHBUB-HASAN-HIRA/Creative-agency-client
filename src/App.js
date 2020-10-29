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
import CheckAdmin from "./Components/CheckAdmin/CheckAdmin";
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
  
  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    if(userInfo){
     setLoggedInUser(userInfo); 
    }

  },[])

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <CheckAdmin>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <PrivateRoute path='/customer/order'>
          <Order/>
        </PrivateRoute>
        <PrivateRoute path='/customer/serviceList'>
          <CustomerServiceList/>
        </PrivateRoute>
        <PrivateRoute path='/customer/review'>
          <CustomerReview/>
        </PrivateRoute>
          <PrivateRoute path='/admin/serviceList'>
            <AdminServiceList/>
          </PrivateRoute>
          <PrivateRoute path='/admin/addService'>
            <AddService/>
          </PrivateRoute>
          <PrivateRoute path='/admin/makeAdmin'>
            <MakeAdmin/>
          </PrivateRoute>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </CheckAdmin>
    </UserContext.Provider>
  );
}

export default App;
