import communityChat from "../../../img/communityChat.png";
import schedule from "../../../img/schedule.png";
import beer from "../../../img/beer.png";
import PostCard from "../../../components/community/postCard/PostCard";
import communityStore from "../../../stores/community"
import JoinModal from "../../../components/modals/JoinModal";
import Chat from "../../../components/modals/chat/Chat";
import modalStore from "../../../stores/modal";
import CreateRoom from "../../../components/modals/chat/createroom/CreateRoom";
import JoinRoom from "../../../components/modals/chat/joinroom/JoinRoom";
import InviteRoomMember from "../../../components/modals/chat/room_member/inviteRoomMember/InviteRoomMember";
import userStore from "../../../stores/user";
import { useEffect } from "react";
import LeftSection from "./LeftSection/LeftSection";
import Writing from "../../../components/modals/post/Writing";
import EditPost from "../../../components/modals/post/EditPost";
import Schedule from "../../../components/modals/schedule/Schedule";
import CreateSchedule from "../../../components/modals/schedule/createschedule/CreateSchedule";
import VoteSchedule from "../../../components/modals/schedule/voteSchedule/VoteSchedule";

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

    const handleSchedule = () => {
      if(Object.values(modals).some((modal) => modal === true))
        {
          modalControl('closeAll');
        }else{
          modalControl("schedule");
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
      {modals.writingModal && <Writing modals={modals} modalControl={modalControl}/>}
      {modals.editModal && <EditPost modals={modals} modalControl={modalControl}/>}

      {/* 모임정보 */}
      <LeftSection selectedCommunity={selectedCommunity} loginUser={loginUser} modalControl={modalControl}/>

      {/* 모임피드 */}
      <div className="flex-col absolute left-[650px]">
        { 
          selectedCommunity.posts.length > 0 ?
          selectedCommunity.posts.map((post) => (
            <PostCard
            key={post.id}
            id={post.id}
            content={post.content}
            comments={post.comments}
            author={post.author}
            authorImg={post.authorImg}
            loginUser={loginUser}
            />
          ))
          :
          <div className="w-[660px] h-[500px] flex justify-center items-center">
            <span className="text-[20px]">포스트가 없습니다.</span>
          </div>
        }
      </div>
      {/* 사이드기능 */}
      <div className="mr-[80px] mt-[650px] fixed right-1">
        <div className="flex gap-x-[30px]">
          <img src={beer} alt="beer" />
          <img src={schedule} alt="schedule" onClick={handleSchedule}/>
          <img src={communityChat} alt="communityChat" onClick={handleChat}/>
        </div>
        {modals.chatModal && <Chat modals={modals} modalControl={modalControl}/>}
        {modals.scheduleModal && <Schedule modals={modals} modalControl={modalControl}/>}
        {modals.createScheduleModal && <CreateSchedule modals={modals} modalControl={modalControl}/>}
        {modals.voteScheduleModal && <VoteSchedule/>}
        {modals.joinRoomModal && <JoinRoom modals={modals} modalControl={modalControl}/>}
      </div>
    </div>
    
    // 모임 비공개
    : 
    <div className="flex mt-[200px] mb-10 relative">
      {/* 모임정보 */}
      <LeftSection selectedCommunity={selectedCommunity} loginUser={loginUser} modalControl={modalControl}/>
      {/* 모임피드 */}
      <div className="absolute left-[850px] top-[250px] text-[20px]">
        <p>모임에서 비공개로 설정하였습니다.</p>
        <p>게시물을 보려면 모임에 가입해주세요.</p>
      </div>
      {/* 사이드기능 */}
      <div className="mr-[80px] mt-[650px] fixed right-1">
        <div className="flex gap-x-[30px]">
          <img src={beer} alt="beer" />
          <img src={schedule} alt="schedule" onClick={handleSchedule}/>
          <img src={communityChat} alt="communityChat" onClick={handleChat}/>
        </div>
        {modals.chatModal && <Chat modals={modals} modalControl={modalControl}/>}
        {modals.scheduleModal && <Schedule modals={modals} modalControl={modalControl}/>}
        {modals.createScheduleModal && <CreateSchedule modals={modals} modalControl={modalControl}/>}
        {modals.voteScheduleModal && <VoteSchedule/>}
        {modals.joinRoomModal && <JoinRoom modals={modals} modalControl={modalControl}/>}
      </div>
    </div>
    }
    </div>
  )
}
