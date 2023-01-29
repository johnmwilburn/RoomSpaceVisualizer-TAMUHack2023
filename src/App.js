import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper.js'

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="CBRE">
          <p>CBRE</p> 
        </div>  
        <div className='OtherHeaders'>
          <span className="S">Services</span>
          <span className="I">Insights & Research</span>
          <span className="P">Properties</span>
          <span className="O">Offices</span>
          <span className="C">Careers</span>
          <span className="A">About Us</span>
        </div>

        
          

      </div>
      <Wrapper/>
    </div>
  );
}

export default App;
