import "./App.css";
import Navbar from "./components/navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/alert";
// import About from "./components/About"

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";

function App() {



  // dark mode enable or not 
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showalert(" Light mode enabled", "success")
    }
    else {
      setmode('dark');
      document.body.style.backgroundColor = '#13013a';
      document.body.style.color = 'white';
      showalert(" Dark mode enabled", "success")
    }
  }


  return (
    // this is all jsx
    // all this thing is html only
    // in curly braces we can use javascript

    <>
      {/* <Router>
        <Navbar title="TextMagics" aboutText="About us " mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />

          <Routes>

          <Route exact path="/"  element={<Textform showalert={showalert} heading="Enter The Text To Analyze Below " />}> 
      </Route>


            <Route exact path="/about"  element={<About />}> 
            </Route>

          </Routes>
      </Router> */}

      <Navbar title="TextMagics" aboutText="About us " mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />

      <Textform showalert={showalert} heading="Enter The Text To Analyze Below " />


    </>
  );
}

export default App;
