
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import SigninPage from './Pages/Signin/SigninPage';
import SignupPage from './Pages/Signup/SignupPage';
import HomePage from "./Pages/HomePage/HomePage";
import MyNavBar from "./components/Nav/NavBar";
import Auth from "./components/Auth/Auth";

function App() {
  const location=useLocation()
  return (
    <div className="App">
   
  {(location.pathname!=='/' && location.pathname!=='/signup') &&  <MyNavBar/>}
      <Routes>
        <Route element={<Auth/>}> 
        <Route path="/" element={<SigninPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        </Route>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
