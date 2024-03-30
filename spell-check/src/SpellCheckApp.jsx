import React from "react";
import { useState, useEffect } from "react";

// Define a custom dictionary of words and their corrections
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

// class SpellCheckApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputText: "",
//       suggestedText: "",
//     };
//   }

//   handleInputChange = (e) => {
//     const text = e.target.value;
//     this.setState({ inputText: text });

//     // Implement a basic spelling check and correction
//     const words = text.split(" ");
//     const correctedWords = words.map((word) => {
//       const correctedWord = customDictionary[word.toLowerCase()];
//       return correctedWord || word;
//     });

//     const correctedText = correctedWords.join(" ");

//     // Set the suggested text (first corrected word)
//     const firstCorrection = correctedWords.find(
//       (word, index) => word !== words[index]
//     );
//     this.setState({ suggestedText: firstCorrection || "" });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Spell Check and Auto-Correction</h1>
//         <textarea
//           value={this.state.inputText}
//           onChange={this.handleInputChange}
//           placeholder="Enter text..."
//           rows={5}
//           cols={40}
//         />
//         {this.state.suggestedText && (
//           <p>
//             Did you mean: <strong>{this.state.suggestedText}</strong>?
//           </p>
//         )}
//       </div>
//     );
//   }
//}

function SpellCheckApp() {
  let [inputText, setinputText] = useState("");
  let [suggestedText, setSuggestedText] = useState("");
  const handleInputChange = (e) => {
    const text = e.target.value;
    setinputText(text);
    // Implement a basic spelling check and correction
    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });
    const correctedText = correctedWords.join(" ");
    // Set the suggested text (first corrected word)
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setSuggestedText(firstCorrection || "");
  };
  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
}

export default SpellCheckApp;
