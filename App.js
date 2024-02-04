import './App.css';
import { Background } from './Components/Backgroundimage';
import Topbar from './Components/Topbar/Topbar';
import About from './Components/About/About';
//import Intro from './Components/Intro/Intro';
import Upload from './Components/Upload/Upload';
import Contact from './Components/Contact/Contact';
//import Login from './Components/Login/Login';
//import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className='Sections'>
        <Background/>
        <Upload/>
        <About/> 
        <Contact/>
      </div>     
    </div>
  );
}

export default App;
