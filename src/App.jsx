import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';  // Import AuthProvider

import SignInSignUp from './components/SignInSignUp';
import Home from './components/Home';
import About from './components/About';
import PageNotFound from './components/PageNotFound'; 
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import MissionVison from "./components/MissionVison";
import Login from "./components/Login";
import Register from "./components/Register";
import Subscription from "./components/Subscription";
import Profile from './components/Profile';  // Make sure you import Profile
import Landingpage from "./components/Landingpage";

function App() {
  return (
    <AuthProvider>  {/* Wrap the Router with AuthProvider */}
      <Router>
        <Routes>
          
          <Route path="/" element={<Landingpage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/subscribe" element={<Subscription />} />
          <Route path="/profile" element={<Profile />} /> {/* Add route for Profile */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
