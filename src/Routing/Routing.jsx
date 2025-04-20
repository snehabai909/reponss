import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import Teams from "../Teams/Teams";
import Projects from "../Projects/Projects";
import About from "../About/About";
import ServicesPage from "../ServicesPage/ServicesPage";

// ScrollToTop component to handle scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function Routing(){
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/teams" element={<Teams/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
      </Routes>
    </>
  )
}

export default Routing;