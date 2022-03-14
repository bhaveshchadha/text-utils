import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textarea from './components/Textarea';

function App() {
  
  return (
    <>
    {/* {f} */}
  <Navbar title="TextUtils" about="About"></Navbar>
  <div className="container">
    <Textarea heading="TextArea:"> </Textarea>
    </div>   
    {/* <div className="container">
      <About></About>
    </div> */}
    </>
  );
}

export default App;
