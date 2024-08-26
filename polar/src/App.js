import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Adventures from './routes/Adventures';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/adventures' element={<Adventures/>}/>
      </Routes>
      <Footer/>
      
      
    </div>
  );
}

export default App;
