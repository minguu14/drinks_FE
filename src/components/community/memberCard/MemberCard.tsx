import postSetting from "../../../img/postSetting.png";
import { UserType } from "../../../models/type";
import profileImg from "../../../img/whiskey.webp";
import { useEffect, useState } from "react";
import MemberSetting from "../../modals/MemberSetting";
import communityStore from "../../../stores/community";
import { joinCommunity } from "../../../Api/community";
import userStore from "../../../stores/user";

export default function MemberCard({id, profile, userId, authority, state}: UserType) {
  const [memberModal, setMemberModal] = useState(false);
  const { community, selectedCommunity, fetchCommunity } = communityStore();
  const [ userCheck, setUserCheck ] = useState<UserType>();
  const { loginUser } = userStore();

  useEffect(() => {
    const [check] = selectedCommunity.member.filter(f => f.id === loginUser.id);
    setUserCheck(check);
    },[community])
    
  const okay = () => {
    const updateCommunity = community.map((u) => {
      if(u.id === selectedCommunity.id){
        const updateUser = u.member.map(mem => {
          if(mem.id === id){
            return {
              ...mem,
              state: true
            }
          }
          return mem;
        })
        return {
          ...u,
          member:updateUser
        }
      }
      return u;
    });

    const [filter] = updateCommunity.filter((community) => community.id === selectedCommunity.id);
    joinCommunity(filter).then(() => fetchCommunity());
    
  }

  const no = () => {
    const updatedCommunity = community.map(u => {
      if (u.id === selectedCommunity.id) {
          const updatedMembers = u.member.filter(mem => mem.id !== id);
          return {
              ...u,
              member: updatedMembers
          };
      }
      return u;
    });
    const [filter] = updatedCommunity.filter((community) => community.id === selectedCommunity.id);
    joinCommunity(filter).then(() => fetchCommunity());
  }

  return (
    <>
    {
        userCheck?.authority === '모임장' || userCheck?.authority === '부모임장' ?
        <tr className="border-b">
              <td className="text-center">
                <input type="checkbox" className="w-[20px] h-[20px]"/>
              </td>
              <td className="py-4">
                <div className="flex justify-center items-center gap-x-2">
                    <div className="w-[50px] h-[50px] border border-black rounded-[50%]">
                      <img src={profile.image} alt="profileImg" className="w-full h-full object-cover rounded-[50%]"/>
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
                    <button onClick={okay}>승인</button>
                    <button onClick={no}>거절</button>
                  </div>
                  </td>
              }
              <td className="relative">
                <img src={postSetting} alt="postSetting" className="cursor-pointer" onClick={()=>setMemberModal(!memberModal)}/>
                {memberModal && <MemberSetting id={id} authority={authority}/>}
              </td>
            </tr>
            :
            <tr className="border-b">
              <td className="text-center invisible">
                <input type="checkbox" className="w-[20px] h-[20px]"/>
              </td>
              <td className="py-4">
                <div className="flex justify-center items-center gap-x-2">
                    <div className="w-[50px] h-[50px] border border-black rounded-[50%]">
                      <img src={profile.image} alt="profileImg" className="w-full h-full object-cover rounded-[50%]"/>
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
                    <button onClick={okay}>승인</button>
                    <button onClick={no}>거절</button>
                  </div>
                  </td>
              }
              <td className="relative invisible">
                <img src={postSetting} alt="postSetting" className="cursor-pointer" onClick={()=>setMemberModal(!memberModal)}/>
                {memberModal && <MemberSetting/>}
              </td>
            </tr>
    }
    </>
  );
}
