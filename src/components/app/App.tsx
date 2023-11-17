import React from "react";
import "./App.css";

function App() {
  const string = "hello world";
  const numb = 12;
  const arr = [1, 2, 3, 4, 4, numb];
  const Boolean = true;
  const object = { firstName: "Dmitrii", lastName: "Ivanov", userArr: arr };

  console.log(object);

  return <div className="App">{string}</div>;
}

export default App;
