import React from "react";
import styled from "styled-components";

const StyLogins = {
  StyLoginContainer: styled.div`
    padding: 0;
    margin: 0;
    border: none;
    font-size: 14px;
  `,
  StyLoginBox: styled.div`
    width: 480px;
    height: 360px;
    padding: 40px;
    box-sizing: border-box;
    margin: 0 auto;
  `,
  StyLoginTitle: styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: aqua;
  `,
  StyLoginInput: styled.input`
    width: 100%;
    height: 48px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 16px;
    border-radius: 6px;
    background-color: #f8f8f8;
    border: none;
  `,
  StyledButton: styled.button`
    width: 100%;
    height: 48px;
    border-radius: 6px;
    color: #000;
    font-size: 16px;
    background-color: aqua;
    margin-top: 20px;
    border: none;
  `,
};

export default StyLogins;
