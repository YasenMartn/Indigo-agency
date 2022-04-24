import React from "react";
import Navbar from "./Components/Navbar";
import "./GlobalStyle.css"
import Home from "./Pages/Home";
import Services from "./Pages/Services";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
     
    </div>
  );
}

export default App;
