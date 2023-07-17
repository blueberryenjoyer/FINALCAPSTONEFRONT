import './App.css'
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Users from './components/Users';
import Cats from './components/Cats';
import Reviews from './components/Reviews';
import SingleCat from './components/SingleCat';
import { Routes, Route, Router } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [loggedin, setLoggedin] = useState(localStorage.getItem("token")) //checks if there is a token on startup
  const [user, setUser] = useState('')

  return (
    <>

      <>

        <div className="App">
          <NavBar loggedin={loggedin} user={user} />
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Reviews" element={<Reviews />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login setLoggedin={setLoggedin} setUser={setUser} />} />
            <Route path="/Logout" element={<Logout setLoggedin={setLoggedin} setUser={setUser} user={user} />} />



            <Route path="/Cats" element={<Cats user={user} />} />
            <Route path="/Cat">
              <Route path=":catId" element={<SingleCat user={user} />} />
            </Route>

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
