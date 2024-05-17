import ReactDatePicker from "react-datepicker";
import { ModalStoreType } from "../../../../stores/modal";
import { useState } from "react";
import { format, subDays } from "date-fns";
import {ko} from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import communityStore from "../../../../stores/community";
import { joinCommunity } from "../../../../Api/community";
import uuid from "react-uuid";
import { CommunityType } from "../../../../models/type";

export default function CreateSchedule({
  modals,
  modalControl,
}: ModalStoreType) {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [startTime, setStartTime] = useState<Date | null>(new Date());
    const [scheduleTitle, setScheduleTitle] = useState<string>('');
    const [scheduleDescription, setScheduleDescription] = useState<string>('');
    const [scheduleLocation, setScheduleLocation] = useState<string>('');
    const { community, selectedCommunity, fetchCommunity } = communityStore();

    const createSchedule = () => {
        const formattedDate = startDate ? format(startDate, 'yyyy년 MM월 dd일 EEEE', { locale: ko }) : '';
        const formattedTime = startTime ? format(startTime, 'aa h:mm', { locale: ko }) : '';
        const [updatedCommunity] = community.map(u => {
            if (u.id === selectedCommunity.id) {
                return {
                    ...u,
                    schedule: [...u.schedule, {
                        id: uuid(),
                        scheduleTitle,
                        scheduleDescription,
                        scheduleLocation,
                        scheduleDate: formattedDate,
                        scheduleTime: formattedTime,
                    }]
                }
            }
            return u;
          }) as CommunityType[];
          joinCommunity(updatedCommunity).then(() => fetchCommunity());
          modalControl('createSchedule');
          modalControl('schedule');
    }
  return (
    <div className="border border-black rounded-[10px] w-[490px] h-[685px] absolute top-[-690px] right-[-25px]">
      <div className="flex justify-center items-center mt-5">
        <span className="text-[32px]">일정 생성</span>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <label htmlFor="schedule_title">
          <input
            type="text"
            id="schedule_title"
            value={scheduleTitle}
            onChange={(e)=>setScheduleTitle(e.target.value)}
            placeholder="일정 제목"
            className="border w-[440px] h-[40px] rounded-[5px] bg-gray-100 p-3 mb-10 text-[15px]"
          />
        </label>
        <label htmlFor="schedule_description">
          <input
            type="text"
            value={scheduleDescription}
            onChange={(e)=>setScheduleDescription(e.target.value)}
            id="schedule_description"
            placeholder="일정 설명"
            className="border w-[440px] h-[95px] rounded-[5px] bg-gray-100 p-3 mb-10 text-[15px]"
          />
        </label>
        <label htmlFor="schedule_location">
          <input
            type="text"
            value={scheduleLocation}
            onChange={(e)=>setScheduleLocation(e.target.value)}
            id="schedule_location"
            placeholder="모임 장소"
            className="border w-[440px] h-[40px] rounded-[5px] bg-gray-100 p-3 text-[15px]"
          />
        </label>

        <div className="w-[435px] mt-[45px]">
          <p>날짜 및 시간</p>
          <div className="flex">
            <ReactDatePicker
                selected={startDate}
                locale={ko}
                minDate={subDays(new Date(), 0)}
                dateFormat="yyyy년 MM월 dd일 EEEE"
                onChange={(date) => setStartDate(date)}
                className="border rounded-[5px] w-[180px] h-[40px] mr-5 text-[14px] p-2 bg-gray-100"
            />
            <ReactDatePicker
                selected={startTime}
                onChange={(date) => setStartTime(date)}
                locale={ko}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30} 
                dateFormat="aa h:mm" 
                className="border rounded-[5px] w-[110px] h-[40px] text-[14px] p-2 bg-gray-100"
            />
          </div>
        </div>

        <button className="w-[120px] h-[40px] rounded-[5px] bg-blue-500 text-white mt-20"
        onClick={createSchedule}
        >
          생성
        </button>
      </div>
    </div>
  );
}
