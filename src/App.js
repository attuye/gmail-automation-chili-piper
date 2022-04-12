import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav-bar";
import { Home, Profile } from "./views";
import Login from "./views/login";
import './App.css'

function App() {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <div className="mt-5">
          {/* <BrowserRouter> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          {/* </BrowserRouter> */}
        </div>
      </div>
    </div>
  );
}

export default App;
