import './App.css'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import React from 'react'

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtil" />
      {/* <Navbar  /> */}

      <div className="container">
        <TextForm heading="Enter the text to analyze Below" />
      </div>
    </>
  )
}

export default App
