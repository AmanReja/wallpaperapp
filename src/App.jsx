import { React, useState } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import Themecontext from "./Components/Context/Themecontext";

function App() {
  const [theme, setTheme] = useState(false);
  const themeHandel = () => {
    setTheme((prev) => !prev);

    if (theme) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "White";
    }
  };

  return (
    <>
      <Themecontext.Provider value={{ theme, setTheme }}>
        <Navbar themeHandel={themeHandel}></Navbar>
        <Outlet>
          <Home></Home>
        </Outlet>
        <Footer></Footer>
      </Themecontext.Provider>
    </>
  );
}

export default App;
