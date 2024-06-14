import React from 'react'
import Login from '../Pages/Login'
import Home from '../Pages/Home';
import { Navigate, Routes, Route, useLocation } from "react-router-dom";
function Navigation() {
  return (
    <Routes>
          <Route
            path="/"
            element={<Login/>}
          />
           <Route
            path="/home"
            element={<Home/>}
          />
    </Routes>
  )
}

export default Navigation
