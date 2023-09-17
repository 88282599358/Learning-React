import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { Switch } from 'react-router-dom';

import { BrowserRouter as Router,Route } from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msgg: message,
      type: type
    })
    setTimeout(() => {
      showalert(null)
    }, 3000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'grey'
      showalert("Dark Mode has been Enabled", "success")
      setInterval(() => {
        document.title = "TextUtils is Amazing";
      }, 1000);

      setInterval(() => {
        document.title = "TextUtils is Amazing";
      }, 1500);
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'grey'
      showalert("Light Mode has been Enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" blog="Our Blog" mode={mode} togglemode={togglemode} />
        {/* Default Proptypes will applied if there is no props in components */}
        {/* <Navbar />    */}
        <Alert alert={alert} />
        <Switch>
          <Route path="/about">
            <About head="About us" />
          </Route>

          <Route path="/">
            <TextForm showalert={showalert} heading="Enter the Text to Analyze" mode={mode} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
