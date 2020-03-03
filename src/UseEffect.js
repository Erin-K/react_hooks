import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

//useEffect == componentDidMount, componentWillUnMount, componentWillUpdate
const UseEffect = () => {
  const sayHello = () => console.log('hello')
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);
  useEffect(sayHello, [number]); // second params: array list 안에 존재할 때만 실행.

  return(
    <div className="App">
      <div>UseEffect</div>
      <button onClick={() => setNumber(number+1)}>{number}</button>
      <button onClick={() => setANumber(aNumber+1)}>{aNumber}</button>
    </div>
  )
};

export default UseEffect;