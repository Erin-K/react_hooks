import React, { useState, Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// 1) functional code
// function Compare() {
//   // const item = useState(1)[0]; // only use item variable
//   const [item, setItem] = useState(1);
//   return(
//     <div className="App">
//       <h1>Hello {item}</h1>
//     </div>
//   )
// }

// 2) hooks
// const Compare = () => {
//   const [item, setItem] = useState(1);
//   const increment = () => setItem(item + 1);
//   const decrement = () => setItem(item - 1);
//   return (
//     <div className="App">
//       <h1>Hello {item}</h1>
//       <button onClick={increment}>increment</button>
//       <button onClick={decrement}>decrement</button>
//     </div>
//   );
// };

// 3) class Component
class Compare extends Component {
  state = {
    item: 1
  };

  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }

  increment = () => {
    this.setState(current => {
      return { item: current.item + 1 };
    });
  };

  decrement = () => {
    this.setState(current => {
      return { item: current.item - 1 };
    });
  };
}

export default Compare;
