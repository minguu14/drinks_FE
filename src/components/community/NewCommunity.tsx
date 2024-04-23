import { Link } from "react-router-dom";
import NewCommunityCard from "./newCommunityCard/NewCommunityCard";
import { CommunityType } from "../../models/type";

interface NewCommunityType {
  newCommunity: CommunityType[];
}

export default function NewCommunity({newCommunity}: NewCommunityType) {
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
            id={newbie.id}
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
