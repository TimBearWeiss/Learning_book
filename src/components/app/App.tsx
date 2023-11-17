import React from "react";
import "./App.css";

function App() {
  const string = "hello world";
  const numb = 12;
  const arr = [1, 2, 3, 4, 4, numb];
  const Boolean = true;
  const object = { firstName: "Dmitrii", lastName: "Ivanov", userArr: arr };

  /// work with string

  // первый найденный будем записан в переменную
  const currentCount = arr.find((el) => el > 2);

  console.log(currentCount);

  console.log(object);

  return <div className="App">{string}</div>;
}

export default App;
