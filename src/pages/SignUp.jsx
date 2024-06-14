import React, { useState } from "react";
import StyLogins from "../components/StyLogin";
import { useNavigate } from "react-router-dom";
import { register } from "../lib/api/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  // 유효성 검사 함수
  const SignUpValidation = () => {
    if (id.length < 4 || id.length > 10) {
      alert("아이디는 4글자 이상 10글자 이하여야 합니다.");
      return false;
    }
    if (password.length < 4 || password.length > 15) {
      alert("비밀번호는 4글자 이상 15글자 이하여야 합니다.");
      return false;
    }
    if (nickname.length < 1 || nickname.length > 10) {
      alert("닉네임은 1글자 이상 10글자 이하여야 합니다.");
      return false;
    }
    return true;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!SignUpValidation()) {
      return;
    }
    try {
      const response = await register({
        id: id,
        password: password,
        nickname: nickname,
      });
      if (response) {
        alert("회원가입이 완료되었습니다.");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error =>", error);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <StyLogins.StyLoginContainer>
      <StyLogins.StyLoginBox>
        <StyLogins.StyLoginTitle>회원가입</StyLogins.StyLoginTitle>
        <form onSubmit={onSubmitHandler}>
          <StyLogins.StyLoginInput
            type="text"
            value={id}
            placeholder="아이디"
            onChange={(e) => setId(e.target.value)}
          />
          <br />
          <StyLogins.StyLoginInput
            type="password"
            value={password}
            placeholder="비밀번호"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <StyLogins.StyLoginInput
            type="text"
            value={nickname}
            placeholder="닉네임"
            onChange={(e) => setNickname(e.target.value)}
          />
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
