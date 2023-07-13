import './App.css'
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Users from './components/Users';
import Cats from './components/Cats';
import Reviews from './components/Reviews';
import { Routes, Route, Router } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [loggedin, setLoggedin] = useState(false) //i only need this to force the navbar to update



  return (
    <>

      <>

        <div className="App">
          <NavBar loggedin={loggedin} setLoggedin={setLoggedin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Cats" element={<Cats />} />
            <Route path="/Reviews" element={<Reviews />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login loggedin={loggedin} setLoggedin={setLoggedin} />} />
            <Route path="/Logout" element={<Logout loggedin={loggedin} setLoggedin={setLoggedin} />} />
          </Routes>
        </div>

      </>

    </>
  )




  return (
    <>

    </>
  )
}

export default App
