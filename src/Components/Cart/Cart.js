import React from 'react';
import './Cart.css'

const Cart = ({cart,handelRemoveItem}) => {

  let message;
  if(cart.length === 0){
    message = <p>Plese buy at least one item</p>
  }
  else if(cart.length === 1){
    message = <div>
       <h4>Ekta nia ki hoibo</h4>
       <p>kiptami kore lav ase</p>
       <p>Amr jonno ehta noaw</p>
    </div>
  }
  else{
    message = <p>thnaks for buying</p>
  }
 

  return (
    <div>
       <h3 className={cart.length === 3 ? `orange` : `purple`}>Order Summary</h3>
       <h4 className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order Quantity: {cart.length}</h4>
       {
        cart.map(tshirt => <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={()=> handelRemoveItem(tshirt)}>X</button>
        </p>)
       }
       {
        message
       }
       {
        cart.length === 3 ? <p>Sabbash</p> : <p>Hala kipta</p>
       }

       <p>And Operator</p>
       {
         cart.length === 2 && <h3>Duita items</h3>
       }
       <p>OR Operator</p>
       {
        cart.length === 4 || <p>4 ta items na </p>
       }
    </div>
  );
};

export default Cart;