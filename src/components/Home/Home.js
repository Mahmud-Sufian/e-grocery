import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]); 
    useEffect(() => {
        fetch(' https://whispering-chamber-45293.herokuapp.com/allProduct')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])


    return (
        <div>
             <div className="product-container">
                 {
                   products.map(pd => <Product pd={pd}></Product>)
                 }
             </div>
        </div>
    );
};

export default Home;