import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
              <Route index element={<Home/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
export default App



