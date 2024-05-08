import React, { useState, ChangeEvent } from "react";
import logo from "../../img/logo.png";
import nameIcon from "../../img/name.png";
import redName from "../../img/redName.png";
import emailIcon from "../../img/email.png";
import redEmail from "../../img/redEmail.png";
import { FindIdApi } from "../../Api/axios";
import PopUp from "../../components/PopUp/PopUp";

export default function FindId() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkName, setCheckName] = useState(true);
  const [checkEmail, setCheckEmail] = useState(true);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCheckName(name !== "");
    setCheckEmail(email !== "");

    if (checkName && checkEmail) {
      const response = await FindIdApi(name, email);

      if (response) {
        console.log("Recipe created successfully:", response);
        // 성공 처리, 예를 들어 알림 표시나 페이지 이동 등
      } else {
        console.error("Failed to create recipe");
        // 실패 처리, 예를 들어 에러 메시지 표시 등
      }
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={logo} alt="logo" className="w-[401px] h-[123px] mt-12 mb-9" />
      <div className="text-3xl mb-9">아이디 찾기</div>
      <form>
        <div className="mb-16">
          {checkName ? (
            <div className="w-[595px] h-[90px] border-x-2 border-t-2 border-black rounded-t-lg flex justify-center items-center">
              <img src={nameIcon} alt="nameIcon" className="ml-9 mr-2" />
              <input
                type="text"
                placeholder="이름"
                className="w-full text-3xl outline-none focus:border-transparent "
                value={name}
                onChange={onChangeName}
              />
            </div>
          ) : (
            <div className="w-[595px] h-[90px] border-x-2 border-t-2 border-red-500 rounded-t-lg flex justify-center items-center">
              <img src={redName} alt="redName" className="ml-9 mr-2" />
              <input
                type="text"
                placeholder="이름"
                className="w-full text-3xl outline-none focus:border-transparent placeholder:text-red-500 "
                value={name}
                onChange={onChangeName}
              />
            </div>
          )}
          {checkEmail ? (
            <div
              className={`${
                checkName ? "border-t-2 " : " border-t-2 border-t-red-500"
              } w-[595px] h-[90px] border-x-2 border-b-2 border-black  rounded-b-lg flex justify-center items-center`}
            >
              <img src={emailIcon} alt="emailIcon" className=" ml-9 mr-2" />
              <input
                type="text"
                placeholder="이메일"
                className="w-full text-3xl outline-none focus:border-transparent"
                value={email}
                onChange={onChangeEmail}
              />
            </div>
          ) : (
            <div className="w-[595px] h-[90px] border-2 border-red-500  rounded-b-lg flex justify-center items-center">
              <img src={redEmail} alt="redEmail" className=" ml-9 mr-2" />
              <input
                type="text"
                placeholder="이메일"
                className="w-full text-3xl outline-none focus:border-transparent placeholder:text-red-500"
                value={email}
                onChange={onChangeEmail}
              />
            </div>
          )}
        </div>
        <button
          className="w-[595px] h-[70px] bg-[#0064B2] text-xl text-white rounded-lg "
          onClick={handleSubmit}
        >
          다음
        </button>
        <PopUp
          title="아이디 찾기"
          text1="정보가 일치하지않습니다."
          text2=""
        ></PopUp>
      </form>
    </div>
  );
}
