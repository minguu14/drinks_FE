import { Link } from "react-router-dom";
import NewCommunityCard from "./newCommunityCard/NewCommunityCard";
import communityStore from "../../stores/community";
import { CommunityType } from "../../models/type";
import { useEffect, useState } from "react";

export default function NewCommunity() {
  const { community } = communityStore();
  const [newCommunity, setNewCommunity] = useState<CommunityType[]>([]);

  useEffect(()=> {
    const newbieFilter = community.filter(newbie => newbie.isNew);
    setNewCommunity(newbieFilter);
    },[community])
    
  return (
    <div className="flex-col justify-between w-[600px] mt-10">
      <div className="flex justify-between">
      <span className="font-['TTLaundryGothicB'] text-[20px]">
        오늘 신설 했어요! 새싹 모임
      </span>
      <Link to='/NewCommunity'><span className="text-[10px]">전체보기</span></Link>
      </div>
      { newCommunity.find((newbie) => newbie.isNew) ?
      <div className="flex flex-wrap gap-4 mt-5">
        { newCommunity.slice(0,4).map((newbie) => (
            newbie.isNew &&
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
            schedule={newbie.schedule}
            chatRoom={newbie.chatRoom}
            last_chat_time={newbie.last_chat_time}  
            isPublic={newbie.isPublic}
            isPopular={newbie.isPopular}  
            isNew={newbie.isNew}  
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
