
import Recipe from "../components/recipe/Recipe";
import Announcement from "../components/announcement/Announcement";
import Nav from "../components/nav/Nav";
import PopularCommunity from "../components/community/PopularCommunity";
import NewCommunity from "../components/community/NewCommunity";

export default function Main() {
  
  return (
    <div className="App">
      {/* 네브 */}
      <Nav/>
      {/* 컨텐츠 */}
      <div className="flex justify-center mt-10">
        <div className='w-[1200px] flex flex-wrap justify-between'>
          {/* 인기모임 */}
          <PopularCommunity/>
          {/* 레시피 */}
          <Recipe/>
          {/* 새싹모임 */}
          <NewCommunity
          />
          {/* 공지사항 */}
          <Announcement/>
        </div>
      </div>
    </div>
  );
}
