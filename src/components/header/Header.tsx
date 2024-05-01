import logo from "../../img/logo.png";
import info from "../../img/info.png";
import scrap from "../../img/scrap.png";
import search from "../../img/search.png";
import mask from "../../img/mask.png";
import sun from "../../img/sun.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between mb-5 fixed top-0 bg-white z-50">
      <Link to="/">
        <img src={logo} alt="logo" className="ml-[100px]" />
      </Link>
      <div className="flex items-center text-[20px] font-['TTLaundryGothicB'] space-x-10 mr-[140px]">
        <div>
          <span className="text-blue-600">주종</span> 설명
        </div>
        <div>
          <span className="text-blue-600">주류</span> 모아보기
        </div>
        <Link to="/PopularCommunity">모임</Link>
        <Link to="/Recipe">레시피</Link>
      </div>
      <div className="relative mr-10">
        <input
          type="text"
          placeholder="오늘의 술은?!"
          className="bg-gray-200/60 rounded-[10px] w-[450px] h-[50px] text-center font-['TTLaundryGothicB']"
        />
        <img
          src={search}
          alt="search"
          className="absolute top-3 left-[400px] hover:cursor-pointer"
        />
      </div>
      <div className="flex items-center mr-[80px]">
        <img src={sun} alt="scrap" className="mr-[10px]" />
        <Link to="/recipe/createrecipe">
          <img src={mask} alt="scrap" className="mr-[10px]" />
        </Link>
        <img src={scrap} alt="scrap" className="mr-[10px]" />
        <img src={info} alt="info" />
      </div>
    </header>
  );
}
