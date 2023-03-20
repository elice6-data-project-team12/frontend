//마이페이지

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../../API';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function MyPage() {
//   const [userInfo, setUserInfo] = useState([]);
  const [userInfo, setUserInfo] = useState({
      user_id: '',
      name: '',
      email: '',
      phone: '',
    });
  const [currentTab, setCurrentTab] = useState('');
  const navigate = useNavigate();


//   useEffect(() => {
//     API.get('http://localhost:4000/api/user').then(res => setUserInfo(res.data));
//     // const userName = JSON.parse(userInfo).data.name
//     console.log(userInfo);
//     // console.log(userName);
//   }, []);

  useEffect(() => {
    API.get('http://localhost:4000/api/user').then(res => setUserInfo(cur => {
      return {
        ...cur,
        user_id: res.data.data.user_id,
        name: res.data.data.name,
        email: res.data.data.email,
        phone: res.data.data.phone,
      }
    }));


  }, []);

    console.log(userInfo);
    const {user_id, name, email, phone} = userInfo;


  return (
    <Container>
      <WelcomeMsg>
        <AccountIcon fontSize="large"/>
        <p>안녕하세요 {name}님, 환영합니다! </p>
      </WelcomeMsg>
      <MenuTab>
        <ul className="tabs">
          <li onMouseDown={() => setCurrentTab('myinfo')}>내 정보</li>
          <li onMouseDown={() => setCurrentTab('myplace')}>내 장소</li>
          <li onMouseDown={() => setCurrentTab('mychallenge')}>내 챌린지</li>
          <li onMouseDown={() => setCurrentTab('mypost')}>내 게시글</li>
        </ul>
      </MenuTab>
      <UserInputBox>
      {currentTab === 'myinfo' && (
        <Subtitle>
          <div>
            <p>이메일</p>
            <p>{email}</p>
          </div>
          <form>
            <div>
            <label>비밀번호</label>
            <input />
            </div>
            <button type="submit">내 정보 보기</button>
          </form>
          {/* <button onClick={myPageTest}>테스트</button> */}
        </Subtitle>
      )}
      {currentTab === 'myplace' && (
        <Subtitle>
          <p>내 장소</p>
        </Subtitle>
      )}
      {currentTab === 'mychallenge' && (
        <Subtitle>
        <p>내 챌린지</p>
        </Subtitle>
      )}
      {currentTab === 'mypost' && (
        <Subtitle>
        <p>내 게시글</p>
        </Subtitle>
      )}
      </UserInputBox>
    </Container>
  );
}

const Container = styled.div`
  margin: 15% 0 5% 0;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px groove red;
`;

const WelcomeMsg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  border: 4px groove red;
   p {
    font-weight: 500;
  }
`;

const UserInputBox = styled.div`
  width: 50%;
  height: 75vh;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 0 0 20px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const AccountIcon = styled(AccountCircleIcon)`
  color: rgba(153, 164, 151, 1);
  border: 4px groove red;
`;

const MenuTab = styled.div`
  width: 50%;
  text-align: center;
  font-weight: 600;
  border: 4px groove red;
   .tabs {
    display: flex;
     li {
      width: 100%;
      text-align: center;
      padding: 30px;
      cursor: pointer;
      background-color: rgba(217, 217, 217, 1);
      color: gray;
      border-radius: 20px 20px 0 0;
      display: flex;
      justify-content: center;
      border: 4px groove red;
      

      &:hover {
        font-weight: bold;
        border-bottom: none;
        color: black;
      }

    }
  }
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px groove red;
`;
