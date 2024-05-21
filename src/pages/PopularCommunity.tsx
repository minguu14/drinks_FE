import { useEffect, useState } from "react";
import PopularCommunityCard from "../components/community/popularCommunityCard/PopularCommunityCard";
import { Link } from "react-router-dom";
import communityStore from "../stores/community";
import { CommunityType } from "../models/type";

export default function PopularCommunity() {
  const { community } = communityStore();
  const [popularCommunity, setPopularCommunity] = useState<CommunityType[]>([]);
  const [isMore, setIsMore] = useState(false);
  
  useEffect(()=> {
  const popularFilter = community.filter((popular) => popular.isPopular);
  setPopularCommunity(popularFilter);
  },[community])

  return (
    <div className="relative mt-[200px]">
      <Link to='/createCommunity'>
      <div className="absolute right-[310px] hover:cursor-pointer flex justify-center items-center rounded-[10px] bg-blue-600 w-[120px] h-[60px] text-white">+ 모임생성</div>
      </Link>
      <div className="flex justify-center mt-[100px]">
        { popularCommunity.length ?
        <div className="flex flex-wrap justify-center w-[1000px] gap-5">
            {
              isMore ? popularCommunity.map((popular) => (
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
              :
              popularCommunity.slice(0,9).map((popular) => (
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
            ))}
        </div>
        :
        <div className="text-[20px]">모임이 없습니다.</div>
        }
      </div>
      {popularCommunity.length > 9 ? 
      <div className="flex justify-center">
        {isMore ? <button onClick={() => setIsMore(false)} className="flex justify-center items-center mt-[50px] rounded-[30px] w-[150px] h-[50px] text-white bg-blue-600 relative">
          <span>접기</span>
          <span className="absolute right-[35px]">{`<`}</span>
        </button>
        :
        <button onClick={() => setIsMore(true)} className="flex justify-center items-center mt-[50px] rounded-[30px] w-[150px] h-[50px] text-white bg-blue-600 relative">
          <span>더보기</span>
          <span className="absolute right-[35px]">{`>`}</span>
        </button>
        }
      </div>
      :
      <div></div>
      }
    </div>
  )
}
