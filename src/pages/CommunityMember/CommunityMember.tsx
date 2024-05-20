import setting from "../../img/setting.png";
import communityChat from "../../img/communityChat.png";
import schedule from "../../img/schedule.png";
import beer from "../../img/beer.png";
import communityStore from "../../stores/community"
import JoinModal from "../../components/modals/JoinModal";
import CommunityInfo from "../../components/community/CommunityInfo/CommunityInfo";
import MemberLists from "./MemberLists/MemberLists";
import modalStore from "../../stores/modal";
import LeftSection from "../Community/ClickCommunity/LeftSection/LeftSection";
import userStore from "../../stores/user";
import RightSection from "../Community/ClickCommunity/RightSection/RightSection";

export default function CommunityMember() {
    const { selectedCommunity } = communityStore();
    const { modals, modalControl } = modalStore();
    const { loginUser } = userStore();
  return (
    <div>
      {
      selectedCommunity.isPublic === 'public' ?
      <div className="flex mt-[200px] mb-10 relative">
      {modals.joinModal && <JoinModal modalControl={modalControl} selectedCommunity={selectedCommunity}/>}
      
      {/* 모임정보 */}
      <LeftSection selectedCommunity={selectedCommunity} loginUser={loginUser} modalControl={modalControl}/>

      {/* 모임피드 */}
      <div className="flex-col absolute left-[650px]">
         <MemberLists/>
      </div>
      {/* 사이드기능 */}
      <RightSection/>
    </div>
    : 
    <div className="flex mt-[200px] mb-10 relative">
      {/* 모임정보 */}
      <div className="ml-[80px] fixed left-3">
      <CommunityInfo selectedCommunity={selectedCommunity}/>
        <button className="w-[250px] h-[70px] rounded-[10px] bg-blue-500 text-white">
          가입하기
        </button>
        <img src={setting} alt="setting" className="w-[35px] h-[35px] mt-[50px]" />
      </div>
      {/* 모임피드 */}
      <div className="absolute left-[850px] top-[250px] text-[20px]">
        <p>모임에서 비공개로 설정하였습니다.</p>
        <p>게시물을 보려면 모임에 가입해주세요.</p>
      </div>
      {/* 사이드기능 */}
      <RightSection/>
    </div>
    }
    </div>
  )
}
