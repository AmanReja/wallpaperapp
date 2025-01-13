import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet>
        <Home></Home>
      </Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
