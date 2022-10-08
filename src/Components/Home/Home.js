import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
  let tshirts = useLoaderData();
  let [cart, setCart] = useState([]);

  let handleAddToCart = tshirt => {
    let exists = cart.find(ts => ts._id === tshirt._id);
    if(exists){
      alert('T-Shirt alrady added');
    }
    else{ 
      let newCart = [...cart, tshirt];
    setCart(newCart);
    // alert('Successfully Adedd')
     }
 
  }

  let handelRemoveItem = tshirt => {
    
    let remainig = cart.filter(ts => ts._id !== tshirt._id);
    setCart(remainig);

  }
  return (
    <div className='home-container'>
      <div className='t-shirt-container'>

      {
        tshirts.map(tshirt => <TShirt  key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></TShirt>)
      }

      </div>

      <div className='cart-container'>
         
         <Cart cart={cart} handelRemoveItem={handelRemoveItem}></Cart>

      </div>
     
    </div>
  );
};

export default Home;