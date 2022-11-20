import HomePageScreen from "./screens/HomePageScreen";
import SuggestionScreen from "./screens/SuggestionScreen";
import CorrectionScreen from "./screens/CorrectionScreen";
import Contact from "./screens/Contact";
import About from "./screens/About";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GrammarCheckingScreen from "./screens/GrammarCheckingScreen";

function App() {
  const [token, setToken] = useState();
  const userLogin = (tok) => {
    setToken(tok);
    console.log("Token from App is :", token);
    console.log("Token from App is :", tok);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageScreen />} />
        <Route path="/suggestion" element={<SuggestionScreen />} />
        <Route path="/correction" element={<CorrectionScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login userLogin={userLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/grammar" element={<GrammarCheckingScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
