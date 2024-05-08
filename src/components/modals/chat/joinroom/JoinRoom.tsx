import exit from "../../../../img/exit.png";
import chatmember from "../../../../img/chatmember.png";
import send from "../../../../img/send.png";
import RoomMember from "../room_member/RoomMember";
import { ModalStoreType } from "../../../../stores/modal";

export default function JoinRoom({modals, modalControl}: ModalStoreType) {

  const exitRoom = () => {
    modalControl('joinRoom');
    modalControl('chat');
  }

  const roomMemberModal = () => {
    modalControl('roomMember');
  }
  return (
    <div className="border border-black rounded-[10px] w-[490px] h-[685px] absolute top-[-690px] right-[-25px] bg-blue-500">
        {modals.roomMember && <RoomMember modals={modals} modalControl={modalControl}/>}
    <div className="p-10">
        <div className="flex justify-between items-center">
            <div className="flex">
                <div className="border w-[50px] h-[50px] rounded-[5px]"></div>
                <div className="ml-3">
                    <span className="text-[20px]">채팅방</span>
                    <div className="flex">
                        <img src={chatmember} alt="chatmember" className="w-[15px] h-[15px] cursor-pointer" onClick={roomMemberModal}/>
                        <span className="text-[13px]">2</span>
                    </div>
                </div>
            </div>
            <img src={exit} alt="exit" className="w-[40px] h-[40px] cursor-pointer" onClick={exitRoom}/>
        </div>
        <div className="h-[485px] mt-10">
            <div className="flex flex-col">
                <div className="flex justify-start mb-2">
                    <div className="w-[50px] h-[50px] rounded-[50%] border"></div>
                    <div className="flex flex-col ml-2">
                        <span>모임장</span>
                        <div>
                            <div className="flex gap-x-2">
                                <span className="border border-black rounded-[5px] px-2 py-1 bg-white">안녕하세요</span>
                                <span className="text-[10px] self-end">오후 3시</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-end mb-2">
                    <div className="flex gap-x-2">
                        <span className="text-[10px] self-end">오후 3시</span>
                        <span className="border border-black rounded-[5px] px-2 py-1 bg-white">안녕하세요</span>
                    </div>
                </div>    
            </div>
        </div>
        <div className="flex justify-center">
            <div className="flex">
                <input type="text" className="w-[330px] h-[40px] rounded-[10px] px-5" placeholder="메세지를 입력해주세요"/>
                <img src={send} alt="send" className="ml-3"/>
            </div>
        </div>
     </div>
    </div>
  )
}
