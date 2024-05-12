import { Link } from "react-router-dom";
import CommunityInfo from "../../../../components/community/CommunityInfo/CommunityInfo";
import setting from "../../../../img/setting.png";
import { CommunityType, MemberType } from "../../../../models/type";
import { ModalStoreType } from "../../../../stores/modal";

interface LeftSectionType {
    selectedCommunity: CommunityType;
    loginUser: MemberType;
    modalControl: (by: string) => void
}

export default function LeftSection({selectedCommunity, loginUser, modalControl}: LeftSectionType) {
  return (
    <div className="ml-[80px] fixed left-3">
        <CommunityInfo selectedCommunity={selectedCommunity}/>
        {selectedCommunity.member.some((m) => m.id === loginUser.id && m.state === true) ?
          <button className="w-[250px] h-[70px] rounded-[10px] bg-blue-500 text-white" onClick={()=> modalControl("join")}>
            글쓰기
          </button>
          :
          <button className="w-[250px] h-[70px] rounded-[10px] bg-blue-500 text-white" onClick={()=> modalControl("join")}>
            가입하기
          </button>
        }
        
        <Link to="/communitySetting">
            <img src={setting} alt="setting" className="w-[35px] h-[35px] mt-[50px]" />
        </Link>
      </div>
  )
}
