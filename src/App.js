import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Fiche from './pages/Fiche';
import About from './pages/About';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Fiche/:idFiche" element={<Fiche />} />
          <Route path="/Propos" element={<About />} />
          <Route path="/*" element={<Error />} /> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
