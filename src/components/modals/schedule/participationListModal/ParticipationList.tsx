import { ScheduleType } from "../../../../models/type";
import communityStore from "../../../../stores/community";
import ListCard from "./ListCard/ListCard";

export default function ParticipationList() {
    const { selectedVote } = communityStore();
  return (
    <div className='border border-black rounded-[10px] w-[135px] h-[145px] absolute top-6 left-1 overflow-y-scroll'>
        {
            selectedVote.users.map((u, index) => (
                <ListCard
                key={index}
                userImg={u.userImg}
                userName={u.userName}
                />
            ))
        }    
    </div>
  )
}
