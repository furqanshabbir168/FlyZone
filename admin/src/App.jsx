import React, { useState , useEffect} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DashBoard from "./Pages/DashBoard";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import AddFlight from "./Pages/AddFlight";
import { Toaster } from 'react-hot-toast';
import Home from "./Components/Home/Home";
import Loading from "../../frontend/src/Components/Loading/Loading";

function App () {
  const url = 'https://flyzone-backend-eight.vercel.app'
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [loading , setLoading] = useState(false);

  useEffect(() => {
  setLoading(true);
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000); // Shorter & smoother
  return () => clearTimeout(timer);
}, [location]);

  return(
    <div>
      {loading && <Loading/>}
      <Toaster position="top-right" reverseOrder={false} />
      <NavBar/>
      {!isHomePage && <SideBar/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin/dashboard" element={<DashBoard/>}/>
        <Route path="/admin/add-flight" element={<AddFlight url={url}/>}/>
      </Routes>
    </div>
  );
}
export default App