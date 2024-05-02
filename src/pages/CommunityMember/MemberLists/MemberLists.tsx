import MemberCard from "../../../components/community/memberCard/MemberCard";
import search from "../../../img/search.png";

export default function MemberLists() {
  return (
    <div className="w-[660px] h-[700px] border-2 mb-5">
        <p>멤버</p>
        <div className="flex justify-between items-center">
            <div className='relative mr-10'>
                <input type="text"
                placeholder="멤버를 검색하세요"
                className="border rounded-[10px] w-[237px] h-[28px]"
                />
                <img src={search} alt="search" className='absolute w-[20px] h-[20px] top-[3px] left-[200px] cursor-pointer'/>
            </div>
            <button className="w-[70px] h-[40px] border rounded-[10px] bg-blue-500 text-white">
                선택승인
            </button>
        </div>
        <div className="flex flex-col">
            <div className="border-y-2 py-5">
                <div className="flex justify-between">
                <input type="checkbox" className="ml-5 invisible"/>
                    <span>프로필</span>
                    <span>아이디</span>
                    <span>등급</span>
                    <span>상태</span>
                    <span className="mr-5 invisible">...</span>
                </div>
            </div>
           <MemberCard/>
           <MemberCard/>

        </div>
    </div>
  )
}
