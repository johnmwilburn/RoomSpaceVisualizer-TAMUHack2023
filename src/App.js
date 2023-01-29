import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper.js'
import image from "./CBRE.jpg"

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="CBRE">
          <p>CBRE</p> 
        </div>  
        <div className='OtherHeaders'>
          <span>Services</span>
          <span style='margin-right:3em;'>Insights & Research</span>
          <span>Properties</span>
          <span>Offices</span>
          <span>Careers</span>
          <span>About Us</span>
        </div>
          

      </div>
      <Wrapper/>
    </div>
  );
}

export default App;
