import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
  
function App(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
              {/* <Route index element={<Home/>} />
              <Route path='blogs' element={<Blogs/>} />
              <Route path='contact' element={<Contact/>} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
export default App
      


