import './App.css'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import React, { useState } from 'react'
import Alert from './Components/Alert'
import About from './Components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message,
      type,
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = '#042743'
      showAlert('Dark mode has been enabled', 'success')
      // Used to change title of the document
      document.title = 'TextUtils - Dark Mode '
      // In some website the text or alert keep coming on screeen is done using
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing'
      // }, 2000)
      // setInterval(() => {
      //   document.title = 'Download TextUtils now'
      // }, 1500)
    }
    if (mode === 'dark') {
      setMode('light')
      document.body.style.background = 'white'
      showAlert('Light mode has been enabled', 'success')

      document.title = 'TextUtils - Light Mode '
    }
  }

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtil"
          mode={mode}
          toggleMode={toggleMode}
        />
        {/* <Navbar  /> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze Below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>

      {/* <div className="container">
        <TextForm
          heading="Enter the text to analyze Below"
          mode={mode}
          showAlert={showAlert}
        />
      </div> */}
      {/* <About /> */}
    </>
  )
}

export default App
