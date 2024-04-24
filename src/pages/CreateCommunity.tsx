import { Link } from "react-router-dom";

export default function CreateCommunity() {
  return (
    <div className="flex justify-center">
        <div className="w-[1350px]"> 
            <p className="text-[32px] mb-10">모임 이름</p>
            <input type="text" placeholder="이름을 입력해주세요" className="border-b-2 w-[1300px] h-[50px] mb-20"/>
            <div className="flex">
            <div className="border-2 w-[350px] h-[250px]">사진</div>
            <div className="ml-[100px] mt-[20px]">
                <div className="mb-5">사진 선택</div>
                <div className="flex gap-x-3">
                    <div className="w-[160px] h-[120px] border-2">사진1</div>
                    <div className="w-[160px] h-[120px] border-2">사진1</div>
                    <div className="w-[160px] h-[120px] border-2">사진1</div>
                    <div className="w-[160px] h-[120px] border-2">사진1</div>
                </div>
            </div>
            </div>
            <p className="text-[20px] mt-20 mb-10">모임 지역</p>
            <input type="text" placeholder="지역을 입력해주세요" className="border-b-2 w-[1300px] h-[50px] mb-10"/>
            <p className="text-[20px] mt-20">모임 공개</p>
            <div className="flex mt-10 gap-x-[130px]">
                <div className="p-2">
                    <div className="flex items-center gap-x-2">
                        <span>공개</span>
                        <input type="checkbox" className="w-[25px] h-[25px]"/>
                    </div>
                    <div className="text-[10px] mt-2">모두에게 공개됩니다</div>
                </div>
                <div className="p-2">
                    <div className="flex items-center gap-x-2">
                        <span>비공개</span>
                        <input type="checkbox" className="w-[25px] h-[25px]"/>
                    </div>
                    <div className="text-[10px] mt-2">모임에 가입한 사람만 게시물을 볼 수 있습니다</div>
                </div>
            </div>
            
            <p className="mt-10 text-[20px]">태그</p>
            <div className="flex mt-10 mb-20 gap-x-4">
                <div className="w-[60px] h-[25px] border-2 rounded-[10px] text-center">소주</div>
                <div className="w-[60px] h-[25px] border-2 rounded-[10px] text-center">맥주</div>
                <div className="w-[60px] h-[25px] border-2 rounded-[10px] text-center">양주</div>
                <div className="w-[60px] h-[25px] border-2 rounded-[10px] text-center">샴페인</div>
                <div className="w-[60px] h-[25px] border-2 rounded-[10px] text-center">와인</div>
            </div>

            <div className="flex justify-center gap-x-10 mb-20">
                <Link to='/'>
                <button className="border-2 w-[150px] h-[80px] rounded-[10px] bg-red-500 text-white text-[20px]">취소</button>
                </Link>
                <Link to='/myCommunity'>
                <button className="border-2 w-[150px] h-[80px] rounded-[10px] bg-blue-500 text-white text-[20px]">생성</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
