import React, { useState } from "react";
import "../css/Form.css";

function Form() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input1.trim() === "" || input2.trim() === "") {
      setOutput("Please fill out both input fields.");
    } else if (!Number.isInteger(Number(input2))) {
      setOutput("Please enter a valid number for Input 2.");
    } else {
      let repeatedString = "";
      for (let i = 0; i < Number(input2); i++) {
        repeatedString += input1;
      }
      setOutput(repeatedString);
      setInput1("");
      setInput2("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input 1 (string):
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </label>
        <br />
        <label>
          Input 2 (number):
          <input
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {output !== "" && <p>{output}</p>}
    </div>
  );
}

export default Form;
