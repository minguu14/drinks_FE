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
import FindId from "./pages/Login/FindId";
import LoginTest from "./pages/LoginTest";
import FindPassword from "./pages/Login/FindPassword";
import ChangePassword from "./pages/Login/ChangePassword";
import CommunitySetting from "./pages/CommunitySetting/CommunitySetting";
// import KaKaoLogin from "./pages/Login/KaKaoLogin";


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
        <Route path="/logintest" element={<LoginTest />}></Route>
        <Route path="/popularCommunity" element={<PopularCommunity />}></Route>
        <Route path="/recipe" element={<RecipesPage />}></Route>
        <Route path="/newCommunity" element={<NewCommunity />}></Route>
        <Route path="/announcement" element={<Announcement />}></Route>
        <Route path="/createCommunity" element={<CreateCommunity />}></Route>
        <Route path="/communitySetting" element={<CommunitySetting />}></Route>
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
      <Route path="/login/signup" element={<SignUp></SignUp>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/login/findid" element={<FindId></FindId>}></Route>
      <Route
        path="/login/findpassword"
        element={<FindPassword></FindPassword>}
      ></Route>
      <Route
        path="/login/findpassword/changepassword"
        element={<ChangePassword></ChangePassword>}
      ></Route>
      {/* <Route path="/kakaologin" element={<KaKaoLogin></KaKaoLogin>}></Route> */}
    </Routes>
  );
}

export default App;
