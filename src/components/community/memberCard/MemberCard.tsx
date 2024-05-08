import postSetting from "../../../img/postSetting.png";
import { UserType } from "../../../models/type";
import profileImg from "../../../img/whiskey.webp";
import { useState } from "react";
import MemberSetting from "../../modals/MemberSetting";

export default function MemberCard({id, profile, userId, authority, state}: UserType) {
  const [memberModal, setMemberModal] = useState(false);
  return (
    <tr className="border-b">
          <td className="text-center">
            <input type="checkbox" className="w-[20px] h-[20px]"/>
          </td>
          <td className="py-4">
            <div className="flex justify-center items-center gap-x-2">
                <div className="w-[50px] h-[50px] border border-black rounded-[50%]">
                  <img src={profileImg} alt="profileImg" className="w-full h-full object-cover rounded-[50%]"/>
                </div>
                <span>{profile.nickname}</span>
            </div>
          </td>
          <td className="text-center">{userId}</td>
          <td className="text-center">{authority}</td>
          {
            state ? <td className="text-center text-green-500">승인</td> 
            : <td className="text-center">
              <div className="flex justify-center gap-x-3">
                <button>승인</button>
                <button>거절</button>
              </div>
              </td>
          }
          <td className="relative">
            <img src={postSetting} alt="postSetting" className="cursor-pointer" onClick={()=>setMemberModal(!memberModal)}/>
            {memberModal && <MemberSetting/>}
          </td>
        </tr>
  );
}
