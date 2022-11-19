import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import About from "./Pages/About";
import {Navbar} from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Navbar/>

      <Container className="mb-4">
        <Routes>

        <Route path="/" element={<Home/>}/>
         <Route path="/Store" element={<Store/>}/>
         <Route path="/About" element={<About/>}/>
         </Routes>

      </Container>
      </>
  )
}

export default App
