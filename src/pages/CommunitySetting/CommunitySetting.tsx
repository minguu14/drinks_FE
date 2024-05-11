import communityChat from "../../img/communityChat.png";
import schedule from "../../img/schedule.png";
import beer from "../../img/beer.png";
import communityStore from "../../stores/community";
import JoinModal from "../../components/modals/JoinModal";
import Chat from "../../components/modals/chat/Chat";
import modalStore from "../../stores/modal";
import CreateRoom from "../../components/modals/chat/createroom/CreateRoom";
import JoinRoom from "../../components/modals/chat/joinroom/JoinRoom";
import InviteRoomMember from "../../components/modals/chat/room_member/inviteRoomMember/InviteRoomMember";
import userStore from "../../stores/user";
import { useEffect } from "react";
import LeftSection from "../Community/ClickCommunity/LeftSection/LeftSection";

export default function CommunitySetting() {
  const { selectedCommunity, community, selectCommunity } = communityStore();
  const { modals, modalControl } = modalStore();
  const { loginUser } = userStore();
  const handleChat = () => {
    if (Object.values(modals).some((modal) => modal === true)) {
      modalControl("closeAll");
    } else {
      modalControl("chat");
    }
  };

  useEffect(() => {
    const [filterItem] = community.filter(
      (item) => item.id === selectedCommunity.id
    );
    selectCommunity(filterItem);
  }, [community]);

  return (
    <div>
      <div className="flex mt-[200px] mb-10 relative">
        {modals.joinModal && (
          <JoinModal
            modalControl={modalControl}
            selectedCommunity={selectedCommunity}
          />
        )}
        {modals.createChatRoomModal && (
          <CreateRoom modals={modals} modalControl={modalControl} />
        )}
        {modals.inviteRoomMember && (
          <InviteRoomMember modals={modals} modalControl={modalControl} />
        )}

        {/* 모임정보 */}
        <LeftSection
          selectedCommunity={selectedCommunity}
          loginUser={loginUser}
          modalControl={modalControl}
        />

        {/* 모임피드 */}
        <div className="flex absolute left-[650px]">
          <div className="border border-black rounded-[10px] w-[660px] mb-10">
            <div className="flex items-center border-b border-black h-[60px] pl-10">
              <span>프로필 설정 </span>
            </div>
            <div className="flex justify-center items-center border-b border-black h-[360px]">
              <div className="flex flex-col border border-black w-[450px] h-[260px]">
                <div className="flex flex-col justify-center items-center p-[25px] gap-y-5">
                  <div className="border rounded-[50%] w-[90px] h-[90px]"></div>
                  <span>맹구님의 프로필</span>
                </div>
                <button className="w-[60px] h-[40px] text-white bg-blue-500 rounded-[5px] self-end mr-10">
                  저장
                </button>
              </div>
            </div>
            <div className="flex items-center border-b border-black h-[60px] pl-10">
              <span>모임 프로필 설정 </span>
            </div>
            <div className="flex justify-center items-center border-b border-black h-[360px]">
              <div className="flex flex-col border border-black w-[450px] h-[260px]">
                <div className="flex flex-col justify-center items-center p-[25px] gap-y-5">
                  <div className="flex gap-x-5">
                    <div className="flex flex-col items-center gap-y-7">
                      <div className="border border-black w-[150px] h-[150px]"></div>
                      <span>떡잎방범대</span>
                    </div>
                    <div className="flex flex-col gap-y-5">
                      <input
                        type="text"
                        className="w-[220px] h-[150px] border border-black"
                      />
                      <button className="w-[60px] h-[40px] text-white bg-blue-500 rounded-[5px] self-end">
                        저장
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[300px]"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center border-b border-black h-[60px] pl-10">
              <span>모임 관리 </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-between items-center border-b border-black w-[560px] p-3">
                <span>모임 탈퇴</span>
                <button className="border rounded-[5px] w-[75px] h-[40px] text-white bg-red-500">
                  탈퇴
                </button>
              </div>
              <div className="flex justify-between items-center border-b border-black w-[560px] p-3 mb-10">
                <span>모임 탈퇴</span>
                <button className="border rounded-[5px] w-[75px] h-[40px] text-white bg-red-500">
                  탈퇴
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 사이드기능 */}
        <div className="mr-[80px] mt-[650px] fixed right-1">
          <div className="flex gap-x-[30px]">
            <img src={beer} alt="beer" />
            <img src={schedule} alt="schedule" />
            <img src={communityChat} alt="communityChat" onClick={handleChat} />
          </div>
          {modals.chatModal && (
            <Chat modals={modals} modalControl={modalControl} />
          )}
          {modals.joinRoomModal && (
            <JoinRoom modals={modals} modalControl={modalControl} />
          )}
        </div>
      </div>
    </div>
  );
}
