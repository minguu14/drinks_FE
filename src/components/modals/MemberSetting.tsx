export default function MemberSetting() {
  return (
    <div className="border border-black rounded-[10px] w-[150px] h-[130px] absolute bottom-[50px] right-[-22px] bg-white">
      <div className="border-b border-black mt-4"></div>
      <div className="flex flex-col items-center gap-y-2">
          <div className="flex mt-3 gap-x-5">
                  <label htmlFor="rating">등급</label>
                  <select
                    id="rating"
                    className="border rounded-[10px] w-[80px] focus:outline-none focus:border-2 focus:border-sky-500"
                  >
                    <option value="king">회장</option>
                    <option value="sub_king">부회장</option>
                    <option value="member">일반멤버</option>
                  </select>
          </div>
          <div className="flex items-center gap-x-4">
            <span>내보내기</span>
            <button className="border rounded-[10px] w-[55px] h-[25px] bg-red-500 text-white text-[12px]">확인</button>
          </div>
          <button className="border rounded-[10px] w-[60px] h-[25px] bg-blue-500 text-white text-[12px]">저장</button>
      </div>
    </div>
  )
}
