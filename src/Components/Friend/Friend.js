import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {
  let [house, setHouse] = useContext(RingContext)
  return (
    <div>
       <h6>Friend </h6>
       <p>Ring : {house}</p>
       <button onClick={() => setHouse(house - 1)}>Decrease</button>
    </div>
  );
};

export default Friend;