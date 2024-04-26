import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Outlet, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import PopularCommunity from "./pages/PopularCommunity";
import Recipe from "./pages/Recipe";
import NewCommunity from "./pages/NewCommunity";
import Announcement from "./pages/Announcement";
import Header from "./components/header/Header";

const LayOut = () => {
  return(
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<LayOut></LayOut>}>
        <Route index element={<Main></Main>}></Route>
        <Route path="/popularCommunity" element={<PopularCommunity></PopularCommunity>}></Route>
        <Route path="/recipe" element={<Recipe></Recipe>}></Route>
        <Route path="/newCommunity" element={<NewCommunity></NewCommunity>}></Route>
        <Route path="/announcement" element={<Announcement></Announcement>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
