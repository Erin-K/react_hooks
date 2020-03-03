import React, { Component, useState } from 'react';

// class HooksDefault extends Component {
//   state = { count: 0 }
//   render() {
//     const { count } = this.state;
//     increment = n => {
//       this.setState({
//         count: n + 1
//       })
//     }
//     return (
//       <div>
//         <span>{count}</span>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     )
//   }
// }

// ********* hooks *************
const HooksDefault = () => {
  const [count, setCount] = useState(0); // useState는 array return
  const [email, setEmail] = useState("");
  const updateEmail = e => {
    console.log(e.target); //<input placeholder="Email" value="addfd"></input>
    const {
      target: { value }
    } = e;
    console.log(value);
    setEmail(value);
  };
  return (
    <div className="App">
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <input placeholder="Email" value={email} onChange={updateEmail} />
    </div>
  );
};


export default HooksDefault;