import logo from "./logo.svg";
import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
  let [targetWord, setTargetWord] = useState("");
  let [result, setResult] = useState("");

  let dist = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  let textInput = useRef();
  useEffect(() => {
    if (targetWord.length > 0) {
      let def = dist.find(
        (obj) => obj["word"].toLowerCase() === targetWord.toLocaleLowerCase()
      );
      console.log(def);
      if (def) {
        setResult(def.meaning);
      } else {
        setResult("Word not found in the dictionary.");
      }
    }
  }, [targetWord]);
  return (
    <div className="mainDiv">
      <h1>Dictionary App</h1>
      <input type="text" placeholder="Search for a word..." ref={textInput} />
      <button
        type="button"
        onClick={(e) => {
          setTargetWord(textInput.current.value);
        }}
      >
        Search
      </button>
      <h2>Definition:</h2>
      {result && <p>{result}</p>}
    </div>
  );
}

export default App;
