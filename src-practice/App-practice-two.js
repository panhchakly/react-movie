import './App.css';
import React, 
{ useState as lystate, useEffect as lyEffect } 
from 'react';

const App = ()=> {
  const [count, setCount] = lystate(0); // use while set new value (let in JS)
  lyEffect(()=> { 
    // useEffect means run after render and constructor run first
    setCount(count + 1); // set default count start from 1
  }, []);

  // lyEffect(()=> { 
  //   alert("action change "+count);
  // }, [count]); // only run when count change

  return (
    <div className="App">
      <h3>React Hook { 2 + 2 }</h3>
      {/* <button onClick={ ()=> setCount(count - 1)}>-</button> */}
      <button onClick={ ()=> setCount((c)=> Math.max(0, c - 1))}>-</button>
      <br></br>
      <span>{ count }</span>
      <br></br>
      {/* <button onClick={ ()=> setCount(count + 1)}>+</button> */}
      <button onClick={ ()=> setCount((c)=> c + 1)}>+</button>
    </div>
  );
}

export default App;
