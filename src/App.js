
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not'
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
     setAlert(null); 
    }, 1500);

  }
  const toggleMode = ()=>{
    if(mode === `dark`){
      setMode(`light`);
    document.body.style.backgroundColor = `white`;
    showAlert("light mode has been enabled","success");
    document.title ='MYDEMO-light mode';
    //setInterval(() => {
    //  document.title='MYDEMO is amazing mode';
   /// }, 2000);
    //setInterval(() => {
     // document.title='Install MYDEMO Now '
   // }, 1500);
    }
    else{ 
    setMode(`dark`);
    document.body.style.backgroundColor = `#042743`;
    showAlert("dark mode has been enabled","success");
    document.title ='MYDEMO-dark mode';
   
    }
    
}
  
  return (
    <>
  
{/*<Navbar title="MyAgro"aboutText="About MyAgro"/> */}

{/*<Navbar />*/}
<Router>
<Navbar title="MyAgro" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
     <div className="container my-3">
       <Switch>
        {/*/users-->Component1
         /users/home-->component2
        */}
          <Route  exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter a text to analyze" mode={mode}/>
          </Route>
        </Switch>       
     </div>
</Router>
    </>
  );
}

export default App;
