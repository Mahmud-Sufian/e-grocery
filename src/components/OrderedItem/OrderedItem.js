import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { userContext } from '../../App';
import './OrderedItem.css';
 

const OrderedItem = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [ordered, setOrdered] = useState([]);
  
    
    useEffect(() => {
        fetch('https://frozen-escarpment-70638.herokuapp.com/getOrder?email='+loggedInUser.email, {
            method:'GET',
            headers:{
                'Content-Type' : 'application/json',
                authorization : `bearer ${sessionStorage.getItem('token')}` 
            }
        })
        .then(res => res.json())
        .then(data => {
            setOrdered(data);
        })
    },[loggedInUser.email])

        let total = 0;
    ordered.forEach(order => {
          total = Number(total) + Number(order.price)
         });


    return (
        <div className="ordered-item-container">
                <table>
                    <h2>Congratulations <span style={{color:'green'}}>{loggedInUser.name}</span>... Your Ordered Item...</h2>
                      <tr> 
                            <th>Description</th> 
                            <th>quantity</th>
                            <th>Price</th>
                      </tr>
                 {
                     ordered.map(order => 
                        
                       <tr> 
                            <td>{order.product}</td> 
                            <td>1</td>
                            <td>${order.price}</td>
                       </tr>
                       
                        )
                 }

                        <tr>  
                            <td><span style={{fontWeight:'bold'}}>Total</span></td> 
                            <td>{ordered.length}</td> 
                            <td>${total}</td>
                       </tr> 
                </table>
             
        </div>
    );
};

export default OrderedItem;