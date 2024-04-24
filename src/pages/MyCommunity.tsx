import community from "../img/people.png";
import king from "../img/king.png";
import setting from "../img/setting.png";
import communityChat from "../img/communityChat.png";
import schedule from "../img/schedule.png";
import beer from "../img/beer.png";
import postSetting from "../img/postSetting.png";
import plus from "../img/plus.png";
import heart from "../img/heart.png";
import comment from "../img/comment.png";

export default function MyCommunity() {
  return (
    <div className="flex justify-between mt-[80px] mb-10">
      {/* 모임정보 */}
      <div className="ml-[80px]">
        <div className="w-[250px] h-[250px] border-4">모임프로필</div>
        <div className="flex items-center mt-10">
          <div className="w-[75px] h-[75px] border-2 rounded-[50%] items-center justify-center"></div>
          <div className="flex-col ml-3">
            <div className="flex items-center gap-x-2">
              <div>모임이름</div>
              <div className="flex">
                <img
                  src={community}
                  alt="people"
                  className="w-[20px] h-[20px]"
                />
                <div>1/100</div>
              </div>
            </div>
            <div className="flex">
              <img src={king} alt="king" className="w-[20px] h-[20px]" />
              <div>모임장</div>
            </div>
          </div>
        </div>
        <div className="mt-5 h-[200px]">안녕하세요 한잔하조입니다.</div>
        <button className="w-[250px] h-[70px] rounded-[10px] bg-blue-500 text-white">
          글쓰기
        </button>
        <img src={setting} alt="setting" className="w-[35px] h-[35px] mt-[50px]" />
      </div>
      {/* 모임피드 */}
      <div className="flex-col flex-glow overflow-y-auto">
        {/* 글쓴이 및 글설정 */}
        <div className="w-[660px] border-2">
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
              <p>짠~!</p>
              <div className="w-[500px] h-[330px] border-2"></div>
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
      </div>
      {/* 사이드기능 */}
      <div className="mr-[80px] mt-[650px]">
        <div className="flex gap-x-[30px]">
          <img src={beer} alt="beer" />
          <img src={schedule} alt="schedule" />
          <img src={communityChat} alt="communityChat" />
        </div>
      </div>
    </div>
  );
}
