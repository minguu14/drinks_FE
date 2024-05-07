import { CommunityType } from "../../../models/type";
import member from "../../../img/people.png";
import king from "../../../img/king.png"
import { useNavigate } from "react-router-dom";
import userStore from "../../../stores/user";

interface CommunityInfoType {
    selectedCommunity: CommunityType;
}

export default function CommunityInfo({selectedCommunity}: CommunityInfoType) {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[250px] h-[250px] border-4">
        <img
          src={selectedCommunity.thumbnail_url}
          alt="communityProfile"
          className="w-full h-full"
          onClick={()=> navigate(`/community/${selectedCommunity.id}`)}
        />
      </div>
      <div className="flex items-center mt-10">
        <div className="w-[75px] h-[75px] border-2 rounded-[50%] items-center justify-center"></div>
        <div className="flex-col ml-3">
          <div className="flex items-center gap-x-2">
            <div>{selectedCommunity.communityName}</div>
            <div className="flex">
              <img
                src={member}
                alt="people"
                className="w-[20px] h-[20px] cursor-pointer"
                onClick={() => navigate('/communityMember')}
              />
              <div>{selectedCommunity.member.length}/100</div>
            </div>
          </div>
          <div className="flex">
            <img src={king} alt="king" className="w-[20px] h-[20px]" />
            <div>{selectedCommunity.member[0].name}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-5 h-[200px] w-[250px]">
        {selectedCommunity.description}
      </div>
    </>
  );
}
