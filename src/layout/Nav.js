import React, { useState } from 'react';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import NavTitleIcon from './images/navTitle.png';

import { NavLink } from 'react-router-dom';


const Nav = () => {
  const [selectedId, setSelectedId] = useState('');
  const [view, setView] = useState(false);

  const menuClick = e => {
    setSelectedId(e.target.id);
  };

  const menuDrop = e => {
    e.stopPropagation();
    setView(!view);
  };


  return (
    <div>
      <NavWrap>
        <NavTitle>
          <NavLink to="/">
            <p id="logo" onClick={menuClick}>
              HYODORI
            </p>
          </NavLink>
          <img src={NavTitleIcon} alt="NavTitle" />
        </NavTitle>
        <NavItems>
          <NavItem>
            <NavLink to="/">
              <LinkStyle
                id="intro"
                onClick={menuClick}
                className={selectedId === 'intro' ? 'activated' : ''}
              >
                소개
              </LinkStyle>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="culture">
              <LinkStyle
                id="find"
                onClick={menuClick}
                className={selectedId === 'find' ? 'activated' : ''}
              >
                문화여가시설 찾기
              </LinkStyle>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/challenge">
              <LinkStyle
                id="channel"
                onClick={menuClick}
                onMouseEnter={menuDrop}
                onMouseLeave={menuDrop}
                className={selectedId === 'channel' ? 'activated' : ''}
              >
                효도챌린지
              </LinkStyle>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={localStorage.getItem('userToken') ? '/user' : '/user/login'}>
              <PersonIcon id="profile" onClick={menuClick} fontSize="large" />
            </NavLink>
          </NavItem>
        </NavItems>
      </NavWrap>
    </div>
  );
};

const NavWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: lightgray;
  opacity: 0.8;
  z-index: 5;

  .activated {
    color: rgba(188, 135, 33, 1);
  }
`;

const NavTitle = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  p {
    font-size: 4.5vh;
    font-weight: bold;
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    position: absolute;
    right: 10%;
    top: 15%;
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

const LinkStyle = styled.span`
  font-size: 2.3vh;
  padding: 4px 8px;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: rgba(188, 135, 33, 1);
    transition: 0.5s;
    font-weight: bold;

    .dropMenu {
      display: flex;
      color: black;
    }
  }
`;

export default Nav;
