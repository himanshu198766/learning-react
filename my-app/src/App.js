import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
// import About from "./Components/About";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
    }
    if (mode === "dark") {
      setMode("light");
      document.body.style.background = "white";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtil"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <Navbar  /> */}
      <div className="container">
        <TextForm heading="Enter the text to analyze Below" mode={mode} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
