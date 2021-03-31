import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { userContext } from "../../App";
import "./CheckOut.css";

const CheckOut = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]); 
  const [success, setSuccess] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  
     
  useEffect(() => {
    fetch(`https://frozen-escarpment-70638.herokuapp.com/singleProduct/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  const handleProceed = () => { 
      const newItem = {
          product:item.name,
          price:item.price,
          date:new Date(),
          ...loggedInUser
        }
      fetch('https://frozen-escarpment-70638.herokuapp.com/addOrder', {
          method: 'POST',
          headers : {'Content-Type' : 'application/json'},
          body: JSON.stringify(newItem)
      })
      .then(res => res.json())
      .then(data => { 
           if(data){
            setSuccess(true);
           }
      })
  }

  return (
    <div>
       
        <table>
        <h2>Check out </h2>
            <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            </tr> 
            <tr>
            <td>{item.name}</td>
            <td>1</td>
            <td>${item.price}</td>
            </tr>
            <tr>
            <td>Total</td>
            <td>1</td>
            <td>${item.price}</td>
            </tr>
            <button onClick={handleProceed} class="btn btn-secondary">Check Out</button>
            {
             success && <p class="text-center text-primary">Check Out Successfully</p>
         }
        </table>
        
    </div>
  );
};

export default CheckOut;
