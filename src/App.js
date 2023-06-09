import {Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Fiche from './components/Fiche';
import Error from './components/Error';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path={"/Fiche/:idFiche"}  element={<Fiche />} /> 
          <Route path="/Propos" element={<About />} />
          <Route path="/*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
