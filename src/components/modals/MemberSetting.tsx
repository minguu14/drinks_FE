import { useState } from "react";
import communityStore from "../../stores/community";
import { joinCommunity } from "../../Api/community";

export default function MemberSetting({id, authority}: any) {
  const { selectedCommunity, community, fetchCommunity } = communityStore();
  const [value, setValue] = useState(authority);
  const saveAuthority = () => {
    const updateCommunity = community.map((u) => {
      if(u.id === selectedCommunity.id){
        const updateUser = u.member.map(mem => {
          if(mem.id === id){
            return {
              ...mem,
              authority: value,
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
  return (
    <div className="border border-black rounded-[10px] w-[150px] h-[130px] absolute bottom-[50px] right-[-22px] bg-white">
      <div className="border-b border-black mt-4"></div>
      <div className="flex flex-col items-center gap-y-2">
          <div className="flex mt-3 gap-x-5">
                  <label htmlFor="rating">등급</label>
                  <select
                    id="rating"
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                    className="border rounded-[10px] w-[80px] focus:outline-none focus:border-2 focus:border-sky-500"
                  >
                    <option value="모임장">모임장</option>
                    <option value="부모임장">부모임장</option>
                    <option value="일반멤버">일반멤버</option>
                  </select>
          </div>
          <div className="flex items-center gap-x-4">
            <span>내보내기</span>
            <button className="border rounded-[10px] w-[55px] h-[25px] bg-red-500 text-white text-[12px]">확인</button>
          </div>
          <button className="border rounded-[10px] w-[60px] h-[25px] bg-blue-500 text-white text-[12px]" onClick={saveAuthority}>저장</button>
      </div>
    </div>
  )
}
