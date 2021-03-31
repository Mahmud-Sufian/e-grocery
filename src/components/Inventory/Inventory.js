import React from "react";
import { Link } from "react-router-dom";
import "./Inventory.css";
import AddIcon from '@material-ui/icons/Add';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

const Inventory = () => {
  return (
    <div>
        <div class="sidebar container">
            <Link to="/manageProduct"><PlaylistAddCheckIcon/> Manage Product</Link>
            <Link to="/addProduct"><AddIcon/> Add Product</Link> 
        </div>
    </div>
  );
};

export default Inventory;
