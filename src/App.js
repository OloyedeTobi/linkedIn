import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/HomePage/Home";


function App() {
  return (

    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
