import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/login";
import Navbar from "./components/Navbar";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home />,
//     },
//     {
//         path: "/about",
//         element: <About />,
//     },
//     {
//         path:'/login',
//         element:<Login/>
//     }
// ]);

function App() {
    return(
        <div>
            {/* <Navbar/>
            <RouterProvider router={router} />; */}
            <Router>
                <Navbar 
                    alumni="/alumni"
                    login="/login"
                    about="/about"
                    home="/"
                    events="/events"
                />
                <Routes>
                    <Route path="/" element={<Home/>} />``
                    <Route path="/about" element={<About/>} />
                    <Route path="/login" element={<Login/>} />
                    {/* <Route path="/" element={<Home/>} /> */}
                </Routes>
            </Router>
        </div>
    )
}

export default App;
