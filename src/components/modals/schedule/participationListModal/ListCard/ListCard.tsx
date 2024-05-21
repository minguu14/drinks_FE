import { VoteUserType } from "../../../../../models/type";

export default function ListCard({userName, userImg, id}: VoteUserType) {
  return (
    <div className="flex items-center gap-x-2 p-1">
      <div className="w-[28px] h-[28px] border rounded-[50%]">
        <img src={userImg} alt="userImg" className="w-full h-full rounded-[50%]" />
      </div>
      <span className="text-[13px]">{userName}</span>
    </div>
  );
}
