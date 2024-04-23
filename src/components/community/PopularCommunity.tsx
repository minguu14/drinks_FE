import PopularCommunityCard from "./popularCommunityCard/PopularCommunityCard";
import { Link } from "react-router-dom";
import { CommunityType } from "../../models/type";

interface PopularCommunityType {
  popularCommunity: CommunityType[];
}

export default function PopularCommunity({popularCommunity}: PopularCommunityType) {
  

  return (
    <div className="flex-col justify-between w-[600px]">
      <div className="flex justify-between">
      <span className="font-['TTLaundryGothicB'] text-[20px]">
        이런 모임 어때?! 실시간 인기 모임
      </span>
      <Link to='/popularCommunity'><span className="text-[10px]">전체보기</span></Link>
      </div>
      <div className="flex flex-wrap gap-4 mt-5">
        { popularCommunity.slice(0,4).map((popular) => (
            <PopularCommunityCard
            key={popular.id}
            id={popular.id}
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
