import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Navber/Header';
import BookOrder from './Components/pages/Books/BookOrder';
import Books from './Components/pages/Books/Books';
import Contact from './Components/pages/Contact/Contact';
import Home from './Components/pages/Home/Home';
import Admin from './Components/pages/Login/Admin';
import Login from './Components/pages/Login/Login';
import SignUp from './Components/pages/Login/SignUp';
import Offer from './Components/pages/Offer/Offer';
import PrivateRoute from './Components/Private/PrivateRoute';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/books" element={<Books/>} />
        <Route path="/books/:useId" element={ 
           <PrivateRoute>          
             <BookOrder/>
             </PrivateRoute> 
           } />
            <Route path="/admin" element={
             <PrivateRoute>
                 <Admin/>
             </PrivateRoute>
              } />
        <Route path="/offers" element={<Offer/>} />
        <Route path="/allorder" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
       
      </Routes> 
   
      <Footer/>
      </AuthProvider>
    </div>
  );
}

export default App;
