import vote from "../../../../img/vote.png";
import { ScheduleType } from "../../../../models/type";

export default function ScheduleCard({id, scheduleTitle, scheduleLocation, scheduleDescription, scheduleDate, scheduleTime}: ScheduleType) {
  return (
    <div className="flex items-center px-5">
      <img src={vote} alt="vote" />
      <div className="flex-1 flex-col ml-10">
        <div className="text-[20px]">{scheduleTitle}</div>
        <div className="text-[15px]">{scheduleDate}</div>
      </div>
      <div className="text-[20px]">투표하기</div>
    </div>
  );
}
