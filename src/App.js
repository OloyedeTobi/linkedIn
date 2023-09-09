import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css'
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Home from "./pages/HomePage/Home";


function App() {
  return (

    <BrowserRouter>
       <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
