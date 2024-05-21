import { useEffect, useState } from "react";
import { CommunityType } from "../../models/type";
import communityStore from "../../stores/community";
import PopularCommunityCard from "./popularCommunityCard/PopularCommunityCard";
import { Link } from "react-router-dom";

export default function PopularCommunity() {
  const { community } = communityStore();
  const [popularCommunity, setPopularCommunity] = useState<CommunityType[]>([]);

  const popularFilter = () => {
    const filter = community.filter(popular => popular.isPopular);
    setPopularCommunity(filter);
  }
  useEffect(()=> {
    popularFilter();
    },[community])
    
  return (
    <div className="flex-col justify-between w-[600px]">
      <div className="flex justify-between">
      <span className="font-['TTLaundryGothicB'] text-[20px]">
        이런 모임 어때?! 실시간 인기 모임
      </span>
      <Link to='/popularCommunity'><span className="text-[10px]">전체보기</span></Link>
      </div>
      { popularCommunity.length ?
      <div className="flex flex-wrap gap-4 mt-5">
        { popularCommunity.slice(0,4).map((popular) => (
            popular.isPopular &&
            <PopularCommunityCard
            key={popular.id}
            id={popular.id}
            thumbnail_url={popular.thumbnail_url}
            description={popular.description}
            tag1={popular.tag1}  
            tag2={popular.tag2}  
            area={popular.area}
            communityName={popular.communityName}  
            member={popular.member}  
            posts={popular.posts}  
            schedule={popular.schedule}  
            chatRoom={popular.chatRoom}  
            last_chat_time={popular.last_chat_time}
            isPublic={popular.isPublic}
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
