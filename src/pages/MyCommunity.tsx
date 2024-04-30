import people from "../img/people.png";
import king from "../img/king.png";
import setting from "../img/setting.png";
import communityChat from "../img/communityChat.png";
import schedule from "../img/schedule.png";
import beer from "../img/beer.png";
import PostCard from "../components/community/postCard/PostCard";
import communityStore from "../store/store";

export default function MyCommunity() {
  const { community } = communityStore();
  return (
    <div className="flex mt-[200px] mb-10 relative">
      {/* 모임정보 */}
      <div className="ml-[80px] fixed left-3">
        <div className="w-[250px] h-[250px] border-4"><img src={community[0].thumbnail_url} alt="communityProfile" className="w-full h-full"/></div>
        <div className="flex items-center mt-10">
          <div className="w-[75px] h-[75px] border-2 rounded-[50%] items-center justify-center"></div>
          <div className="flex-col ml-3">
            <div className="flex items-center gap-x-2">
              <div>모임이름</div>
              <div className="flex">
                <img
                  src={people}
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
      <div className="flex-col absolute left-[650px]">
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </div>
      {/* 사이드기능 */}
      <div className="mr-[80px] mt-[650px] fixed right-1">
        <div className="flex gap-x-[30px]">
          <img src={beer} alt="beer" />
          <img src={schedule} alt="schedule" />
          <img src={communityChat} alt="communityChat" />
        </div>
      </div>
    </div>
  );
}
