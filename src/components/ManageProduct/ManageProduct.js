import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './ManageProduct.css';

const ManageProduct = () => {
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        fetch(' https://whispering-chamber-45293.herokuapp.com/allProduct')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleRemove = (id) => { 
        fetch(` https://whispering-chamber-45293.herokuapp.com/delete/${id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
             if(data){
            //    const newProduct = products.filter(pd => pd._id !== id);
            //    setProducts(newProduct);
            //  console.log(event.target)
             }
        })
    }

    return (
        <div>
            <Inventory></Inventory>
             {/* <ul>
                 {
                     products.map(pd => <li>{pd.name} {pd.price}  <button onClick={() => handleRemove(pd._id)} class="btn btn-secondary">Delete</button></li>)
                 }
             </ul> */}

            <table>
                <h2 className="allProduct-heading">All Product List</h2>
                <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                {products.map(pd => 
                  <tr>
                    <td>{pd.name}</td>
                    <td>1</td>
                    <td>{pd.price}</td>
                    <td><button class="btn btn-secondary" onClick={() => handleRemove(pd._id)}>Delete</button></td>
                  </tr> )
                    
                }
            </table>

        </div>
    );
};

export default ManageProduct;