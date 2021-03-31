import React, { useContext } from "react"; 
import { Link } from "react-router-dom"; 
import { userContext } from "../../App";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  return (
    
      <div className="">  
           
           <div class="topnav leftSide row">
                <div class="col-md-6">
                    <h2 style={{color:'white', marginLeft:'30px'}}>E-Grocery</h2>
                </div>
                <div class="col-md-6 mainNav">
                <Link class="active" to="">Home</Link>
                <Link to="/order">Order</Link>
                <Link to="/admin">Admin</Link> 
                {
                    loggedInUser.email && <Link to="/order">{loggedInUser.email && loggedInUser.name}</Link>
                }
                <Link to="/login" onClick={() => setLoggedInUser({})}>{loggedInUser.email ? 'Log Out' : 'Login'}</Link>
                </div>
                
            </div> 
      </div>
   
  );
};

export default Header;