import axios from "axios";
import React from "react";

export default function KaKaoLogin() {
  const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;

  const onKakaoSocialLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;
  };
  return (
    <div>
      <div>
        <button onClick={onKakaoSocialLogin}>카카오톡 로그인</button>
      </div>
    </div>
  );
}
