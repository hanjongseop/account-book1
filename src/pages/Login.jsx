import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../lib/api/auth";
import Router from "../shared/Router";

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

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { id, nickname, avatar } = await login({
      id: userId,
      password: userPassword,
    });
    alert("로그인이 되었습니다");
    setUser({ id, nickname, avatar });
    navigate("/");
  };

  const handleUserId = (e) => {
    setUserId(e.target.value);
  };
  const handleUserPassword = (e) => {
    setUserPassword(e.target.value);
  };
  return (
    <StyLoginContainer>
      <StyLoginBox>
        <StyLoginTitle>로그인</StyLoginTitle>
        <form onSubmit={handleLogin}>
          <StyLoginInput
            type="text"
            placeholder="아이디"
            value={userId}
            onChange={handleUserId}
          />
          <br />
          <StyLoginInput
            type="password"
            placeholder="password"
            value={userPassword}
            onChange={handleUserPassword}
          />

          <StyledButton type="submit">로그인</StyledButton>
          <StyledButton type="button" onClick={handleSignUpClick}>
            회원가입
          </StyledButton>
        </form>
      </StyLoginBox>
    </StyLoginContainer>
  );
};

export default Login;
