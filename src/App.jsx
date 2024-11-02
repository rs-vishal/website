import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ParticlesComponent from './components/Particles';
import SignInSignUp from './components/SignInSignUp';
import Home from './components/Home';
import About from './components/About';
import Content from './components/Content';
import PageNotFound from './components/PageNotFound'; 
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import MissionVison from "./components/MissionVison";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/content" element={<Content />} />
          <Route path="/sign-in-sign-up" element={<SignInSignUp />} />
          <Route path="/techstack" element={<TechStack />} />
          <Route path="/missionvision" element={<MissionVison />} />


          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
