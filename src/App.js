import {Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Fiche from './components/Fiche';
import Error from './components/Error';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from "react";

function App() {
  const [isData, updateData] = useState()
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home isData={isData} updateData={updateData} />}/>
        <Route path="/Fiche" element={<Fiche isData={isData} updateData={updateData} />}/>
        <Route path="/*" element={<Error />}/>
        <Route path="/Propos" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
