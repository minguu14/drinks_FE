import { Link } from "react-router-dom";
import location from "../../../img/location.png";
import king from "../../../img/king.png";
import { CommunityType, UserType } from "../../../models/type";
import communityStore from "../../../stores/community";
import { useEffect, useState } from "react";

export default function NewCommunityCard({id, thumbnail_url, tag1, tag2, area, communityName, member, last_chat_time, isPopular, isNew}: CommunityType) {

  const { community, selectCommunity } = communityStore();
  const [communityKing, setCommunityKing] = useState<UserType>();
  const [realMember, setRealMember] = useState<UserType[]>([]);

  const selectedItem = () => {
    const [filterItem] = community.filter(item => item.id === id);
    selectCommunity(filterItem);
  }

  const getKing = () => {
    const [k] = member.filter(king => king.authority === "모임장");
    setCommunityKing(k);
  }

  const showMember = () => {
    const filter = member.filter(m => m.state === true);
    setRealMember(filter);
  }

  useEffect(() => {
    getKing();
    showMember();
  },[community])
  
  return (
    <Link to={`community/${id}`}>
    <div className='flex items-center border border-black w-[290px] h-[90px] rounded-[10px]' onClick={selectedItem}>
          <div className='w-[90px] h-[75px] text-[10px] text-center ml-1'>
            <img src={thumbnail_url} alt="communityImage" className="w-full h-full rounded-[10px] object-cover"/>
          </div>
          <div className="w-[185px] flex flex-col ml-2">
            <div className="flex justify-between">
              <div className="flex gap-x-2">
                <div className='rounded-[20px] px-2 h-[18px] text-[8px] bg-red-300 text-center flex items-center justify-center'>{tag1}</div>
                <div className='rounded-[20px] px-2 h-[18px] text-[8px] bg-blue-300 text-center flex items-center justify-center'>{tag2}</div>
              </div>
              <div className="flex items-center mr-1">
                <img src={location} alt="location" className='w-[10px] h-[10px]'/>
                <div className='text-[8px]'>{area}</div>
              </div>
            </div>
            <div className="flex flex-col mr-1">
              <div className='text-[13px] mt-1'>{communityName}</div>
              <div className='text-[10px] self-end'>{realMember.length} / 100</div>
              <div className="flex justify-between items-center">
                <div className="flex">
                  <img src={king} alt="king" className="w-[14px] h-[14px]"/>
                  <div className="text-[10px] mt-[1px]">{communityKing?.profile.nickname}</div>
                </div>
                <div className='text-[10px]'>{last_chat_time}</div>
              </div>
            </div>
          </div>
      </div>
    </Link>
  )
}
