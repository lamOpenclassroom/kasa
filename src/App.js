import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Fiche from './components/Fiche';
import Error from './components/Error';
import Propos from './components/Propos';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Fiche" element={<Fiche />}/>
        <Route path="/*" element={<Error />}/>
        <Route path="/Propos" element={<Propos/>}/>
      </Routes>
      <Footer/>
      </div>

  );
}

export default App;
