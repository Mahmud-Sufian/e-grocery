import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext } from 'react';
import { useState } from 'react';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import AddProduct from './components/AddProduct/AddProduct';
import Home from './components/Home/Home';
import CheckOut from './components/CheckOut/CheckOut';
import ManageProduct from './components/ManageProduct/ManageProduct';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import OrderedItem from './components/OrderedItem/OrderedItem';
import NoMatch from './components/NoMatch/NoMatch';


export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>   
      <Router>
      <Header></Header>  
        <Switch>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route path="/order">
            <OrderedItem></OrderedItem>
          </Route> 
          <PrivateRoute exact path="/checkout/:id">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Inventory></Inventory>
          </PrivateRoute>
          <PrivateRoute path="/manageProduct">
            <ManageProduct></ManageProduct>
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
            <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <OrderedItem></OrderedItem>
          </PrivateRoute>
          <Route path="/login">
              <Login></Login>
          </Route>
          <Route path="*">
               <NoMatch></NoMatch>
          </Route>
        </Switch> 
    </Router> 
    </userContext.Provider>
       
   
  );
}

export default App;
