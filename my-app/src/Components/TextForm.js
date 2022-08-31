import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here')
  const handleUpClick = () => {
    // console.log('Uppercase was clicked ' + text)
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleLoClick = () => {
    // console.log('Uppercase was clicked ' + text)
    let newText = text.toLowerCase()
    setText(newText)
  }

  const handleOnChange = (event) => {
    // console.log('on change')
    setText(event.target.value)
  }
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <button className="btn btn-primary mt-3 mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mt-3 mx-2" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.trim().split(' ').length} words and {text.trim().length}{' '}
          characters
        </p>

        <p>{0.008 * text.trim().split(' ').length} minutes to read</p>

        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  )
}
