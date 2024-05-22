
import complete from "../../../img/complete.png";
import plus from "../../../img/plus.png";
import { ModalStoreType } from "../../../stores/modal";
import communityStore from "../../../stores/community";
import ScheduleCard from "./scheduleCard/ScheduleCard";

export default function Schedule({modals, modalControl}: ModalStoreType) {
    const { selectedCommunity } = communityStore();
    const openCreateSchedule = () => {
        modalControl('schedule');
        modalControl('createSchedule');
    }
  return (
    <div className="border border-black rounded-[10px] w-[490px] h-[685px] absolute top-[-690px] right-[-25px]">
        <div className="flex justify-center items-center mt-5">
            <span className="text-[32px]">모임 일정</span>
        </div>
        <div className="h-[270px]">
            <p className="p-5">진행중인 투표</p>
            {
              selectedCommunity.schedule.map((sc) => (
                  <ScheduleCard
                    key={sc.id}
                    id={sc.id}
                    scheduleTitle={sc.scheduleTitle}
                    scheduleDescription={sc.scheduleDescription}
                    scheduleLocation={sc.scheduleLocation}
                    scheduleDate={sc.scheduleDate}
                    scheduleTime={sc.scheduleTime}
                    users={sc.users}
                  />
              ))
            }
        </div>
        <div className="h-[270px]">
            <p className="p-5">완료된 투표</p>
            <div className="flex items-center px-5">
                <img src={complete} alt="complete"/>
                <div className="flex-1 flex-col ml-10">
                    <div className="text-[20px]">모임 이름</div>
                    <div className="text-[15px]">모임 날짜</div>
                </div>
            </div>
        </div>
        <div className="flex justify-end p-4 cursor-pointer">
            <img src={plus} alt="plus" className="w-[43px] h-[43px]" onClick={openCreateSchedule}/>
        </div>
    </div>
  )
}
