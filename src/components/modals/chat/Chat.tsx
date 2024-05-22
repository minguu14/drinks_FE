import { useEffect, useState } from "react";
import addChatRoom from "../../../img/addChatRoom.png";
import SockJS from "sockjs-client"
import Stomp from "stompjs"
import ChatRoom from "../../community/chatroom/ChatRoom";
import { ChatRoomType } from "../../../models/type";
import { ModalStoreType } from "../../../stores/modal";
import communityStore from "../../../stores/community";


export default function Chat({modalControl}: ModalStoreType) {
  const { community, selectedCommunity } = communityStore();
  const [chatRoom, setChatRoom] = useState<any>([]);
  
  
  const getChatRoom = () => {
    const [room] = community.map((c) => {
      if(c.id === selectedCommunity.id){
        return c.chatRoom;
      }
    })
    setChatRoom(room);
  }
  
  const connect_socket = () => {
    const socket = new SockJS("https://cb42-120-142-108-113.ngrok-free.app/ws");
    const client = Stomp.over(socket)
    client.connect({}, () => {
        console.log("소켓 연결");
    })
  }

  useEffect(()=> {
    //connect_socket();
    getChatRoom();
  },[community])

  return (
    <div className="border border-black rounded-[10px] w-[490px] h-[685px] absolute top-[-690px] right-[-25px]">
        <div className="flex justify-between p-10">
            <span className="text-[32px]">채팅</span>
            <img src={addChatRoom} alt="addChatRoom" className="cursor-pointer" onClick={()=>modalControl('create')}/>
        </div>
        <div className="h-[520px] overflow-y-scroll">
          {
            chatRoom.map((room:any) => (
              <ChatRoom
              key={room.id}
              id={room.id}
              roomName={room.roomName}
              thumbnailUrl={room.thumbnailUrl}
              initialMembers={room.initialMembers}
              />  
            ))
          }
        </div>
    </div>
  )
}
