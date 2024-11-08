
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import SigninPage from './Pages/Signin/SigninPage';
import SignupPage from './Pages/Signup/SignupPage';
import HomePage from "./Pages/HomePage/HomePage";
import MyNavBar from "./components/Nav/NavBar";

function App() {
  const location=useLocation()
  return (
    <div className="App">

  {(location.pathname!=='/' && location.pathname!=='/signup') &&  <MyNavBar/>}
      <Routes>
        <Route path="/" element={<SigninPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
