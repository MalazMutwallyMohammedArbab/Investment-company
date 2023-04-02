import {Routes, Route} from "react-router-dom";
import React from "react";
import Navbar from './Components/Navbar'
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import WhatWeDo from "./Pages/WhatWeDo";
import Vision from "./Pages/Vision";
import Letter from "./Pages/Letter";
import WhyAtimid from "./Pages/WhyAtimid";
import Contact from "./Pages/Contact";
import Industry from "./Components/Industry";
import Environment from "./Components/Environment";
import Building from "./Components/Building";
import StartupCompanies from "./Components/StartupCompanies";
import Health from "./Components/Health";
import Commercial from "./Components/Commercial";
import Consulting from "./Components/Consulting";
import Energy from "./Components/Energy";
import Maqayees from "./Components/Maqayees";
import MaqayeesEnv from "./Components/MaqayeesEnv";
import Atimid from "./Components/Atimid";
import Edfaa from "./Components/Edfaa";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-[#f8f8f8]">
      <Navbar />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/whatWeDo" element={<WhatWeDo />} />

        <Route exact path="/industry" element={<Industry />} />
        <Route exact path="/maqayees" element={<Maqayees />} />

        <Route exact path="/environment" element={<Environment />} />
        <Route exact path="/maqayeesEnv" element={<MaqayeesEnv />} />

        <Route exact path="/builing" element={<Building />} />
        <Route exact path="/atmid" element={<Atimid />} />

        <Route exact path="/startup" element={<StartupCompanies />} />
        <Route exact path="/edfaa" element={<Edfaa />} />

        <Route exact path="/health" element={<Health />} />
        <Route exact path="/commercial" element={<Commercial />} />
        <Route exact path="/consulting" element={<Consulting />} />
        <Route exact path="/energy" element={<Energy />} />

        <Route exact path="/vision" element={<Vision />} />
        <Route exact path="/letter" element={<Letter />} />
        <Route exact path="/whyAtmid" element={<WhyAtimid />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
