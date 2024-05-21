import { ChatRoomType } from "../../../../models/type";

export default function ChatRoomCard({roomName, thumbnailUrl, initialMembers}: ChatRoomType) {
  return (
    <>
      <div className="border-4 rounded-[10px] w-[80px] h-[80px]"><img src={thumbnailUrl} alt="thumbnailUrl" className="w-full h-full rounded-[5px]"/></div>
      <div className="flex flex-col ml-5 w-[300px] h-[80px]">
        <div className="flex justify-between items-center">
          <span className="text-[20px]">{roomName}</span>
          <span className="text-[12px] mr-3">오후 4:03</span>
        </div>
        <span className="mt-5">멤버1:안녕하세요</span>
      </div>
    </>
  );
}
