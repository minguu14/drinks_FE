import "./App.css";

import { Outlet, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import PopularCommunity from "./pages/PopularCommunity";
import Recipe from "./pages/Recipe";
import NewCommunity from "./pages/NewCommunity";
import Announcement from "./pages/Announcement";
import Header from "./components/header/Header";
import CreateCommunity from "./pages/CreateCommunity";
import MyCommunity from "./pages/MyCommunity";
import Community from "./pages/Community/Community";

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
      <Route path="/" element={<LayOut/>}>
        <Route index element={<Main />}></Route>
        <Route path="/popularCommunity" element={<PopularCommunity />}></Route>
        <Route path="/recipe" element={<Recipe/>}></Route>
        <Route path="/newCommunity" element={<NewCommunity/>}></Route>
        <Route path="/announcement" element={<Announcement/>}></Route>
        <Route path="/createCommunity" element={<CreateCommunity/>}></Route>
        <Route path="/myCommunity" element={<MyCommunity/>}></Route>
        <Route path="/community/:id" element={<Community/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
