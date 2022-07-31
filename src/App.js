// import logo from './logo.svg';
import './App.css';
import {Navbar} from'./components/navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from'./components/sidebar';
import{About} from'./components/about';
import{Contact} from'./components/contact';
import { Login } from './components/login';


function App() {
  return (
    <>
    <div className="App">     
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login"element={<Login/>}/>
     </Routes>
     </BrowserRouter>
    </div>
    </>
  );
}

export default App;


