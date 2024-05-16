import React, { useState, ChangeEvent, useEffect } from "react";
import logo from "../../img/logo.png";
import nameIcon from "../../img/name.png";
import redName from "../../img/redName.png";
import emailIcon from "../../img/email.png";
import redEmail from "../../img/redEmail.png";
import idIcon from "../../img/Id.png";
import redId from "../../img/redId.png";
import { FindPasswordApi } from "../../Api/axios";
import PopUp from "../../components/PopUp/PopUp";
import { Navigate, useNavigate } from "react-router-dom";

export default function FindPassword() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [checkName, setCheckName] = useState(true);
  const [checkUserId, setCheckUserId] = useState(true);
  const [checkEmail, setCheckEmail] = useState(true);
  const [failedPopUp, setFailedPopUp] = useState(false);

  const navigate = useNavigate();

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // 즉시 입력값을 검증하여 변수를 할당
    const isNameValid = name !== "";
    const isUserIdValid = userId !== "";
    const isEmailValid = email !== "";

    // 상태값 업데이트
    setCheckName(isNameValid);
    setCheckUserId(isUserIdValid);
    setCheckEmail(isEmailValid);

    console.log(checkName);
    if (name && email && userId) {
      const response = await FindPasswordApi(name, userId, email);

      if (response === "failed to login") {
        console.error("Failed to create recipe");
        setFailedPopUp(true);
        // 실패 처리, 예를 들어 에러 메시지 표시 등
      } else {
        console.log("Recipe created successfully:", response);
        navigate("/Login/findpassword/changepassword");

        // 성공 처리, 예를 들어 알림 표시나 페이지 이동 등
      }
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={logo} alt="logo" className="w-[401px] h-[123px] mt-12 mb-9" />
      <div className="text-3xl mb-9">비밀번호 찾기</div>
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
          {checkUserId ? (
            <div
              className={`${
                checkName ? "border-t-2 " : " border-t-2 border-t-red-500"
              } w-[595px] h-[90px] border-x-2  border-black  flex justify-center items-center`}
            >
              <img src={idIcon} alt="idIcon" className=" ml-9 mr-2" />
              <input
                type="text"
                placeholder="아이디"
                className="w-full text-3xl outline-none focus:border-transparent"
                value={userId}
                onChange={onChangeUserId}
              />
            </div>
          ) : (
            <div className="w-[595px] h-[90px] border-x-2 border-t-2 border-red-500   flex justify-center items-center">
              <img src={redId} alt="redId" className=" ml-9 mr-2" />
              <input
                type="text"
                placeholder="아이디"
                className="w-full text-3xl outline-none focus:border-transparent placeholder:text-red-500"
                value={userId}
                onChange={onChangeUserId}
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
      </form>
      {failedPopUp && (
        <div className="absolute w-full h-full  flex justify-center items-center bg-white ">
          <PopUp
            title="비밀번호 찾기"
            text1="정보가 일치하지않습니다."
            text2=""
            onButtonClick={() => setFailedPopUp(false)}
          ></PopUp>
        </div>
      )}
    </div>
  );
}
