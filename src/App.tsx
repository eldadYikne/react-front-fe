import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Images from "./pages/images/Images";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Repositories from "./pages/repositories/Repositories";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="site-container">
      <div className="content-wrap">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/images" element={<Images />} />
          <Route path="/repositories" element={<Repositories />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
