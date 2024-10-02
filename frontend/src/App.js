import "./App.css";

//Router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
//Pages
import Home from './pages/Home/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
   </BrowserRouter>
    </div>
  );
}

export default App;
