import React from 'react';
import './App.css';

function App() {
  const paragraphElement = React.createElement("p", null, "Hello, World from the React App!");
  const divElement = React.createElement("div", { id: "helloWorldDiv" }, paragraphElement);
  return divElement;
}

export default App;
