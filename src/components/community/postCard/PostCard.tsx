import postSetting from "../../../img/postSetting.png";
import plus from "../../../img/plus.png";
import heart from "../../../img/heart.png";
import comment from "../../../img/comment.png";
import { PostType } from "../../../models/type";

export default function PostCard({id, content}: PostType) {
  return (
    <>
            {/* 글쓴이 및 글설정 */}
            <div className="w-[660px] border-2 mb-5">
            <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2 p-3">
                <div className="w-[50px] h-[50px] rounded-[50%] border-2"></div>
                <div className="flex-col">
                <div>모임장</div>
                <div>5분 전</div>
                </div>
            </div>
            <div>
                <img src={postSetting} alt="postSetting" className="mr-5" />
            </div>
            </div>
            {/* 게시글 */}
            <div className="flex justify-center">
            <div className="flex-col">
                <div
                className="mt-[30px] overflow-hidden whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                __html: content,
                }}
                />
            </div>
            </div>
            {/* 댓글 */}
            <div className="flex justify-center">
            <div className="w-[500px]">
                {/* 댓글 수 및 좋아요 */}
                <div className="flex justify-between items-center h-[60px] border-b-2">
                <div className="flex items-center gap-x-2">
                    <span>댓글 5 </span>
                    <img
                    src={comment}
                    alt="comment"
                    className="w-[20px] h-[20px]"
                    />
                </div>

                <div className="flex items-center gap-x-2">
                    <img src={heart} alt="heart" className="w-[20px] h-[20px]" />
                    <span>5</span>
                </div>
                </div>
                {/* 댓글 보여주기 */}
                <div className="flex items-center h-[70px] border-b-2">
                <div className="flex gap-x-2">
                    <div className="w-[35px] h-[35px] border-2 rounded-[50%]"></div>
                    <div className="flex-col text-[10px]">
                    <div className="text-[15px]">팀원</div>
                    <div className="text-[12px]">한잔해!</div>
                    <div className="text-[10px] text-gray-500/40">5분 전</div>
                    </div>
                </div>
                </div>
                <div className="flex items-center h-[70px] border-b-2">
                <div className="flex gap-x-2">
                    <div className="w-[35px] h-[35px] border-2 rounded-[50%]"></div>
                    <div className="flex-col text-[10px]">
                    <div className="text-[15px]">팀원</div>
                    <div className="text-[12px]">한잔해!</div>
                    <div className="text-[10px] text-gray-500/40">5분 전</div>
                    </div>
                </div>
                </div>
                <div className="flex items-center h-[70px] border-b-2">
                <div className="flex gap-x-2">
                    <div className="w-[35px] h-[35px] border-2 rounded-[50%]"></div>
                    <div className="flex-col text-[10px]">
                    <div className="text-[15px]">팀원</div>
                    <div className="text-[12px]">한잔해!</div>
                    <div className="text-[10px] text-gray-500/40">5분 전</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* 댓글 쓰기 */}
            <div className="flex items-center justify-center gap-x-2 my-[5px]">
            <div>
                <img src={plus} alt="plus" />
            </div>
            <input
                type="text"
                placeholder="댓글을 입력해주세요"
                className="border-2 rounded-[50px] w-[430px] h-[40px]"
            />
            <button className="rounded-[50px] w-[90px] h-[40px] bg-blue-500 text-white">
                쓰기
            </button>
            </div>
        </div>
    </>
  )
}
