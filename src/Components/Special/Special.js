import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
  let [house, setHouse] = useContext(RingContext)
  return (
    <div>
      <h5>Special</h5>
      <p>Ring: {house}</p>
      <button onClick={() => setHouse( house + 1)}>Increase</button>
    </div>
  );
};

export default Special;