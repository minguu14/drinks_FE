import { CommentType } from "../../../../models/type";

export default function Comments({id, comment, commenter, commenterThumbnail}: CommentType) {

  return (
    <div className="flex items-center h-[70px] border-b-2">
      <div className="flex gap-x-2">
        <div className="w-[35px] h-[35px] border-2 rounded-[50%]"><img src={commenterThumbnail} alt="commenterThumbnail" /></div>
        <div className="flex-col text-[10px]">
          <div className="text-[15px]">{commenter}</div>
          <div className="text-[12px]">{comment}</div>
          <div className="text-[10px] text-gray-500/40">5분 전</div>
        </div>
      </div>
    </div>
  );
}
