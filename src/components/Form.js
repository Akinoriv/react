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
    <div className="form">
      <h2 className="form-header">form</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <input
            type="text"
            required
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
          <label className={"label" + (input1 ? " filled" : " blank")}>
            text
          </label>
        </div>
        <div className="form-item">
          <input
            type="text"
            required
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
          <label className={"label" + (input2 ? " filled" : " blank")}>
            number
          </label>
        </div>

        <button type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
      {output !== "" && <p className="result">{output}</p>}
    </div>
  );
}

export default Form;
