import {Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Fiche from './components/Fiche';
import Error from './components/Error';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import './style/app.scss';
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function App() {
  const navigate = useNavigate()

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Home />}/>
        <Route path="/Fiche/:idFiche" element={<Fiche navigate={navigate} useEffect={useEffect} />} />
          <Route path="/Propos" element={<About />} />
          <Route path="/*" element={<Error />} /> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
