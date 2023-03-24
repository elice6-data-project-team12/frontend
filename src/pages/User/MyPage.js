import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../API';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserInfo from './components/UserInfo';
import Button from '../../common/button';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { changeLogout } from 'store.js';

export default function MyPage() {
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
  const [visiblePlace, setVisiblePlace] = useState(3);
  const [visibleChallenge, setVisibleChallenge] = useState(2);
  const navigate = useNavigate();

  const selectTabHandler = e => setCurrentTab(e.target.id);

  const dispatch = useDispatch();

  useEffect(() => {
    API.get('/api/user').then(res =>
      setUserInfo(cur => {
        return {
          ...cur,
          user_id: res.data.data.user_id,
          name: res.data.data.name,
          email: res.data.data.email,
          phone: res.data.data.phone,
        };
      })
    );

    API.get('/api/user/facility').then(res =>
      setMyFacility(cur => {
        return res.data.data;
      })
    );

    API.get('/api/challenge/participation').then(res =>
      setMyChallenge(cur => {
        return res.data.data;
      })
    );
  }, []);

  const { name, email } = userInfo;

  const pwHandler = e => {
    setPassword(e.target.value);
  };

  const logoutHandler = () => {
    dispatch(changeLogout());
    setLogoutModalOpen(true);
  };

  const showInfoHandler = async e => {
    e.preventDefault();

    try {
      const res = await API.post('/api/user/login', {
        email: email,
        password: password,
      });

      const userInfoToken = res.data.data;
      localStorage.setItem('userInfoToken', userInfoToken);

      if (localStorage.getItem('userInfoToken')) {
        setIsPasswordTrue(true);
      }
    } catch (err) {
      if (password.length === 0) {
        setPwErr('패스워드를 입력해주세요.');
        setErrModalOpen(true);
      } else {
        setPwErr('패스워드를 확인해주세요.');
        setErrModalOpen(true);
      }
    }
  };

  const handleShowPlaceMore = () => {
    setVisiblePlace(visiblePlace + 3);
  };

  const handleShowChallengeMore = () => {
    setVisibleChallenge(visibleChallenge + 2);
  };

  //모달
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '15px',
    boxShadow: 20,
    p: 4,
  };

  const [errModalOpen, setErrModalOpen] = useState(false);
  const [pwErr, setPwErr] = useState('');
  const handleErrModalOpen = () => setErrModalOpen(true);
  const handleErrModalClose = () => {
    setErrModalOpen(false);
  };

  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const handleLogoutModalOpen = () => setLogoutModalOpen(true);
  const handleLogoutModalClose = e => {
    setLogoutModalOpen(false);
    if (e.target.id === 'confirm') {
      localStorage.clear();
      navigate('/');
    }
  };

  return (
    <Container
      sx={{
        bgcolor: 'white',
        height: 'max-content',
        maxWidth: '1200px',
        marginTop: '10%',
        marginBottom: '5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <WelcomeMsg>
        <AccountCircleIcon
          sx={{
            height: '12vh',
            width: '12vh',
            color: 'gray',
          }}
        />
        <p>{name}님의 정보</p>
        <span onClick={logoutHandler}> &gt; 로그아웃</span>
      </WelcomeMsg>
      <MenuTab>
        <ul className="tabs">
          <li
            id="myinfo"
            onClick={selectTabHandler}
            className={currentTab === 'myinfo' ? 'activated' : ''}
          >
            내 정보
          </li>
          <li
            id="myplace"
            onClick={selectTabHandler}
            className={currentTab === 'myplace' ? 'activated' : ''}
          >
            내 장소
          </li>
          <li
            id="mychallenge"
            onClick={selectTabHandler}
            className={currentTab === 'mychallenge' ? 'activated' : ''}
          >
            내 챌린지
          </li>
        </ul>
      </MenuTab>
      <UserInputBox>
        {currentTab === 'myinfo' &&
          (isPasswordTrue ? (
            <UserInfo datas={userInfo} />
          ) : (
            <CheckUserForm onSubmit={showInfoHandler}>
              <div>
                <label htmlFor="email">이메일</label>
                <div>{email}</div>
              </div>
              <div>
                <label htmlFor="password">비밀번호</label>
                <div className="form-field">
                  <Input onChange={pwHandler} type="password" />
                </div>
              </div>
              <Button title="내 정보 보기" type="submit">
                내 정보 보기
              </Button>
            </CheckUserForm>
          ))}
        {currentTab === 'myplace' &&
          (myFacility.length === 0 ? (
            <div>북마크한 장소가 없습니다.</div>
          ) : (
            myFacility.slice(0, visiblePlace).map((i, idx) => {
              return (
                <MyPlaceList key={idx}>
                  <img src={i.main_img} alt={i.fac_name} />
                  <div>
                    <p>{i.fac_name}</p>
                    <p>{i.district}</p>
                  </div>
                  <Button
                    onClick={e => {
                      e.preventDefault();
                      API.delete(`/api/user/facility/${i.facility_id}`)
                        .then(res => {
                          const newList = myFacility;
                          const datas = newList.filter(
                            list => list.facility_id !== i.facility_id
                          );
                          return setMyFacility(datas);
                        })
                        .catch(err => {
                          alert('실패');
                        });
                    }}
                  >
                    삭제
                  </Button>
                </MyPlaceList>
              );
            })
          ))}
        {currentTab === 'myplace' && visiblePlace < myFacility.length && (
          <Button onClick={handleShowPlaceMore}>더 보기</Button>
        )}
        {currentTab === 'mychallenge' &&
          (myChallenge.length === 0 ? (
            <div>참여중인 챌린지가 없습니다.</div>
          ) : (
            myChallenge.slice(0, visibleChallenge).map((i, idx) => {
              return (
                <MyChallengeList key={idx}>
                  <img
                    src={i.image}
                    alt={i.title}
                    onClick={() =>
                      navigate(`/challenge/detail/${i.challenge_id}`)
                    }
                  />
                  <div>
                    <p
                      className="link-to-challenge"
                      onClick={() =>
                        navigate(`/challenge/detail/${i.challenge_id}`)
                      }
                    >
                      {i.title}
                    </p>
                    <p>{i.description}</p>
                    <p>
                      {i.recruit_start} ~ {i.recruit_end}
                    </p>
                    <p>
                      {i.progress_start} ~ {i.progress_end}
                    </p>
                  </div>
                </MyChallengeList>
              );
            })
          ))}
        {currentTab === 'mychallenge' &&
          visibleChallenge < myChallenge.length && (
            <Button onClick={handleShowChallengeMore}>더 보기</Button>
          )}
      </UserInputBox>
      <Modal
        open={errModalOpen}
        onClose={handleErrModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {pwErr}
          </Typography>
          <Button
            style={{ margin: '20px 0 0 0' }}
            onClick={handleErrModalClose}
          >
            확인
          </Button>
        </Box>
      </Modal>
      <Modal
        open={logoutModalOpen}
        onClose={handleLogoutModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            로그아웃 하시겠습니까?
          </Typography>
          <Button
            id="confirm"
            style={{ margin: '20px 10px 0 0' }}
            onClick={handleLogoutModalClose}
          >
            확인
          </Button>
          <Button
            id="cancel"
            style={{ margin: '20px 0 0 0' }}
            onClick={handleLogoutModalClose}
          >
            취소
          </Button>
        </Box>
      </Modal>
    </Container>
  );
}

const WelcomeMsg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: max-content;
  p {
    font-weight: 600;
    font-size: 20px;
    margin: 10px 0 10px 0;
  }
  span {
    font-size: 15px;
    margin: 0 0 10px 0;
  }

  span {
    &:hover {
      cursor: pointer;
    }
  }
`;

const UserInputBox = styled.div`
  width: 50%;
  height: max-content;
  background-color: rgba(236, 233, 233, 1);
  border-radius: 0 0 20px 20px;
  display: flex;
  padding: 5% 0 5% 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const CheckUserForm = styled.form`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  font-size: 15px;
  div {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 4px groove pink; */
    .form-field {
      width: 70%;
      margin: 30px 0 30px 0;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 15px;
  background-color: inherit;
  border: 2px solid #757575;
  outline: none;
`;

const MenuTab = styled.div`
  width: 50%;
  text-align: center;
  font-weight: 600;
  /* border: 4px groove red; */
  .tabs {
    display: flex;
    li {
      width: 100%;
      text-align: center;
      padding: 30px;
      cursor: pointer;
      background-color: rgba(236, 233, 233, 1);
      color: gray;
      border-radius: 20px 20px 0 0;
      display: flex;
      justify-content: center;

      &:hover {
        font-weight: bold;
        color: black;
        transition: 0.2s;
      }
    }

    .activated {
      color: black;
      font-weight: bold;
      background-color: rgba(242, 190, 91, 1);
    }
  }
`;

const MyPlaceList = styled.div`
  margin: 0 0 2% 0;
  width: 90%;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid gray;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;

  img {
    width: 10vmin;
    height: 10vmin;
  }

  div {
    width: 55%;
    display: flex;
    justify-content: space-between;
  }

  p {
    /* border: 4px groove pink; */
  }
`;

const MyChallengeList = styled.div`
  margin: 0 0 3% 0;
  width: 90%;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* border: 4px groove red; */

  img {
    width: 14vmin;
    height: 14vmin;
    padding: 10px;

    &:hover {
      cursor: pointer;
    }
  }

  div {
    width: 80%;
    padding: 10px;
    border: 1px solid gray;
    border-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .link-to-challenge {
    font-size: 15px;
    font-weight: 600;
    &:hover {
      cursor: pointer;
    }
  }
`;
