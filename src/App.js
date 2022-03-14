import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textarea from './components/Textarea';


function App() {

const [mode,setMode]=useState('light')

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
    document.body.style.backgroundColor='#042743'
    }
    else{
      setMode('light')
    (document.body.style.backgroundColor='white')
    }
  }
  
  return (
    <>
    {/* {f} */}
  <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}></Navbar>
  <div className="container">
    <Textarea heading="TextArea:" mode={mode}> </Textarea>
    </div>   
    {/* <div className="container">
      <About></About>
    </div> */}
    </>
  );
}

export default App;
