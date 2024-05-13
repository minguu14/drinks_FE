import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import communityStore from "../stores/community";
import { CommunityType } from "../models/type";
import NewCommunityCard from "../components/community/newCommunityCard/NewCommunityCard";

export default function PopularCommunity() {
  const { community } = communityStore();
  const [newCommunity, setNewCommunity] = useState<CommunityType[]>([]);
  const [isMore, setIsMore] = useState(false);
  
  useEffect(()=> {
  const newbieFilter = community.filter((newbie) => newbie.isNew);
  setNewCommunity(newbieFilter);
  },[community])

  return (
    <div className="relative mt-[200px]">
      <Link to='/createCommunity'>
      <div className="absolute right-[310px] hover:cursor-pointer flex justify-center items-center rounded-[10px] bg-blue-600 w-[120px] h-[60px] text-white">+ 모임생성</div>
      </Link>
      <div className="flex justify-center mt-[100px]">
        { newCommunity.length ?
        <div className="flex flex-wrap justify-center w-[1000px] gap-5">
            {
              isMore ? newCommunity.map((newbie) => (
                <NewCommunityCard
                key={newbie.id}
                id={newbie.id}
                thumbnail_url={newbie.thumbnail_url}
                description={newbie.description}
                tag1={newbie.tag1}  
                tag2={newbie.tag2}  
                area={newbie.area}  
                communityName={newbie.communityName}  
                member={newbie.member}  
                posts={newbie.posts}  
                last_chat_time={newbie.last_chat_time}
                isPublic={newbie.isPublic}
                isPopular={newbie.isPopular}  
                isNew={newbie.isNew}  
                />
              ))
              :
              newCommunity.slice(0,9).map((newbie) => (
              <NewCommunityCard
              key={newbie.id}
              id={newbie.id}
              thumbnail_url={newbie.thumbnail_url}
              description={newbie.description}
              tag1={newbie.tag1}  
              tag2={newbie.tag2}  
              area={newbie.area}
              communityName={newbie.communityName}  
              member={newbie.member}  
              posts={newbie.posts}  
              last_chat_time={newbie.last_chat_time}  
              isPublic={newbie.isPublic}
              isPopular={newbie.isPopular}  
              isNew={newbie.isNew}  
              />
            ))}
        </div>
        :
        <div className="text-[20px]">모임이 없습니다.</div>
        }
      </div>
      {newCommunity.length > 9 ? 
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
