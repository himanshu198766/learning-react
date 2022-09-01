import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log('Uppercase was clicked ' + text)
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    // console.log('Uppercase was clicked ' + text)
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    // console.log('Uppercase was clicked ' + text)
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log('on change')
    setText(event.target.value);
  };

  const handleExtraSpace = () => {
    setText(text.replace(/\s+/g, " "));
  };
  return (
    <>
      <div
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#042743",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            placeholder="Enter text here"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "gray",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleOnChange}
          ></textarea>
          <button className="btn btn-primary mt-3 mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mt-3 mx-2" onClick={handleLoClick}>
            Convert to Lowercase
          </button>

          <button className="btn btn-primary mt-3 mx-2" onClick={handleClear}>
            Clear
          </button>

          <button
            className="btn btn-primary mt-3 mx-2"
            onClick={handleExtraSpace}
          >
            Remove Extra Space
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.trim().split(" ").length} words and {text.trim().length}{" "}
          characters
        </p>

        <p>{0.008 * text.trim().split(" ").length} minutes to read</p>

        <h3>Preview</h3>
        <p>
          {text.length > 0 ? text : "Enter the text in textbox to preview here"}
        </p>
      </div>
    </>
  );
}
