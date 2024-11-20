
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import SigninPage from './Pages/Signin/SigninPage';
import SignupPage from './Pages/Signup/SignupPage';
import HomePage from "./Pages/HomePage/HomePage";
import MyNavBar from "./components/Nav/NavBar";
import Auth from "./components/Auth/Auth";
import CreateLisingPage from "./Pages/Create Listing/CreateLisingPage";
import { useEffect } from "react";
import Footer from "./Pages/Footer/Footer";

function App() {
  const location=useLocation()
  return (
    <div className="App">
   
  {location.pathname!=='/' && location.pathname!=='/signup' && location.pathname!=='/createlisting' && <MyNavBar/>}
      <Routes>
        <Route element={<Auth/>}> 
        <Route path="/" element={<SigninPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        </Route>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/createlisting" element={<CreateLisingPage/>}/>
      </Routes>
      {location.pathname==='/home'  && <Footer/>}
    </div>
  );
}

export default App;
