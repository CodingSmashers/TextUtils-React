
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      document.body.style.backgroundColor = 'grey';
      setMode('dark');
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light Mode';
    }
    
  }
  return (
   <>
   
<Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
<div className="container my-3">
        
          
           {/* <About /> */}
          
          
<TextForm heading="Enter your text to analyze" mode={mode}/>
         
</div>
   </>
  );
  }
export default App;
