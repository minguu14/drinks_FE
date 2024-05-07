import React from "react";

type PopUpProps = {
  title: string;
  text1: string;
  text2: string;
  onButtonClick?: () => void;
};

export default function PopUp({
  title,
  text1,
  text2,
  onButtonClick,
}: PopUpProps) {
  return (
    <div className="w-[665px] h-[443px] border-2 border-black rounded-lg flex flex-col justify-center items-center">
      <div className="text-3xl mb-[104px]">{title}</div>
      <div className="text-xl flex flex-col items-center mb-[103px]">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
      <button className="w-[220px] h-[70px] bg-[#0064B2] rounded-lg text-white">
        완료
      </button>
    </div>
  );
}
