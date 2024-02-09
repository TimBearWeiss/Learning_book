import React from "react";
import "./App.css";

function App() {
  const string = "hello world";
  const numb = 12;
  const arr = [1, 2, 3, 4, 4, numb];
  const Boolean = true;
  const object = { firstName: "Dmitrii", lastName: "Zverev", userArr: arr };

  /// work with string

  // первый найденный будем записан в переменную
  const currentCount = arr.find((el) => el > 2);

  console.log(currentCount);

  console.log(object);

  return (
    <main className="App">
      <h1>Учебник по Front-end</h1>
      <div>
        <h2>Отличие null и undefined</h2>
        <p>let x; console.log(x); // выводит undefined</p>
      </div>
    </main>
  );
}

export default App;
