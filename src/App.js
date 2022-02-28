import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import AvalonPark from './Components/AvalonPark/AvalonPark';
import GreatAcres from './Components/GreatAcres/GreatAcres';
import AspenGreens from './Components/AspenGreens/AspenGreens';
import EdenPark from './Components/EdenPark/EdenPark';
import MeridianPark from './Components/MeridianPark/MeridianPark';
import TopHeader from './Components/Includes/TopHeader';
import Footer from './Components/Includes/Footer';
import Blogs from './Components/Home/Blogs';
import Success from './Components/Home/Success';

function App() {
  return (
    <Router>
        <TopHeader />
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/projects/avalon-park" element={<AvalonPark />}></Route>
          <Route path="/projects/great-acres" element={<GreatAcres />}></Route>
          <Route path="/projects/aspen-greens" element={<AspenGreens />}></Route>
          <Route path="/projects/eden-park" element={<EdenPark />}></Route>
          <Route path="/projects/meridian-park" element={<MeridianPark />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/success" element={<Success />}></Route>
        </Routes>  
        <Footer />
    </Router>
  );
}

export default App;
