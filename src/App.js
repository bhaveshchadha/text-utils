import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
    } else if (mode === "dark") {
      setMode("light");
      console.log("yes here")((document.body.style.backgroundColor = "white"));
      showAlert("Light Mode Enabled", "warning");
    }
  };

  return (
    <>
      {/* {f} */}
      <Router>
        <Navbar
          title="TextUtils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        ></Navbar>
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />

            <Route
              exact path="/"
              element={<Textarea heading="TextArea:" mode={mode} />}
            />
          </Routes>
        </div>
        {/* <div className="container">
      <About></About>
    </div> */}
      </Router>
    </>
  );
}

export default App;
