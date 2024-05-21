import { ChatRoomType } from "../../../models/type";
import communityStore from "../../../stores/community";
import modalStore from "../../../stores/modal";
import ChatRoomCard from "./chatRoomCard/ChatRoomCard";

export default function ChatRoom({
  id,
  roomName,
  thumbnailUrl,
  initialMembers,
}: ChatRoomType) {
  const { modalControl } = modalStore();
  const { selectChatRoom, selectedCommunity } = communityStore();
  const joinRoom = () => {
    modalControl("chat");
    modalControl("joinRoom");
    const [selectedRoom] = selectedCommunity.chatRoom.filter(f => f.id === id);
    selectChatRoom(selectedRoom);
  };
  return (
      <div className="px-10 py-5 cursor-pointer" onClick={joinRoom}>
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
  );
}
