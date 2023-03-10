import React from 'react';
import styled from 'styled-components';
import NavTitleIcon from './images/navTitle.png';

const Nav = () => {
  return (
    <NavWrap>
      <NavTitle>
        <span>HYODORI</span>
        <img src={NavTitleIcon} alt="NavTitle" />
      </NavTitle>
      <NavItems>
        <NavItem>
          <Item>소개</Item>
        </NavItem>
        <NavItem>
          <Item>문화여가시설찾기</Item>
        </NavItem>
        <NavItem>
          <Item>효도채널</Item>
        </NavItem>
        <NavItem>
          <Item>사람</Item>
        </NavItem>
      </NavItems>
    </NavWrap>
  );
};

const NavWrap = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: 10px solid #f2be5b;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background-color: wheat;
  opacity: 0.8;
  z-index:5;
`;

const NavTitle = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  span {
    font-size: 30px;
    font-weight: 700;
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    position: absolute;
    right: 10%;
    top: 10%;
  }
`;

const NavItems = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

export default Nav;
