
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Navbar from './Navbar/Navbar';



function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <Navbar/>
      <Routes>
     
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;