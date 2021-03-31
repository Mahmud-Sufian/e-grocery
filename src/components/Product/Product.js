import { Link } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import './Product.css'

const Product = (props) => { 
    const {_id, price, name, imageURL, } = props.pd 
    const history = useHistory();
   
    const handleCheckOut =() => {
        history.push(`/checkout/${_id}`)
    }

    return (
         
           <div>
                <div class="card text-center" style={{width: '16rem'}}>
                <img  src={imageURL} class="card-img-top" alt="product" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5> 
                    <div className="card-footer">
                    <h3 class="text-primary">${price}</h3>    
                    <button onClick={handleCheckOut} class="btn btn-primary">Buy Now</button>  
                    </div>
                </div>
                </div>
           </div>
        
    );
};

export default Product;