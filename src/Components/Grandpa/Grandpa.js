import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncel from '../Uncel/Uncel';
import './Grandpa.css';

export let RingContext = createContext('Gold Ring');

export let MoneyContext = createContext(555)

const Grandpa = () => {
  let [house, setHouse] = useState(1);
  let [money, setMoney] = useState(555);
  let ring = 'dimond ring'
  return (
   <RingContext.Provider value={[house, setHouse]}>
        <MoneyContext.Provider value={[money, setMoney]}>
        <div className='grandpa'>
      <h2>Grandpa</h2>
      <section className='flex'>
        <Father house={house} ring={ring}></Father>
        <Uncel house={house}></Uncel>
        <Aunty house={house}></Aunty>
      </section>
    </div>
        </MoneyContext.Provider>
   </RingContext.Provider>
  );
};

export default Grandpa;