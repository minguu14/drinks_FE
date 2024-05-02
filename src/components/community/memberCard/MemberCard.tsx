import postSetting from "../../../img/postSetting.png";
export default function MemberCard() {
  return (
    <div className="border-b-2 py-5">
      <div className="flex justify-between items-center">
        <input type="checkbox" className="ml-5 w-[15px] h-[15px]" />
        <div className="flex items-center gap-x-2">
        <div className="border rounded-[50%] w-[40px] h-[40px]"></div>
        <span>모임장</span>
        </div>
        <span>아이디</span>
        <span>모임장</span>
        <span>승인</span>
        <img src={postSetting} alt="postSetting" className="mr-5"/>
      </div>
    </div>
  );
}
