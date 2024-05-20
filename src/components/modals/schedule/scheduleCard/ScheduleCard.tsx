import vote from "../../../../img/vote.png";
import { ScheduleType } from "../../../../models/type";
import communityStore from "../../../../stores/community";
import modalStore from "../../../../stores/modal";
import VoteSchedule from "../voteSchedule/VoteSchedule";

export default function ScheduleCard({id, scheduleTitle, scheduleLocation, scheduleDescription, scheduleDate, scheduleTime, users}: ScheduleType) {
  const { modalControl } = modalStore();
  const { selectVote } = communityStore();

  const openVote = () => {
    modalControl('schedule');
    modalControl('vote');
    selectVote({
      id,
      scheduleTitle,
      scheduleDescription,
      scheduleLocation,
      scheduleDate,
      scheduleTime,
      users,
    })
  }

  return (
      <div className="flex items-center px-5">
        <img src={vote} alt="vote" />
        <div className="flex-1 flex-col ml-10">
          <div className="text-[20px]">{scheduleTitle}</div>
          <div className="text-[15px]">{scheduleDate}</div>
        </div>
        <div className="text-[20px] cursor-pointer" onClick={openVote}>투표하기</div>
      </div>
  );
}
