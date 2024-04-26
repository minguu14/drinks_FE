import { useState } from "react";
import PopularCommunityCard from "../components/community/popularCommunityCard/PopularCommunityCard";
import { CommunityType } from "../models/type"
import { Link } from "react-router-dom";
import communityStore from "../store/store";

export default function PopularCommunity() {
  const { community } = communityStore();
  const [isMore, setIsMore] = useState(false);
  
  return (
    <div className="relative mt-[200px]">
      <Link to='/createCommunity'>
      <div className="absolute right-[310px] hover:cursor-pointer flex justify-center items-center rounded-[10px] bg-blue-600 w-[120px] h-[60px] text-white">+ 모임생성</div>
      </Link>
      <div className="flex justify-center mt-[100px]">
        { community.length ?
        <div className="flex flex-wrap justify-center w-[1000px] gap-5">
            {
              isMore ? community.map((popular) => (
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
              :
              community.slice(0,9).map((popular) => (
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
            ))}
        </div>
        :
        <div className="text-[20px]">모임이 없습니다.</div>
        }
      </div>
      {community.length > 9 ? 
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
