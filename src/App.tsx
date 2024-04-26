import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import PopularCommunity from "./pages/PopularCommunity";
import Recipe from "./pages/Recipe";
import NewCommunity from "./pages/NewCommunity";
import Announcement from "./pages/Announcement";
import Header from "./components/header/Header";
import { CommunityType } from "./models/type";
import { useState } from "react";
import CreateCommunity from "./pages/CreateCommunity";
import MyCommunity from "./pages/MyCommunity";

const LayOut = () => {
  return(
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

function App() {
const [newCommunity, setNewCommunity] = useState<CommunityType[]>([{
  id: "1",
  img: "community1.png",
  tag1: "소주",
  tag2: "맥주",
  area: "서울",
  groupName: "치얼스",
  people: 3,
  recentChat: "10분 전 마지막 대화",
  isPopular: true,
  isNew: false,
},
{
  id: "2",
  img: "community2.png",
  tag1: "와인",
  tag2: "양주",
  area: "인천",
  groupName: "한좐",
  people: 5,
  recentChat: "5분 전 마지막 대화",
  isPopular: true,
  isNew: false,
},
{
  id: "2",
  img: "community2.png",
  tag1: "와인",
  tag2: "양주",
  area: "인천",
  groupName: "한좐",
  people: 5,
  recentChat: "5분 전 마지막 대화",
  isPopular: true,
  isNew: false,
},
{
  id: "2",
  img: "community2.png",
  tag1: "와인",
  tag2: "양주",
  area: "인천",
  groupName: "한좐",
  people: 5,
  recentChat: "5분 전 마지막 대화",
  isPopular: true,
  isNew: false,
},
]);
  return (
    <Routes>
      <Route path="/" element={<LayOut/>}>
        <Route index element={<Main newCommunity={newCommunity}/>}></Route>
        <Route path="/popularCommunity" element={<PopularCommunity />}></Route>
        <Route path="/recipe" element={<Recipe/>}></Route>
        <Route path="/newCommunity" element={<NewCommunity/>}></Route>
        <Route path="/announcement" element={<Announcement/>}></Route>
        <Route path="/createCommunity" element={<CreateCommunity/>}></Route>
        <Route path="/myCommunity" element={<MyCommunity/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
