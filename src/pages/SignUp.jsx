import React from "react";
import StyLogins from "../components/StyLogin";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <StyLogins.StyLoginContainer>
      <StyLogins.StyLoginBox>
        <StyLogins.StyLoginTitle>LOGin</StyLogins.StyLoginTitle>
        <form>
          <StyLogins.StyLoginInput type="text" placeholder="아이디" />
          <br />
          <StyLogins.StyLoginInput type="password" placeholder="비밀번호" />
          <br />
          <StyLogins.StyLoginInput type="text" placeholder="닉네임" />

          <StyLogins.StyledButton type="submit">
            회원가입
          </StyLogins.StyledButton>
          <StyLogins.StyledButton type="button" onClick={handleLoginClick}>
            로그인
          </StyLogins.StyledButton>
        </form>
      </StyLogins.StyLoginBox>
    </StyLogins.StyLoginContainer>
  );
};

export default SignUp;
