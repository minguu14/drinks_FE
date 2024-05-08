import uuid from "react-uuid";
import InviteMemberCard from "../../../../community/inviteMemberCard/InviteMemberCard";
import { useState } from "react";
import { ModalStoreType } from "../../../../../stores/modal";
import { MemberType } from "../../../../../models/type";

export default function InviteRoomMember({modals, modalControl}: ModalStoreType) {
    // const [inviteMembers, setInviteMembers] = useState<MemberType[]>([
    //     {
    //         id: uuid(),
    //         userName: "짱구",   
    //     },
    //     {
    //         id: uuid(),
    //         userName: "철수",
    //     },
    //     {
    //         id: uuid(),
    //         userName: "훈이",
    //     },
    //     {
    //         id: uuid(),
    //         userName: "유리",
    //     },
    //   ]);
  return (
    <div className="w-screen h-screen inset-0 bg-black/60 z-50 fixed top-0 flex justify-center items-center">
            <div className="w-[520px] h-[630px] border-2 rounded-[10px] bg-white">
                <div className="flex flex-col items-center justify-center p-10">
                <p className="text-[20px] self-start ml-8 mb-2">초대 목록</p>
                    <div className="border rounded-[10px] w-[400px] h-[450px] mb-7">
                        {/* {
                          inviteMembers.map((member) => (
                            <InviteMemberCard
                            key={member.id}
                            id={member.id}
                            userName={member.userName}
                            />
                          ))
                        } */}
                    </div>
                    <div className="flex gap-x-5">
                    <button className="w-[80px] h-[37px] rounded-[10px] bg-blue-500 text-white" onClick={()=>modalControl('inviteRoomMember')}>초대</button>
                    <button className="w-[80px] h-[37px] rounded-[10px] bg-red-500 text-white" onClick={()=>modalControl('inviteRoomMember')}>취소</button>
                </div>
                </div>
                
            </div>
        </div>
  )
}
