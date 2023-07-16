import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Registration from "./pages/registration";

function App() {
    return(
        <div>
            <Router>
                <Navbar 
                    alumni="/alumni"
                    login="/login"
                    about="/about"
                    home="/"
                    events="/events"
                    registration="/registration"
                />
                <Routes>
                    <Route path="/" element={<Home/>} />``
                    <Route path="/about" element={<About/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/registration" element={<Registration/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
