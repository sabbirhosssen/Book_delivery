import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Navber/Header';
import Books from './Components/pages/Books/Books';
import Home from './Components/pages/Home/Home';
import Offer from './Components/pages/Offer/Offer';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/books" element={<Books/>} />
        <Route path="/offers" element={<Offer/>} />
      </Routes> 
   
      <Footer/>
    </div>
  );
}

export default App;
