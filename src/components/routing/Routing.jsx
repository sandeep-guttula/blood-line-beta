import React from "react";
import Home from '../home/Home';
import Nav from '../nav/Nav';
import Search from "../search/Search";
import { BrowserRouter ,Routes, Route} from "react-router-dom";
const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/search" element={<Search/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing