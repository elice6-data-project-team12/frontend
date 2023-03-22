import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../API';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserInfo from './components/UserInfo';

export default function MyPage() {
//   const [userInfo, setUserInfo] = useState([]);
  const [userInfo, setUserInfo] = useState({
      user_id: '',
      name: '',
      email: '',
      phone: '',
    });
  const [currentTab, setCurrentTab] = useState('myinfo');
  const [password, setPassword] = useState('');
  const [isPasswordTrue, setIsPasswordTrue] = useState(false);
  const [myFacility, setMyFacility] = useState([]);
  const [myChallenge, setMyChallenge] = useState([]);
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

    API.get('http://localhost:4000/api/user/facility').then(res => setMyFacility(cur => {
        return res.data.data
      }));

    API.get('http://localhost:4000/api/challenge/participation').then(res => setMyChallenge(cur => {
        return res.data.data
      }));

    }, []);

    // console.log(userInfo);
    console.log(myFacility);
    console.log(myChallenge);


    const {user_id, name, email, phone} = userInfo;


    const pwHandler = e => {
        setPassword(e.target.value);
    }

    const logoutHandler = () => {
        localStorage.clear();
        alert('로그아웃 되었습니다.');
        navigate('/');
    }


    const showInfoHandler = async e => {
        e.preventDefault();
        
        try{
          const res = await API.post('http://localhost:4000/api/user/login', {
          email: email,
          password: password,
            });

          const userInfoToken = res.data.data;
          localStorage.setItem('userInfoToken', userInfoToken);

          if (localStorage.getItem('userInfoToken')) {
                setIsPasswordTrue(true)
              }

        } catch (err) {
            if (password.length === 0) {
                alert('패스워드를 입력해주세요.');
              } else {
                alert('패스워드를 확인해주세요.');
              }
        }
    }


  return (
    <Container>
      <WelcomeMsg>
        <AccountIcon fontSize="large"/>
        <p>안녕하세요 {name}님, 환영합니다! </p>
        <button onClick={logoutHandler}> &gt; 로그아웃 </button>
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
        isPasswordTrue ? <UserInfo datas={userInfo}/> : 
        <div>
        <div>
          <p>이메일</p>
          <p>{email}</p>
        </div>
        <form onSubmit={showInfoHandler}>
          <div>
            <label>비밀번호</label>
            <input onChange={pwHandler} type="password"/>
          </div>
          <button type="submit">내 정보 보기</button>
        </form>
      </div>
      )}
      {currentTab === 'myplace' && (
        myFacility.map((i, idx) => {
            return (
              <div key={idx}>
                  <p>{i.fac_name}</p>
                  <p>{i.district}</p>
                  <img src={i.main_img} alt={i.fac_name}/>
              </div>
            )
          })
      )}
      {currentTab === 'mychallenge' && (
        myChallenge.map((i, idx) => {
            return (
              <div key={idx}>
                  <img src={i.image} alt={i.title}/>
                  <p>{i.challenge_id}</p>
                  <p>{i.title}</p>
                  <p>{i.description}</p>
                  <p>{i.content}</p>
              </div>
            )
          })
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
