import React, { useState, ChangeEvent, useEffect } from "react";
import logo from "../../img/logo.png";
import IdIcon from "../../img/Id.png";
import passwordIcon from "../../img/password.png";
import KakaoLogo from "../../img/kakaoLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { LoginApi } from "../../Api/axios";
import FindPassword from "./FindPassword";

interface Login {
  userId: string;
  password: string;
}

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  // 로그인 상태 유지
  useEffect(() => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      // navigate("/");
    }
  }, [navigate]);

  // 로그인 버튼
  const onClickLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const result = await LoginApi(userId, password);

    if (result === "failed to login") {
      alert("아이디와 비밀번호가 올바르지 않습니다.");
    } else {
      console.log(result);

      const accessToken = result.headers.authorization.split(" ")[1];

      console.log(accessToken);

      localStorage.setItem("access", accessToken);

      // 로그인 성공 후 홈으로 리디렉션
      navigate("/");
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-center">
      <img src={logo} alt="logo" className="w-[401px] h-[123px] mt-12 mb-9" />
      <form>
        <div className="flex mb-4">
          <div className="mr-6">
            <div className="w-[641px] h-[112px] border-x-2 border-t-2 border-black rounded-t-lg flex justify-center items-center">
              <img src={IdIcon} alt="IdIcon" className="ml-16 mr-2" />
              <input
                type="text"
                placeholder="아이디"
                className="w-full text-3xl outline-none focus:border-transparent"
                value={userId}
                onChange={onChangeUserId}
              />
            </div>
            <div className="w-[641px] h-[112px]  border-2 border-black rounded-b-lg flex justify-center items-center">
              <img
                src={passwordIcon}
                alt="passwordIcon"
                className="ml-16 mr-2"
              />
              <input
                type="text"
                placeholder="비밀번호"
                className="w-full text-3xl outline-none focus:border-transparent"
                value={password}
                onChange={onChangePassword}
              />
            </div>
          </div>
          <div className="w-[190px] h-[224px] flex flex-col">
            <button
              className="h-1/2 bg-[#0064B2] text-white border-x-2 border-t-2 rounded-t-lg border-black text-xl"
              onClick={onClickLogin}
            >
              로그인
            </button>
            <button className=" h-1/2 flex justify-center items-center bg-[#FFE600] border-2 border-black rounded-b-lg">
              <img src={KakaoLogo} alt="KakaoLogo" className="mr-2" />
              <p className="text-xl">카카오 로그인</p>
            </button>
          </div>
        </div>
        <div className="w-[855px] flex justify-between">
          <div className="flex">
            <input type="checkbox" className="mr-2 text-xl w-5" />
            <p className="text-xl">로그인 상태 유지</p>
          </div>
          <ul className="flex text-xl">
            <Link to="signup">
              <li className="after:content-['|'] after:mx-2">회원가입</li>
            </Link>
            <Link to="findid">
              <li className="after:content-['|'] after:mx-2">아이디 찾기</li>
            </Link>
            <Link to="findPassword">
              <li>비밀번호 찾기</li>
            </Link>
          </ul>
        </div>
      </form>
    </div>
  );
}
