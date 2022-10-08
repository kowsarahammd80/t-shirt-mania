import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt, handleAddToCart}) => {
  let {picture, name, price} = tshirt;
    return (
    <div className='t-shirt'>
       <img src={picture} alt="" />
       <h2>Name : {name}</h2>
       <h4>Price : {price}</h4>
       <button onClick={() => handleAddToCart(tshirt)}>By This</button>
    </div>
  );
};

export default TShirt;