import { useState } from "react";
import { Link } from "react-router-dom";
import NewCommunityCard from "./newCommunityCard/NewCommunityCard";

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

export default function NewCommunity() {
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
    <div className="flex-col justify-between w-[600px] mt-10">
      <div className="flex justify-between">
      <span className="font-['TTLaundryGothicB'] text-[20px]">
        오늘 신설 했어요! 새싹 모임
      </span>
      <Link to='/NewCommunity'><span className="text-[10px]">전체보기</span></Link>
      </div>
      <div className="flex flex-wrap gap-4 mt-5">
        { newCommunity.map((newbie) => (
            <NewCommunityCard 
            key={newbie.id}
            img={newbie.img}
            tag1={newbie.tag1}
            tag2={newbie.tag2}  
            area={newbie.area}  
            groupName={newbie.groupName}
            people={newbie.people}
            recentChat={newbie.recentChat}  
            isPopular={newbie.isPopular}  
            isNew={newbie.isNew}  
            />
          )) 
        }
      </div>
    </div>
  );
}
