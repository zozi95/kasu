import React from "react";
import { Signup_Style } from "../../Style/Signup_Style";

const Sign_up = () => {
  return (
    <Signup_Style>
      <input type="text" placeholder="아이디" />
      <input type="text" placeholder="비밀번호" />
      <input type="text" placeholder="이메일" />
      <input type="text" placeholder="이름" />
      <input type="text" placeholder="나이" />
      <div className="register">회원등록</div>
      <div className="sso">sso회원가입</div>
    </Signup_Style>
  );
};

export default Sign_up;
