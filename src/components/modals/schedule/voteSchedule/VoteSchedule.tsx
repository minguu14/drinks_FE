import communityStore from "../../../../stores/community";
import participationIcon from "../../../../img/comment.png";
import userStore from "../../../../stores/user";
import { useEffect, useState } from "react";
import ParticipationList from "../participationListModal/ParticipationList";
import uuid from "react-uuid";
import { CommunityType } from "../../../../models/type";
import { joinCommunity } from "../../../../Api/community";

export default function VoteSchedule() {
  const { selectedVote, selectVote, community, selectedCommunity, fetchCommunity } = communityStore();
  const { loginUser } = userStore();
  const [list, setList] = useState(false);
  
  const participation = () => {
    const [updateCommunity] = community.map((u) => {
      if(u.id === selectedCommunity.id){
        const vote = u.schedule.map(sc => {
          if(sc.id === selectedVote.id){
            return {
              ...sc,
              users:[...sc.users,{
                id: uuid(),
                userImg: loginUser.profile_picture,
                userName: loginUser.name,
              }]
            }
          }
          return sc;
        })
        return {
          ...u,
          schedule: vote
        }
      }
      return u;
    }) as CommunityType[];
    
    joinCommunity(updateCommunity).then(() => fetchCommunity());
    // selectVote({
    //   ...selectedVote,
    //   users: [
    //     ...selectedVote.users,
    //     {
    //       id: uuid(),
    //       userImg: loginUser.profile_picture,
    //       userName: loginUser.name,
    //     },
    //   ],
    // });
  };
  const nonappearance = () => {
    const [updateCommunity] = community.map((u) => {
      if(u.id === selectedCommunity.id){
        const vote = u.schedule.map(sc => {
          if(sc.id === selectedVote.id){
            const filter = sc.users.filter(f => f.userName !== loginUser.name);
            return {
              ...sc,
              users: filter
            }
          }
          return sc;
        })
        return {
          ...u,
          schedule: vote
        }
      }
      return u;
    }) as CommunityType[];
    
    joinCommunity(updateCommunity).then(() => fetchCommunity());
    // const filterUsers = selectedVote.users.filter((u) => u.userName !== loginUser.name);
    // selectVote({
    //     ...selectedVote,
    //     users: filterUsers
    //   });
  };

  useEffect(() => {
    const [filterItem] = community.filter(f => f.id === selectedCommunity.id);
    const [updateVote] = filterItem.schedule;
    selectVote(updateVote);
    },[community])

  return (
    <div className="border border-black rounded-[10px] w-[490px] h-[685px] absolute top-[-690px] right-[-25px]">
      <div className="flex justify-center items-center mt-5">
        <span className="text-[32px]">일정 투표</span>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <label htmlFor="schedule_title">
          <input
            type="text"
            id="schedule_title"
            value={selectedVote.scheduleTitle}
            readOnly
            className="border w-[440px] h-[40px] rounded-[5px] bg-gray-100 p-3 mb-10 text-[15px]"
          />
        </label>
        <label htmlFor="schedule_description">
          <input
            type="text"
            value={selectedVote.scheduleDescription}
            readOnly
            id="schedule_description"
            className="border w-[440px] h-[95px] rounded-[5px] bg-gray-100 p-3 mb-10 text-[15px]"
          />
        </label>
        <label htmlFor="schedule_location">
          <input
            type="text"
            value={selectedVote.scheduleLocation}
            readOnly
            id="schedule_location"
            className="border w-[440px] h-[40px] rounded-[5px] bg-gray-100 p-3 text-[15px]"
          />
        </label>

        <div className="w-[435px] mt-[45px]">
          <p>날짜 및 시간</p>
          <div className="flex">
            <div className="border rounded-[5px] w-[180px] h-[40px] mr-5 text-[14px] p-2 bg-gray-100">
              {selectedVote.scheduleDate}
            </div>
            <div className="border rounded-[5px] w-[110px] h-[40px] text-[14px] p-2 bg-gray-100">
              {selectedVote.scheduleTime}
            </div>
          </div>
        </div>

        <div className="w-[435px] flex items-center mt-5 gap-x-2 relative">
          <span>{`${selectedVote.users.length}명 참여`}</span>
          <img src={participationIcon} alt="participation" className={`cursor-pointer ${list ? 'rotate-180' : ''}`}
            onClick={()=>setList(!list)}
          />
          { list && 
              <ParticipationList/>
          }
        </div>
        {selectedVote.users.some((u) => u.userName === loginUser.name) ?
          <button
            className="w-[70px] h-[40px] rounded-[5px] bg-red-500 text-white mt-20"
            onClick={nonappearance}
          >
            취소
          </button>
            : 
          <div className="flex gap-x-[30px]">
            <button
              className="w-[70px] h-[40px] rounded-[5px] bg-blue-500 text-white mt-20"
              onClick={participation}
            >
              참여
            </button>
          </div>
        }
      </div>
    </div>
  );
}
