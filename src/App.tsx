import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import PopularCommunity from "./pages/PopularCommunity";
import RecipesPage from "./pages/RecipesPage";
import NewCommunity from "./pages/NewCommunity";
import Announcement from "./pages/Announcement";
import Header from "./components/header/Header";
import CreateCommunity from "./pages/CreateCommunity/CreateCommunity";
import MyCommunity from "./pages/MyCommunity";
import Community from "./pages/Community/Community";
import CommunityMember from "./pages/CommunityMember/CommunityMember";
import CreateRecipe from "./pages/Recipe/CreateRecipe";
import EditRecipe from "./pages/Recipe/EditRecipe";
import RecipeDetail from "./pages/Recipe/RecipeDetail";
import AlcoholicCategory from "./components/AlcoholicCategory/AlcoholicCategory";
import SignUp from "./pages/Login/SignUp";
import Login from "./pages/Login/Login";
import LoginTest from "./pages/LoginTest";

const LayOut = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Main />}></Route>
        <Route path="/login" element={<LoginTest />}></Route>
        <Route path="/popularCommunity" element={<PopularCommunity />}></Route>
        <Route path="/recipe" element={<RecipesPage />}></Route>
        <Route path="/newCommunity" element={<NewCommunity />}></Route>
        <Route path="/announcement" element={<Announcement />}></Route>
        <Route path="/createCommunity" element={<CreateCommunity />}></Route>
        <Route path="/myCommunity" element={<MyCommunity />}></Route>
        <Route path="/community/:id" element={<Community />}></Route>
        <Route
          path="/popularCommunity/community/:id"
          element={<Community />}
        ></Route>
        <Route path="/communityMember" element={<CommunityMember />}></Route>
        <Route path="/recipe/createrecipe" element={<CreateRecipe />}></Route>
        <Route path="/recipe/editrecipe" element={<EditRecipe />}></Route>
        <Route path="/recipe/RecipeDetail" element={<RecipeDetail />}></Route>
        <Route path="/recipe/test" element={<AlcoholicCategory />}></Route>
      </Route>
      <Route path="/login/SignUp" element={<SignUp></SignUp>}></Route>
      <Route path="/Login" element={<Login></Login>}></Route>
    </Routes>
  );
}

export default App;
