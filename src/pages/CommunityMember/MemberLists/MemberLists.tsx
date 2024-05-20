import { useEffect, useState } from "react";
import MemberCard from "../../../components/community/memberCard/MemberCard";
import search from "../../../img/search.png";
import communityStore from "../../../stores/community";
import userStore from "../../../stores/user";
import { UserType } from "../../../models/type";

export default function MemberLists() {
    const { selectedCommunity, community, selectCommunity } = communityStore();
    const { loginUser } = userStore();
    const [ userCheck, setUserCheck ] = useState<UserType>();

    useEffect(() => {
      const [filterItem] = community.filter(item => item.id === selectedCommunity.id);
      selectCommunity(filterItem);
      const [check] = selectedCommunity.member.filter(f => f.id === loginUser.id);
      setUserCheck(check);
      },[community])

  return (
    <>
    {
      userCheck?.authority === '모임장' || userCheck?.authority === '부모임장' ?
      <div className="w-[660px] h-[700px] border-2 border-black">
      <p className="p-5 text-[20px]">멤버</p>
          <div className="flex justify-between items-center px-5 mb-5">
              <div className='relative mr-10'>
                  <input type="text"
                  placeholder="멤버를 검색하세요"
                  className="border rounded-[10px] w-[237px] h-[28px] p-2 bg-gray-200 placeholder-black"
                  />
                  <img src={search} alt="search" className='absolute w-[20px] h-[20px] top-[3px] left-[200px] cursor-pointer'/>
              </div>
              <button className="w-[70px] h-[40px] border rounded-[10px] bg-blue-500 text-white">
                  선택승인
              </button>
          </div>
      <table className="w-full">
        <thead className="border-y">
          <tr>
            <th className="py-2 invisible">선택</th>
            <th className="px-4 py-2">프로필</th>
            <th className="px-4 py-2">아이디</th>
            <th className="px-4 py-2">등급</th>
            <th className="px-4 py-2">상태</th>
            <th className="py-2 invisible">설정</th>
          </tr>
        </thead>
        <tbody>
          {
            selectedCommunity.member.map((list) => (
              <MemberCard
              key={list.id}
              id={list.id}
              profile={list.profile}
              userId={list.userId}
              authority={list.authority}
              state={list.state}
              />
            ))
          }
        </tbody>
      </table>
      </div>
      :
      <div className="w-[660px] h-[700px] border-2 border-black">
      <p className="p-5 text-[20px]">멤버</p>
          <div className="flex justify-between items-center px-5 mb-5">
              <div className='relative mr-10'>
                  <input type="text"
                  placeholder="멤버를 검색하세요"
                  className="border rounded-[10px] w-[237px] h-[28px] p-2 bg-gray-200 placeholder-black"
                  />
                  <img src={search} alt="search" className='absolute w-[20px] h-[20px] top-[3px] left-[200px] cursor-pointer'/>
              </div>
          </div>
      <table className="w-full">
        <thead className="border-y">
          <tr>
            <th className="py-2 invisible">선택</th>
            <th className="px-4 py-2">프로필</th>
            <th className="px-4 py-2">아이디</th>
            <th className="px-4 py-2">등급</th>
            <th className="px-4 py-2">상태</th>
            <th className="py-2 invisible">설정</th>
          </tr>
        </thead>
        <tbody>
          {
            selectedCommunity.member.map((list) => (
              <MemberCard
              key={list.id}
              id={list.id}
              profile={list.profile}
              userId={list.userId}
              authority={list.authority}
              state={list.state}
              />
            ))
          }
        </tbody>
      </table>
      </div>
    }
    </>
  )
}
