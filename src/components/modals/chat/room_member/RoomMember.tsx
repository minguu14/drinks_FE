import { ModalStoreType } from "../../../../stores/modal";
import RoomMemberCard from "./room_member_card/RoomMemberCard";

export default function RoomMember({modals, modalControl}: ModalStoreType) {
  const inviteRoomMemberModal = () => {
    modalControl('roomMember');
    modalControl('inviteRoomMember');
  }
  return (
    <div className="border border-black rounded-[10px] w-[250px] h-[290px] absolute bottom-[50px] top-[90px] left-[22px] bg-white">
        <div className="flex flex-col justify-center items-center mt-5">
            <div className="border w-[220px] h-[200px] bg-gray-100">
                <RoomMemberCard/>
                <RoomMemberCard/>
            </div>
            <span className="self-end mr-3 mt-6 cursor-pointer" onClick={inviteRoomMemberModal}>대화 멤버 초대하기</span>
        </div>
    </div>
  )
}
