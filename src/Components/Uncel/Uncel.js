import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncel = ({house}) => {
  let [money , setMoney] = useContext(MoneyContext)
  return (
    <div>
      <h2>Uncel</h2>
      <p><small>House : {house}</small></p>
      <p>Money: {money}</p>
    </div>
  );
};

export default Uncel;