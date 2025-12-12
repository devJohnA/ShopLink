import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Items from "./components/Items.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Items /> 
      <About />
      <Footer /> 
    </>
  );
}

export default App;
