import React from 'react';
import styled from 'styled-components';
import NavTitleIcon from './images/navTitle.png';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <NavWrap>
      <NavTitle>
        <NavLink to="/">
          <Link>HYODORI</Link>
        </NavLink>
        <img src={NavTitleIcon} alt="NavTitle" />
      </NavTitle>
      <NavItems>
        <NavItem>
          <NavLink to="/">
            <Link>소개</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="culutre">
            <Link>문화여가시설 찾기</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">
            <Link>효도채널</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">
            <Link>효도채널</Link>
          </NavLink>
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
  z-index: 5;
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

const Link = styled.span`
  font-weight: bold;
  padding: 4px 8px;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #f2be5b;
  }
`;

export default Nav;
