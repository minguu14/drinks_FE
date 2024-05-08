import setting from "../../../img/setting.png";
import communityChat from "../../../img/communityChat.png";
import schedule from "../../../img/schedule.png";
import beer from "../../../img/beer.png";
import PostCard from "../../../components/community/postCard/PostCard";
import communityStore from "../../../stores/community"
import JoinModal from "../../../components/modals/JoinModal";
import CommunityInfo from "../../../components/community/CommunityInfo/CommunityInfo";
import Chat from "../../../components/modals/chat/Chat";
import modalStore from "../../../stores/modal";
import CreateRoom from "../../../components/modals/chat/createroom/CreateRoom";
import JoinRoom from "../../../components/modals/chat/joinroom/JoinRoom";
import InviteRoomMember from "../../../components/modals/chat/room_member/inviteRoomMember/InviteRoomMember";
import userStore from "../../../stores/user";
import { useEffect } from "react";

export default function ClickCommunity() {
    const { selectedCommunity, community, selectCommunity } = communityStore();
    const { modals, modalControl } = modalStore();
    const { loginUser } = userStore();
    const handleChat = () => {
      if(Object.values(modals).some((modal) => modal === true))
      {
        modalControl('closeAll');
      }else{
        modalControl("chat");
      }
    }

    useEffect(() => {
    const [filterItem] = community.filter(item => item.id === selectedCommunity.id);
    selectCommunity(filterItem);
    },[community])

  return (
    <div>
      {
      // 모임 공개
      selectedCommunity.isPublic === 'public' ?
      <div className="flex mt-[200px] mb-10 relative">
      {modals.joinModal && <JoinModal modalControl={modalControl} selectedCommunity={selectedCommunity}/>}
      {modals.createChatRoomModal && <CreateRoom modals={modals} modalControl={modalControl}/>}
      {modals.inviteRoomMember && <InviteRoomMember modals={modals} modalControl={modalControl}/>}
      {/* 모임정보 */}
      <div className="ml-[80px] fixed left-3">
        <CommunityInfo selectedCommunity={selectedCommunity}/>
        {selectedCommunity.member.some((m) => m.id === loginUser.id) ?
          <button className="w-[250px] h-[70px] rounded-[10px] bg-blue-500 text-white" onClick={()=> modalControl("join")}>
            글쓰기
          </button>
          :
          <button className="w-[250px] h-[70px] rounded-[10px] bg-blue-500 text-white" onClick={()=> modalControl("join")}>
            가입하기
          </button>
        }
        
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
          <img src={schedule} alt="schedule"/>
          <img src={communityChat} alt="communityChat" onClick={handleChat}/>
        </div>
        {modals.chatModal && <Chat modals={modals} modalControl={modalControl}/>}
        {modals.joinRoomModal && <JoinRoom modals={modals} modalControl={modalControl}/>}
      </div>
    </div>
    
    // 모임 비공개
    : 
    <div className="flex mt-[200px] mb-10 relative">
      {/* 모임정보 */}
      <div className="ml-[80px] fixed left-3">
      <CommunityInfo selectedCommunity={selectedCommunity}/>
        <button className="w-[250px] h-[70px] rounded-[10px] bg-blue-500 text-white" onClick={()=>modalControl("join")}>
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
      <div className="mr-[80px] mt-[650px] fixed right-1">
        <div className="flex gap-x-[30px]">
          <img src={beer} alt="beer" />
          <img src={schedule} alt="schedule"/>
          <img src={communityChat} alt="communityChat" onClick={handleChat}/>
        </div>
        {modals.chatModal && <Chat modals={modals} modalControl={modalControl}/>}
        {modals.joinRoomModal && <JoinRoom modals={modals} modalControl={modalControl}/>}
      </div>
    </div>
    }
    </div>
  )
}
