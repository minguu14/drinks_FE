import { useEffect, useState } from "react";
import addChatRoom from "../../../img/addChatRoom.png";
import SockJS from "sockjs-client"
import Stomp from "stompjs"
import ChatRoom from "../../community/chatroom/ChatRoom";
import { ChatRoomType } from "../../../models/type";
import uuid from "react-uuid";
import { ModalStoreType } from "../../../stores/modal";


export default function Chat({modalControl}: ModalStoreType) {
  const [chatRoom, setChatRoom] = useState<ChatRoomType[]>([{
    id: uuid(),
    roomName: "chatTest",
    thumbnailUrl: "img",
    initialMembers: "맹구",
  }]);

  const connect_socket = () => {
    const socket = new SockJS("https://cb42-120-142-108-113.ngrok-free.app/ws");
    const client = Stomp.over(socket)
    client.connect({}, () => {
        console.log("소켓 연결");
    })
  }

  useEffect(()=> {
    //connect_socket();
  },[])

  return (
    <div className="border border-black rounded-[10px] w-[490px] h-[685px] absolute top-[-690px] right-[30px]">
        <div className="flex justify-between p-10">
            <span className="text-[32px]">채팅</span>
            <img src={addChatRoom} alt="addChatRoom" className="cursor-pointer" onClick={()=>modalControl('create')}/>
        </div>
        {
          chatRoom.map((room) => (
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
  )
}
