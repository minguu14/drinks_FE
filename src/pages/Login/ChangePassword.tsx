import React, { useState, ChangeEvent, useEffect } from "react";
import logo from "../../img/logo.png";
import nameIcon from "../../img/name.png";
import redName from "../../img/redName.png";
import passwordIcon from "../../img/password.png";
import redPassword from "../../img/redPassword.png";
import { ChangePasswordApi } from "../../Api/axios";
import PopUp from "../../components/PopUp/PopUp";
import { Navigate, useNavigate } from "react-router-dom";

export default function FindPassword() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [checkName, setCheckName] = useState(true);
  const [checkPassword, setCheckPassword] = useState(true);
  const [checkPassword2, setCheckPassword2] = useState(true);
  const [failedPopUp, setFailedPopUp] = useState(false);
  const [successPopUp, setSuccessPopUp] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangePassword2 = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword2(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // 즉시 입력값을 검증하여 변수를 할당
    const isNameValid = name !== "";
    const isPasswordValid = password !== "";
    const isCheckPasswordValid = password2 !== "";

    // 상태값 업데이트
    setCheckName(isNameValid);
    setCheckPassword(isPasswordValid);
    setCheckPassword2(isCheckPasswordValid);

    console.log(checkName);
    if (name && password && password2) {
      const response = await ChangePasswordApi(name, password);

      if (response === "failed to login") {
        console.error("Failed to create recipe");
        setFailedPopUp(true);
        // 실패 처리, 예를 들어 에러 메시지 표시 등
      } else {
        console.log("Recipe created successfully:", response);
        setMessage(response.message);
        setSuccessPopUp(true);

        // 성공 처리, 예를 들어 알림 표시나 페이지 이동 등
      }
    }
  };

  const handlePopup = () => {
    setSuccessPopUp(false);
    navigate("/login");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <img src={logo} alt="logo" className="w-[401px] h-[123px] mt-12 mb-9" />
      <div className="text-3xl mb-9">비밀번호 변경</div>
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
          {checkPassword ? (
            <div
              className={`${
                checkName ? "border-t-2 " : " border-t-2 border-t-red-500"
              } w-[595px] h-[90px] border-x-2  border-black  flex justify-center items-center`}
            >
              <img
                src={passwordIcon}
                alt="passwordIcon"
                className=" ml-9 mr-2"
              />
              <input
                type="text"
                placeholder="비밀번호변경"
                className="w-full text-3xl outline-none focus:border-transparent"
                value={password}
                onChange={onChangePassword}
              />
            </div>
          ) : (
            <div className="w-[595px] h-[90px] border-x-2 border-t-2 border-red-500   flex justify-center items-center">
              <img src={redPassword} alt="redPassword" className=" ml-9 mr-2" />
              <input
                type="text"
                placeholder="비밀번호변경"
                className="w-full text-3xl outline-none focus:border-transparent placeholder:text-red-500"
                value={password}
                onChange={onChangePassword}
              />
            </div>
          )}
          {checkPassword2 ? (
            <div
              className={`${
                checkPassword ? "border-t-2 " : " border-t-2 border-t-red-500"
              } w-[595px] h-[90px] border-x-2 border-b-2 border-black  rounded-b-lg flex justify-center items-center`}
            >
              <img
                src={passwordIcon}
                alt="passwordIcon"
                className=" ml-9 mr-2"
              />
              <input
                type="text"
                placeholder="비밀번호변경 확인"
                className="w-full text-3xl outline-none focus:border-transparent"
                value={password2}
                onChange={onChangePassword2}
              />
            </div>
          ) : (
            <div className="w-[595px] h-[90px] border-2 border-red-500  rounded-b-lg flex justify-center items-center">
              <img src={redPassword} alt="redPassword" className=" ml-9 mr-2" />
              <input
                type="text"
                placeholder="비밀번호변경 확인"
                className="w-full text-3xl outline-none focus:border-transparent placeholder:text-red-500"
                value={password2}
                onChange={onChangePassword2}
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
            title="비밀번호 변경"
            text1="정보가 일치하지않습니다."
            text2=""
            onButtonClick={() => setFailedPopUp(false)}
          ></PopUp>
        </div>
      )}
      {successPopUp && (
        <div className="absolute w-full h-full  flex justify-center items-center bg-white ">
          <PopUp
            title="비밀번호변경 완료"
            text1={message}
            text2=""
            onButtonClick={handlePopup}
          ></PopUp>
        </div>
      )}
    </div>
  );
}
