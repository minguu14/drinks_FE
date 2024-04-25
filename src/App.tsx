import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main></Main>}></Route>
    </Routes>
  );
}

export default App;