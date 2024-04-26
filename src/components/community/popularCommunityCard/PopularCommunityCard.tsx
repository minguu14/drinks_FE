import location from "../../../img/location.png";
import co from "../../../img/people.png";
import chat from "../../../img/chat.png";
import { CommunityType } from "../../../models/type";

export default function PopularCommunityCard({id, img, tag1, tag2, area, groupName, people, recentChat, isPopular, isNew}: CommunityType) {
  
  return (
    <div className='border-2 w-[290px] h-[90px] rounded-[10px] relative'>
        <div className='absolute top-[5px] left-[5px] border-2 rounded-[10px] w-[90px] h-[75px] text-[10px] text-center'><img src={img} alt="communityImage" className="w-full h-full rounded-[10px] object-cover"/></div>
        <div className='absolute top-[5px] left-[100px] border-2 rounded-[20px] w-[50px] h-[20px] text-center text-[10px]'>{tag1}</div>
        <div className='absolute top-[5px] left-[155px] border-2 rounded-[20px] w-[50px] h-[20px] text-center text-[10px]'>{tag2}</div>
        <img src={location} alt="location" className='absolute top-[10px] left-[235px] w-[10px] h-[10px] text-center text-[10px]'/>
        <div className='absolute top-[8px] left-[230px] w-[50px] h-[20px] text-center text-[10px]'>{area}</div>
        <div className='absolute top-[35px] left-[100px] w-[55px] h-[20px] text-center text-[12px]'>{groupName}</div>
        <div className='absolute top-[45px] left-[220px] w-[50px] h-[20px] text-center text-[10px]'>
          <div className="flex justify-between">
            <img src={co} alt="community" className="w-[12px] h-[12px]"/>
            {people} / 100
          </div>
        </div>
        <div className='absolute top-[65px] left-[180px] w-[100px] h-[20px] text-center text-[10px]'>
          <div className="flex items-center">
            <img src={chat} alt="chat" className="w-[12px] h-[12px] mr-[3px]"/>
            {recentChat}
          </div>
        </div>
  </div>
  )
}
