import React, { ChangeEvent, useState, useEffect } from "react";
import logo from "../../img/logo.png";
import IdIcon from "../../img/Id.png";
import nameIcon from "../../img/name.png";
import passwordIcon from "../../img/password.png";
import emailIcon from "../../img/email.png";
import { SignUpApi, CheckUserId } from "../../Api/axios";
import redName from "../../img/redName.png";
import redId from "../../img/redId.png";
import redPassword from "../../img/redPassword.png";
import redEmail from "../../img/redEmail.png";
import brokenCup from "../../img/brokenCup.png";
import PopUp from "../../components/PopUp/PopUp";
import { Navigate, useNavigate } from "react-router-dom";

interface SignUp {
  name: string;
  userId: string;
  password: string;
  email: string;
}

export default function SignUp() {
  const [name, setName] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [checkName, setCheckName] = useState(true);
  const [checkUserId, setCheckUserId] = useState(true);
  const [checkPassword, setCheckPassword] = useState(true);
  const [checkEmail, setCheckEmail] = useState(true);
  const [success, setSuccess] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showSameId, setShowSameId] = useState(false);
  const [navLogin, setNavLogin] = useState(false);
  const [available, setAvailable] = useState(false);

  const navigate = useNavigate();

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // 중복 확인
  const CheckSubmit = async () => {
    const response = await CheckUserId(userId);
    console.log(response.available);
    setAvailable(response.available);

    if (response.available == true) {
      setShowPopUp(true);
    } else {
      setShowSameId(true);
    }
  };

  // 데이터를 서버에 전송하는 함수
  const handleSubmit = async () => {
    setCheckName(name !== "");
    setCheckUserId(userId !== "");
    setCheckPassword(password !== "");
    setCheckEmail(email !== "");
    console.log(checkName);
    if (checkName && checkUserId && checkPassword && checkEmail && available) {
      const response = await SignUpApi(name, userId, password, email);

      if (response) {
        console.log("Recipe created successfully:", response);
        // 성공 처리, 예를 들어 알림 표시나 페이지 이동 등
        setSuccess(true);
      } else {
        console.error("Failed to create recipe");
        // 실패 처리, 예를 들어 에러 메시지 표시 등
      }
    } else if (available === false) {
      setCheckUserId(false);
    }
  };
  const handShowPopUp = () => {
    setShowPopUp(false);
    setShowSameId(false);
    setCheckUserId(true);
  };

  const naviLogin = () => {
    setNavLogin(false);
    navigate("/login");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={logo} alt="logo" className="w-[401px] h-[123px] mt-12 mb-9" />
      <div className="text-3xl mb-9">회원가입</div>
      <form className="">
        {checkName ? (
          <div className="w-[595px] h-[90px] border-x-2 border-t-2 border-black rounded-t-lg flex flex-row  items-center  ">
            <img src={nameIcon} alt="nameIcon" className="ml-9 mr-2" />
            <input
              type="text"
              placeholder="이름"
              className="w-full text-3xl outline-none focus:border-transparent"
              value={name}
              onChange={onChangeName}
            />
          </div>
        ) : (
          <div className="w-[595px] h-[90px] border-x-2 border-t-2 border-red-500 rounded-t-lg flex flex-row  items-center ">
            <img src={brokenCup} alt="brokenCup" className="ml-9 mr-2  " />
            <input
              type="text"
              placeholder="이름"
              className="w-full text-3xl outline-none focus:border-transparent placeholder:text-red-500"
              value={name}
              onChange={onChangeName}
            />
          </div>
        )}
        {checkUserId ? (
          <div
            className={`${
              checkName ? "  border-black  " : "border-t-red-500 border-x-black"
            } w-[595px] h-[90px] border-x-2  border-t-2 flex flex-row  items-center `}
          >
            <img src={IdIcon} alt="IdIcon" className="ml-9 mr-2" />
            <input
              type="text"
              placeholder="아이디"
              className="w-full text-3xl outline-none"
              value={userId}
              onChange={onChangeUserId}
            />
            <div
              className="w-[121px] h-[46px] rounded-lg bg-[#0064B2] text-white text-xl ml-2 mr-9 flex justify-center items-center cursor-pointer"
              onClick={CheckSubmit}
            >
              중복확인
            </div>
          </div>
        ) : (
          <div className="w-[595px] h-[90px] border-x-2 border-t-2 border-red-500  flex flex-row  items-center">
            <img src={brokenCup} alt="brokenCup" className="ml-9 mr-2" />
            <input
              type="text"
              placeholder="아이디"
              className="w-full text-3xl outline-none placeholder:text-red-500"
              value={userId}
              onChange={onChangeUserId}
            />
            <div
              className="w-[121px] h-[46px] rounded-lg bg-red-500 text-white text-xl ml-2 mr-9 flex justify-center items-center cursor-pointer"
              onClick={CheckSubmit}
            >
              중복확인
            </div>
          </div>
        )}
        {checkPassword ? (
          <div
            className={`${
              checkUserId
                ? "  border-black  "
                : "border-t-red-500 border-x-black"
            } w-[595px] h-[90px] border-x-2  border-t-2 flex flex-row  items-center `}
          >
            <img src={passwordIcon} alt="passwordIcon" className="ml-9 mr-2" />
            <input
              type="text"
              placeholder="비밀번호"
              className="w-full text-3xl outline-none focus:border-transparent"
              value={password}
              onChange={onChangePassword}
            />
          </div>
        ) : (
          <div className="w-[595px] h-[90px] border-x-2 border-t-2 border-red-500  flex flex-row  items-center ">
            <img src={brokenCup} alt="brokenCup" className="ml-9 mr-2" />
            <input
              type="text"
              placeholder="비밀번호"
              className="w-full text-3xl outline-none focus:border-transparent placeholder:text-red-500"
              value={password}
              onChange={onChangePassword}
            />
          </div>
        )}
        {checkEmail ? (
          <div
            className={`${
              checkPassword
                ? "  border-black  "
                : "border-t-red-500 border-x-black border-b-black"
            } w-[595px] h-[90px] border-2  rounded-b-lg flex flex-row  items-center   mb-10`}
          >
            <img src={emailIcon} alt="emailIcon" className="ml-9 mr-2" />
            <input
              type="text"
              placeholder="이메일"
              className="w-full text-3xl outline-none focus:border-transparent "
              value={email}
              onChange={onChangeEmail}
            />
          </div>
        ) : (
          <div className="w-[595px] h-[90px] border-2 rounded-b-lg border-red-500  flex flex-row  items-center mb-10 ">
            <img src={brokenCup} alt="brokenCup" className="ml-9 mr-2" />
            <input
              type="text"
              placeholder="이메일"
              className="w-full text-3xl outline-none focus:border-transparent placeholder:text-red-500"
              value={email}
              onChange={onChangeEmail}
            />
          </div>
        )}
      </form>

      <button
        className="w-[595px] h-[70px] rounded-lg bg-[#0064B2] text-2xl text-white "
        onClick={handleSubmit}
      >
        가입하기
      </button>

      {showSameId && (
        <div className="absolute w-full h-full  flex justify-center items-center bg-white ">
          <PopUp
            title="중복 확인"
            text1="같은 아이디가 있습니다."
            text2=""
            onButtonClick={handShowPopUp}
          ></PopUp>
        </div>
      )}
      {showPopUp && (
        <div className="absolute w-full h-full  flex justify-center items-center bg-white ">
          <PopUp
            title="중복 확인"
            text1="사용 가능한 아이디입니다."
            text2=""
            onButtonClick={handShowPopUp}
          ></PopUp>
        </div>
      )}
      {success && (
        <div className="absolute w-full h-full  flex justify-center items-center bg-white ">
          <PopUp
            title="가입 완료"
            text1="한잔하조 가입을 환영합니다."
            text2="한잔하러 갈까요?"
            onButtonClick={naviLogin}
          ></PopUp>
        </div>
      )}
    </div>
  );
}
