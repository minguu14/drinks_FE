import React from "react";
import logo from "../../img/logo.png";
import IdIcon from "../../img/Id.png";
import passwordIcon from "../../img/password.png";

export default function Login() {
  return (
    <div>
      <img src={logo} alt="logo" className="w-[401px] h-[123px] mt-12 mb-9" />
      <form>
        <div>
          <div>
            <div className="w-[641px] h-[112px] border-x-2 border-t-2 border-black rounded-t-lg flex justify-center items-center">
              <img src={IdIcon} alt="IdIcon" className="ml-16" />
              <input
                type="text"
                placeholder="아이디"
                className="w-full text-3xl outline-none focus:border-transparent"
              />
            </div>
            <div className="w-[641px] h-[112px]  border-2 border-black rounded-b-lg flex justify-center items-center">
              <img src={passwordIcon} alt="passwordIcon" className="ml-16" />
              <input
                type="text"
                placeholder="비밀번호"
                className="w-full text-3xl outline-none focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <button>로그인</button>
            <button></button>
          </div>
        </div>
        <div></div>
      </form>
    </div>
  );
}
