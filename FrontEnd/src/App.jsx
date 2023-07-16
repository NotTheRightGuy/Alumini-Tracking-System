import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Registration from "./pages/registration";
import Login from "./pages/login";
import CollegeHome from "./pages/CollegeHome";
import GroupChats from "./pages/GroupChats";
import { useState } from "react";
import Events from "./pages/Events";
import CreateEvent from "./components/createEvent";
import SearchUser from "./pages/SearchUser";

function App() {
    

    return(
        <div className="h-screen w-screen">
            <Router>
                <Navbar 
                    alumni="/alumni"
                    login="/login"
                    home="/"
                    events="/events"
                    registration="/registration"
                    collegeHome="/collegeHome"
                />
                <div className='border-2 border-solid border-black-300 mb-16'>
            </div>  
                <Routes>
                    <Route path="/" element={<Home/>} />``
                    <Route path="/about" element={<About/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/registration" element={<Registration/>} />
                    <Route path="/collegeHome" element={<CollegeHome/>} />
                    <Route path="/collegeHome/createEvent" element={<CreateEvent/>} />
                    <Route path="/collegeHome/groupChats" element={<GroupChats/>} />
                    <Route path="/events" element={<Events/>} />
                    <Route path="/searchUser" element={<SearchUser/>} />
                    
                </Routes>
            </Router>
        </div>
    )
}

export default App;
