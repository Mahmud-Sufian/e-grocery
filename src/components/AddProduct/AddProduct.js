import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../App';
import axios from 'axios';
import './AddProduct.css';
import Inventory from '../Inventory/Inventory';

const AddProduct = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, watch, errors } = useForm(); 
    const [success, setSuccess] = useState(false);
    const [imageURL, setIMageURL] = useState(null);
  


    const onSubmit = data => {
        const productData = {
          admin:data.admin,
          name: data.product,
          price: data.price,
          imageURL: imageURL, 
          date:new Date()
        };
        const url = `https://frozen-escarpment-70638.herokuapp.com/addProduct`;
        
        fetch(url, {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(productData)
        })
        .then(res => res.json())
        .then(data => {
          if(data){
            setSuccess(true);
          }
        })
      };


    const handleImageUpload = event => {
        // console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '20ee534ec022d950affa1ad4da921bd9');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
          setIMageURL(response.data.data.display_url);
          // console.log(99, response)
        })
        .catch(function (error) {
          console.log(error);
        });
    
      }

    return (
        <>
         
        <div> 
        <Inventory></Inventory>
             <h1 className="text-center middle">Add your Product</h1>  
                <form onSubmit={handleSubmit(onSubmit)} className="myForm"> 
                <input name="admin" className="form-control" defaultValue="" placeholder="Admin Name" ref={register} required/>
                <br/>
                <input name="product" className="form-control" defaultValue="" placeholder="Product" ref={register} required/>
                <br/>
                <input name="price" className="form-control" defaultValue="" placeholder="Price" ref={register} required/>
                <br/>
                <input name="exampleRequired" className="form-control" type="file" onChange={handleImageUpload} required/>
                <br/>
                <input type="submit" className="form-control" />
                {
                  success && <p style={{textAlign:'center', color:'green', marginTop:'3px'}}>Upload Successfully</p>
                }
              </form>
        </div>
        </>
    );
};

export default AddProduct;