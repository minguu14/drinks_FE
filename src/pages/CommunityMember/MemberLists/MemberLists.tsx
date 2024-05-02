import { useState } from "react";
import MemberCard from "../../../components/community/memberCard/MemberCard";
import search from "../../../img/search.png";
import uuid from "react-uuid";
import { UserType } from "../../../models/type";

export default function MemberLists() {
    const [applicant, setApplicant] = useState<UserType[]>([
      {
        id: uuid(),
        profile: {
            image: "url",
            nickname: "맹구"
        },
        userId: "aodrn123",
        authority: "모임장",
        state: true,
      },
      {
        id: uuid(),
        profile: {
            image: "url",
            nickname: "짱구"
        },
        userId: "Wkdrn123",
        authority: "일반멤버",
        state: true,
      },
      {
        id: uuid(),
        profile: {
            image: "url",
            nickname: "철수"
        },
        userId: "cjftn123",
        authority: "일반멤버",
        state: true,
      },
      {
        id: uuid(),
        profile: {
            image: "url",
            nickname: "훈이"
        },
        userId: "gnsdl123",
        authority: "일반멤버",
        state: false,
      },
  ])
  return (
    // <div className="w-[660px] h-[700px] border-2 mb-5">
    //     <p>멤버</p>
    //     <div className="flex justify-between items-center">
    //         <div className='relative mr-10'>
    //             <input type="text"
    //             placeholder="멤버를 검색하세요"
    //             className="border rounded-[10px] w-[237px] h-[28px]"
    //             />
    //             <img src={search} alt="search" className='absolute w-[20px] h-[20px] top-[3px] left-[200px] cursor-pointer'/>
    //         </div>
    //         <button className="w-[70px] h-[40px] border rounded-[10px] bg-blue-500 text-white">
    //             선택승인
    //         </button>
    //     </div>
    //     <div className="flex flex-col">
    //         <div className="border-y-2 py-5">
    //             <div className="flex justify-between items-center">
    //                 <input type="checkbox" className="ml-5 invisible"/>
    //                 <div className="flex items-center gap-x-2">
    //                 <div className="border rounded-[50%] w-[40px] h-[40px] invisible"></div>
    //                 <span>모임장</span>
    //                 </div>
    //                 <span>아이디</span>
    //                 <span>등급</span>
    //                 <span>상태</span>
    //                 <span className="mr-5 invisible">...</span>
    //             </div>
    //         </div>
    //        <MemberCard/>
    //        <MemberCard/>

    //     </div>
    // </div>
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
          applicant.map((list) => (
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
  )
}
