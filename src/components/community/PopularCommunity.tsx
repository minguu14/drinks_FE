import { useState } from "react";
import PopularCommunityCard from "./popularCommunityCard/PopularCommunityCard";
import { Link } from "react-router-dom";

interface CommunityType {
    id: string;
    img: string;
    tag1: string;
    tag2: string;
    area: string;
    groupName: string;
    people: number;
    recentChat: string;
    isPopular: boolean;
    isNew: boolean;
}

export default function PopularCommunity() {
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
  }
]);

  return (
    <div className="flex-col justify-between w-[600px]">
      <div className="flex justify-between">
      <span className="font-['TTLaundryGothicB'] text-[20px]">
        이런 모임 어때?! 실시간 인기 모임
      </span>
      <Link to='/popularCommunity'><span className="text-[10px]">전체보기</span></Link>
      </div>
      <div className="flex flex-wrap gap-4 mt-5">
        { popularCommunity.map((popular) => (
            <PopularCommunityCard
            key={popular.id}
            img={popular.img}
            tag1={popular.tag1}  
            tag2={popular.tag2}  
            area={popular.area}  
            groupName={popular.groupName}  
            people={popular.people}  
            recentChat={popular.recentChat}  
            isPopular={popular.isPopular}  
            isNew={popular.isNew}  
            />
          )) 
        }
      </div>
    </div>
  );
}
