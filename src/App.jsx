import './App.css'
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Routes, Route, Router } from "react-router-dom";

function App() {



  return (
    <>

      <>

        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
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
