import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./globalStyles";
import { Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Home from "./pages/Home/Home";
import Confirmado from "./pages/Confirmado/Confirmado";
import Contato from "./pages/Contato/Contato";
import Creditos from "./pages/Creditos/creditos";

function App() {
  return (
    <>
     <GlobalStyle/>
     <Navbar/>

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<About />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Confirmado" element={<Confirmado />} />
        <Route path="/Creditos" element={<Creditos />} />
     </Routes>

     
     <Footer />
    </>
  );
}

export default App;
