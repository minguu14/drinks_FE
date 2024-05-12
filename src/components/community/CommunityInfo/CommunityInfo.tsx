import { CommunityType, UserType } from "../../../models/type";
import member from "../../../img/people.png";
import king from "../../../img/king.png"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface CommunityInfoType {
    selectedCommunity: CommunityType;
}

export default function CommunityInfo({selectedCommunity}: CommunityInfoType) {
  const [realMember, setRealMember] = useState<UserType[]>([]);
  const [pending, setPending] = useState<UserType[]>([]);
  const [kingMember, setKingMember] = useState<UserType>();
  const navigate = useNavigate();

  const getKing = () => {
    const [k] = selectedCommunity.member.filter(king => king.authority === "모임장");
    setKingMember(k);
  }
  const CheckMember = () => {
    const realMember = selectedCommunity.member.filter(m => m.state === true);
    setRealMember(realMember);
    const pendingMember = selectedCommunity.member.filter(p => p.state === false);
    setPending(pendingMember);
  }
  useEffect(()=> {
    getKing();
    CheckMember();
  },[selectedCommunity])
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
        <div className="w-[75px] h-[75px] border-2 rounded-[50%] items-center justify-center"><img src={kingMember?.profile.image} alt="thumbnail" className="rounded-[50%] w-full h-full"/></div>
        <div className="flex-col ml-3 relative">
          <div className="flex items-center gap-x-2">
            <div>{selectedCommunity.communityName}</div>
            <div className="flex relative">
              {
                pending.length > 0 ?
                <div 
                  className="absolute border rounded-[50%] w-[25px] h-[25px] left-[3px] bottom-[18px] text-[12px] bg-red-500 text-white flex justify-center items-center">
                  {pending.length}+
                </div>
                : <></>
              }
              <img
                src={member}
                alt="people"
                className="w-[20px] h-[20px] cursor-pointer"
                onClick={() => navigate('/communityMember')}
              />
              <div>{`${realMember.length}/100`}</div>
            </div>
          </div>
          <div className="flex">
            <img src={king} alt="king" className="w-[20px] h-[20px]" />
            <div>{kingMember?.profile.nickname}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-5 h-[200px] w-[250px]">
        {selectedCommunity.description}
      </div>
    </>
  );
}
