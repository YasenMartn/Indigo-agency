import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./GlobalStyle.css"
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Resources from "./Pages/Resources";
import Services from "./Pages/Services";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <Resources/>
      <Blog/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
