
import Recipe from "../components/recipe/Recipe";
import Announcement from "../components/announcement/Announcement";
import Nav from "../components/nav/Nav";
import PopularCommunity from "../components/community/PopularCommunity";
import NewCommunity from "../components/community/NewCommunity";
import { useState } from "react";
import { CommunityType } from "../models/type";

export default function Main() {
  const [popularCommunity, setPopularCommunity] = useState<CommunityType[]>([{
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
    groupName: "한잔합시다",
    people: 5,
    recentChat: "5분 전 마지막 대화",
    isPopular: true,
    isNew: false,
  },
  {
    id: "3",
    img: "community2.png",
    tag1: "와인",
    tag2: "양주",
    area: "인천",
    groupName: "한잔하조",
    people: 5,
    recentChat: "5분 전 마지막 대화",
    isPopular: true,
    isNew: false,
  },
  {
    id: "4",
    img: "community2.png",
    tag1: "와인",
    tag2: "양주",
    area: "인천",
    groupName: "한잔하조",
    people: 5,
    recentChat: "5분 전 마지막 대화",
    isPopular: true,
    isNew: false,
  },
  {
    id: "5",
    img: "community2.png",
    tag1: "와인",
    tag2: "양주",
    area: "인천",
    groupName: "한잔하조",
    people: 5,
    recentChat: "5분 전 마지막 대화",
    isPopular: true,
    isNew: false,
  },
  {
    id: "6",
    img: "community2.png",
    tag1: "와인",
    tag2: "양주",
    area: "인천",
    groupName: "한잔하조",
    people: 5,
    recentChat: "5분 전 마지막 대화",
    isPopular: true,
    isNew: false,
  },
]);
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
}
]);

  return (
    <div className="App">
      {/* 네브 */}
      <Nav/>
      {/* 컨텐츠 */}
      <div className="flex justify-center mt-10">
        <div className='w-[1200px] flex flex-wrap justify-between'>
          {/* 인기모임 */}
          <PopularCommunity
          popularCommunity={popularCommunity}
          />
          {/* 레시피 */}
          <Recipe/>
          {/* 새싹모임 */}
          <NewCommunity
          newCommunity={newCommunity}
          />
          {/* 공지사항 */}
          <Announcement/>
        </div>
      </div>
    </div>
  );
}
