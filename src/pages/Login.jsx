import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyLoginContainer = styled.div`
  padding: 0;
  margin: 0;
  border: none;
  font-size: 14px;
`;
const StyLoginBox = styled.div`
  width: 480px;
  height: 360px;
  padding: 40px;
  box-sizing: border-box;
  margin: 0 auto;
`;
const StyLoginTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: aqua;
`;
const StyLoginInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 16px;
  border-radius: 6px;
  background-color: #f8f8f8;
  border: none;
`;
const StyledButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  color: #000;
  font-size: 16px;
  background-color: aqua;
  margin-top: 20px;
  border: none;
`;

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userNickname, setUserNickname] = useState("");

  const handleSignUpClick = () => {
    navigate("/signup");
  };
  //   const UserIdLength = (e) => {
  //     // const value = e.target.value;
  //     // if (value.length <= 10 && value.length >= 4) {
  //     //   setUserId(value);
  //     // }
  //     if (e.target.value.length <= 10) {
  //       setUserId(e.target.value);
  //     }
  //   };

  //id 유효성 검사
  const handleLogin = () => {
    if (userId.length >= 4 && userId.length <= 10) {
    } else {
      alert("아이디는 4글자 이상 10글자 이하여야 합니다.");
    }
    if (userPassword.length >= 4 && userPassword.length <= 15) {
    } else {
      alert("비밀번호는 4글자 이상 15글자 이하여야 합니다.");
    }
    // if (userNickname.length >= 1 && userNickname.length <= 10) {
    //   alert("닉네임은 1글자 이상 10글자 입니다.");
    // } else {
    //   alert("닉네임은 1글자 이상 10글자 이하여야 합니다.");
    // }
  };

  const UserIdLength = (e) => {
    setUserId(e.target.value);
  };
  const UserPasswordLength = (e) => {
    setUserPassword(e.target.value);
  };
  return (
    <StyLoginContainer>
      <StyLoginBox>
        <StyLoginTitle>LOGin</StyLoginTitle>
        <form>
          <StyLoginInput
            type="text"
            placeholder="아이디"
            value={userId}
            onChange={UserIdLength}
          />
          <br />
          <StyLoginInput
            type="password"
            placeholder="password"
            value={userPassword}
            onChange={UserPasswordLength}
          />

          <StyledButton type="submit" onClick={handleLogin}>
            로그인
          </StyledButton>
          <StyledButton type="button" onClick={handleSignUpClick}>
            회원가입
          </StyledButton>
        </form>
      </StyLoginBox>
    </StyLoginContainer>
  );
};

export default Login;
