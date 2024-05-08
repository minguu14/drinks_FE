import { MemberType } from "../../../models/type";


export default function InviteMemberCard({id, name }: MemberType) {
  return (
    <div className="flex justify-between items-center px-2 py-1">
      <div className="flex items-center gap-x-2">
        <div className="w-[40px] h-[40px] border rounded-[50%]"></div>
        <span>{name}</span>
      </div>
      <input type="checkbox" className="w-[25px] h-[25px] rounded-[10px]"/>
    </div>
  );
}
