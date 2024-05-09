import React from "react";

type PopUp2Props = {
  title: string;
  text1: string;
  text2: string;
  onButtonClick?: () => void;
  onButtonClick2?: () => void;
};

export default function PopUp2({
  title,
  text1,
  text2,
  onButtonClick,
  onButtonClick2,
}: PopUp2Props) {
  return (
    <div className="w-[665px] h-[443px] border-2 border-black rounded-lg flex flex-col justify-center items-center">
      <div className="text-3xl mb-[104px]">{title}</div>
      <div className="text-xl flex flex-col items-center mb-[103px]">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
      <div>
        <button
          className="w-[220px] h-[70px] bg-[#0064B2] rounded-lg text-white mr-16"
          onClick={onButtonClick}
        >
          로그인
        </button>
        <button
          className="w-[220px] h-[70px] bg-[#0064B2] rounded-lg text-white"
          onClick={onButtonClick2}
        >
          비밀번호 찾기
        </button>
      </div>
    </div>
  );
}
