import { CommunityType, UserType } from "../../../models/type";
import member from "../../../img/people.png";
import king from "../../../img/king.png"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import userStore from "../../../stores/user";

interface CommunityInfoType {
    selectedCommunity: CommunityType;
}

export default function CommunityInfo({selectedCommunity}: CommunityInfoType) {
  const [realMember, setRealMember] = useState<UserType[]>([]);
  const [pending, setPending] = useState<UserType[]>([]);
  const [kingMember, setKingMember] = useState<UserType>();
  const [ userCheck, setUserCheck ] = useState<UserType>();
  const { loginUser } = userStore();
  const navigate = useNavigate();

  // const getKing = () => {
  //   const [k] = selectedCommunity.member?.filter(king => king.authority === "모임장");
  //   setKingMember(k);
  // }

  const getKing = () => {
    if (selectedCommunity && selectedCommunity.member) {
      const [k] = selectedCommunity.member.filter(king => king.authority === "모임장");
      setKingMember(k);
    } else {
      setKingMember(undefined);
    }
  }
  const CheckMember = () => {
    if (selectedCommunity && selectedCommunity.member) {
      const realMember = selectedCommunity.member?.filter(m => m.state === true);
      setRealMember(realMember);
      const pendingMember = selectedCommunity.member?.filter(p => p.state === false);
      setPending(pendingMember);
    } else {
      setRealMember([]);
      setPending([]);
    }
    
  }

  const watchMembers = () => {
    if(userCheck?.state === true){
      navigate('/communityMember');
    }else{
      console.log('가입모달');
    }
  }
  
  useEffect(()=> {
    getKing();
    CheckMember();
    if(selectedCommunity && selectedCommunity.member){
      const [check] = selectedCommunity.member.filter(f => f.id === loginUser.id);
      setUserCheck(check);
    }else{
      setUserCheck(undefined);
    }
    
  },[selectedCommunity])
  return (
    <>
      <div className="w-[250px] h-[250px] border border-black">
        <img
          src={selectedCommunity?.thumbnail_url}
          alt="communityProfile"
          className="w-full h-full"
          onClick={()=> navigate(`/community/${selectedCommunity.id}`)}
        />
      </div>
      <div className="flex items-center mt-10">
        <div className="w-[75px] h-[75px] border-2 rounded-[50%] items-center justify-center"><img src={kingMember?.profile.image} alt="thumbnail" className="rounded-[50%] w-full h-full"/></div>
        <div className="flex-col ml-3 relative">
          <div className="flex items-center gap-x-2">
            <div>{selectedCommunity?.communityName}</div>
            <div className="flex relative">
              {
                pending.length > 0 && userCheck?.authority === '모임장' || pending.length > 0 && userCheck?.authority === '부모임장' ?
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
                onClick={() => watchMembers()}
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
        {selectedCommunity?.description}
      </div>
    </>
  );
}
