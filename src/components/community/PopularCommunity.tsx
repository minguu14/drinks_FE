import communityStore from "../../store/store";
import PopularCommunityCard from "./popularCommunityCard/PopularCommunityCard";
import { Link } from "react-router-dom";

export default function PopularCommunity() {
  const { community } = communityStore();
  return (
    <div className="flex-col justify-between w-[600px]">
      <div className="flex justify-between">
      <span className="font-['TTLaundryGothicB'] text-[20px]">
        이런 모임 어때?! 실시간 인기 모임
      </span>
      <Link to='/popularCommunity'><span className="text-[10px]">전체보기</span></Link>
      </div>
      { community.length ?
      <div className="flex flex-wrap gap-4 mt-5">
        { community.slice(0,4).map((popular) => (
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
      :
      <div className="flex justify-center mt-[70px]">
        <div>모임이 없습니다</div>
      </div>
      }
    </div>
  );
}
