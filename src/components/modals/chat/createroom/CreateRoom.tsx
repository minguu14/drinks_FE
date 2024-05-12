import { ChangeEvent, useEffect, useState } from "react";
import InviteMemberCard from "../../../community/inviteMemberCard/InviteMemberCard";
import { ModalStoreType } from "../../../../stores/modal";
import communityStore from "../../../../stores/community";
import { MemberType, UserType } from "../../../../models/type";

export default function CreateRoom({modals, modalControl}: ModalStoreType) {
  const [myImage, setMyImage] = useState<string>("");
  const { selectedCommunity } = communityStore();
  const [inviteMembers, setInviteMembers] = useState<UserType[]>([]);

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setMyImage(imageUrl);
      //URL.revokeObjectURL(imageUrl)
    }
  };

  const CheckMember = () => {
    const realMember = selectedCommunity.member.filter(m => m.state === true);
    setInviteMembers(realMember);
  }

  useEffect(()=> {
    CheckMember();
  },[selectedCommunity])
  
  return (
    <div className="w-screen h-screen inset-0 bg-black/60 z-50 fixed top-0 flex justify-center items-center">
        <div className="w-[690px] h-[750px] border-2 rounded-[10px] bg-white">
            <div className="flex flex-col items-center justify-center mt-10 mx-[95px]">
                <label htmlFor="fileInput" className="border-4 rounded-[10px] w-[200px] h-[200px]">
                    {myImage && <img src={myImage} alt="myImage" className="w-full h-full"/>}
                    <input type="file"
                    id="fileInput"
                    onChange={onChangeImage}
                    style={{ display: "none" }}
                    />
                    
                </label>
                <p className="mt-5 self-start">채팅방 이름</p>
                <input type="text" className="w-[500px] h-[50px] border-4 rounded-[10px] mt-2"/>
                <p className="mt-2 self-start">대화멤버</p>
                <div className="border-4 rounded-[10px] w-[500px] h-[200px] mt-2 overflow-y-scroll">
                    {
                      inviteMembers.map((member) => (
                        <InviteMemberCard
                        key={member.id}
                        id={member.id}
                        name={member.profile.nickname}
                        />
                      ))
                    }
                    
                </div>
                <div className="flex gap-x-5 mt-20">
                    <button className="border rounded-[10px] w-[90px] h-[40px] bg-blue-500 text-white" onClick={()=>modalControl('create')}>생성</button>
                    <button className="border rounded-[10px] w-[90px] h-[40px] bg-red-500 text-white" onClick={()=>modalControl('create')}>취소</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}
