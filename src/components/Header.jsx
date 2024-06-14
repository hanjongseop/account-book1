import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getUserInfo } from "../lib/api/auth";
import { useEffect } from "react";

const StyNavBar = styled.nav`
  max-width: 800px;
  width: 100%;
  border-radius: 10px;
  background-color: aqua;
  color: black;
  margin-bottom: 20px;
  text-align: center;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px;
`;

const StyNavItem = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    background-color: #3ea0c1;
  }
`;

const StyProfile = styled.div`
  display: flex;
  align-items: center;
`;

const StyAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const StyName = styled.span`
  color: black;
  margin-right: 20px;
`;

const StyButton = styled.button`
  padding: 8px 12px;
  background-color: aqua;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #3ea0c1;
  }
`;

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo().then((res) => {
      if (res) {
        setUser({
          id: res.id,
          nickname: res.nickname,
          avatar: res.avatar,
        });
      } else {
        setUser(null);
        navigate("/login");
        localStorage.clear();
      }
    });
  }, [navigate, setUser]);

  return (
    <>
      <StyNavBar>
        <StyNavItem to="/">Home</StyNavItem>
        {user ? (
          <StyProfile>
            <StyAvatar src={user.avatar} alt="avatar" />
            <StyName>{user.nickname}</StyName>
            <StyButton
              onClick={() => {
                setUser(null);
                localStorage.clear();
                navigate("/login");
              }}
            >
              로그아웃
            </StyButton>
          </StyProfile>
        ) : (
          <StyNavItem to="/login">로그인</StyNavItem>
        )}
      </StyNavBar>
      <Outlet />
    </>
  );
};

export default Header;
