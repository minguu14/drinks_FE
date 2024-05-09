import { joinCommunity } from "../../Api/community"
import { CommunityType, UserType } from "../../models/type"
import communityStore from "../../stores/community"
import userStore from "../../stores/user"

interface JoinModalType {
    modalControl: (by: string) => void
    selectedCommunity: CommunityType
}

export default function JoinModal({modalControl, selectedCommunity}: JoinModalType) {
    const { community, fetchCommunity } = communityStore();
    const { loginUser } = userStore();
    const join = () => {
        modalControl('join');
        const updateUser = community.map((join) => {
            if(join.id === selectedCommunity.id) {
                return {
                    ...join,
                    member: [...join.member, {
                        id: loginUser.id,
                        profile: {
                            image: loginUser.profile_picture,
                            nickname: loginUser.name,
                        },
                        userId: loginUser.userId,
                        authority: "일반멤버",
                        state: false,
                    }]
                }
            }
            return join
        })
        
        const [filter] = updateUser.filter((community) => community.id === selectedCommunity.id);
        joinCommunity(filter).then(() => fetchCommunity());
    }
  return (
        <div className="w-screen h-screen inset-0 bg-black/60 z-50 fixed top-0 flex justify-center items-center">
            <div className="w-[690px] h-[490px] border-2 rounded-[10px] bg-white">
                <div className="border-b-2 h-[50px]"></div>
                <div className="flex flex-col items-center justify-center h-[440px]">
                    <span className="text-[32px] mb-[100px]">{`${selectedCommunity.communityName} 모임에 가입하시겠습니까?`}</span>
                    <div className="flex gap-x-5">
                        <button className="w-[80px] h-[37px] rounded-[10px] bg-blue-500 text-white" onClick={join}>신청</button>
                        <button className="w-[80px] h-[37px] rounded-[10px] bg-red-500 text-white" onClick={()=>modalControl("join")}>취소</button>
                    </div>
                </div>
            </div>
        </div>
  )
}
