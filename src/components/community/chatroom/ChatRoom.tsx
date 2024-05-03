import { ChatRoomType } from "../../../models/type";
import ChatRoomCard from "./chatRoomCard/ChatRoomCard";

export default function ChatRoom({id, roomName, thumbnailUrl, initialMembers}: ChatRoomType) {
  return (
    <div className="px-10 py-5 cursor-pointer">
            <div className="flex items-center">
                <ChatRoomCard
                key={id}
                id={id}
                roomName={roomName}
                thumbnailUrl={thumbnailUrl}
                initialMembers={initialMembers}
                />
            </div>
        </div>
  )
}
