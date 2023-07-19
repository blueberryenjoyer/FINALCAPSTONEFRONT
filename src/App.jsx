import './App.css'
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Users from './components/Users';
import Cats from './components/Cats';
import SingleCat from './components/SingleCat';
import { Routes, Route, Router } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [loggedin, setLoggedin] = useState(null) //checks if there is a token on startup
  const [user, setUser] = useState('')
  const [admin, setAdmin] = useState(false) //does not actually cause the server to recognize you as admin. controls navbar options only.

  return (

    <>

      <div className="App">
        <NavBar loggedin={loggedin} user={user} admin={admin} setAdmin={setAdmin} />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/Users" element={<Users user={user} />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login setLoggedin={setLoggedin} setUser={setUser} />} />
          <Route path="/Logout" element={<Logout setLoggedin={setLoggedin} setUser={setUser} user={user} setAdmin={setAdmin} />} />



          <Route path="/Cats" element={<Cats user={user} />} />
          <Route path="/Cat">
            <Route path=":catId" element={<SingleCat user={user} />} />
          </Route>

        </Routes>
      </div>

    </>

  )


}

export default App
