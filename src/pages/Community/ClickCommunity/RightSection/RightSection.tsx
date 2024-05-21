import Chat from "../../../../components/modals/chat/Chat";
import JoinRoom from "../../../../components/modals/chat/joinroom/JoinRoom";
import Schedule from "../../../../components/modals/schedule/Schedule";
import CreateSchedule from "../../../../components/modals/schedule/createschedule/CreateSchedule";
import VoteSchedule from "../../../../components/modals/schedule/voteSchedule/VoteSchedule";
import modalStore from "../../../../stores/modal";
import beer from "../../../../img/beer.png";
import schedule from "../../../../img/schedule.png";
import communityChat from "../../../../img/communityChat.png";
import communityStore from "../../../../stores/community";
import userStore from "../../../../stores/user";

export default function RightSection() {
  const { modals, modalControl } = modalStore();
  const { selectedCommunity } = communityStore();
  const { loginUser } = userStore(); 
  const handleChat = () => {
    if (Object.values(modals).some((modal) => modal === true)) {
      modalControl("closeAll");
    } else {
      modalControl("chat");
    }
  };
  const handleSchedule = () => {
    if (Object.values(modals).some((modal) => modal === true)) {
      modalControl("closeAll");
    } else {
      modalControl("schedule");
    }
  };

  return (
    <>
      {
        selectedCommunity?.member.some((m) => m.id === loginUser.id && m.state === true) ?
        <div className="mr-[80px] mt-[650px] fixed right-1">
          <div className="flex gap-x-[30px]">
            <img src={beer} alt="beer" />
            <img src={schedule} alt="schedule" onClick={handleSchedule} />
            <img src={communityChat} alt="communityChat" onClick={handleChat} />
          </div>
          {modals.chatModal && (
            <Chat modals={modals} modalControl={modalControl} />
          )}
          {modals.scheduleModal && (
            <Schedule modals={modals} modalControl={modalControl} />
          )}
          {modals.createScheduleModal && (
            <CreateSchedule modals={modals} modalControl={modalControl} />
          )}
          {modals.voteScheduleModal && <VoteSchedule />}
          {modals.joinRoomModal && (
            <JoinRoom modals={modals} modalControl={modalControl} />
          )}
        </div>
        : <></>
      }
    </>
  );
}
