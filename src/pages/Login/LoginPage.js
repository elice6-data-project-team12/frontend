import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import API from '../../API';
import jwt_decode from 'jwt-decode';
import Button from '../../common/button';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { changeLogin } from 'store.js';

const dispatch = useDispatch();

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onEmailHandler = e => {
    setEmail(e.target.value);
  };

  const onPasswordHandler = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await API.post('/api/user/login', {
        email: email,
        password: password,
      });
      const token = res.data.data;
      localStorage.setItem('userToken', token);

      const decodedToken = jwt_decode(token);
      localStorage.setItem('decodedToken', JSON.stringify(decodedToken));

      localStorage.setItem('userId', decodedToken.userId);

      dispatch(changeLogin(token));

      if (!localStorage.getItem('userId')) {
        navigate('/signup');
      }
      navigate('/');
  
    } catch (err) {
      setErrModalOpen(true);
    }
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
  const handleErrModalOpen = () => setErrModalOpen(true);
  const handleErrModalClose = () => {
    setErrModalOpen(false);
  };


  return (
    <Container sx={{ 
      bgcolor: 'white', 
      height: 'max-content', 
      maxWidth: '1200px',
      marginTop: '10%',
      marginBottom: '5%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      }}>
      <MainTitle>로그인</MainTitle>
      <LoginBox>
        <UpperColor><p>이메일로 로그인</p></UpperColor>
        <TextBox>
        <LoginForm onSubmit={handleSubmit}>
          <div>
            <label>이메일</label>
            <div className="form-field">
              <Input
                type="email"
                placeholder="EMAIL"
                onChange={onEmailHandler}
              />
            </div>
          </div>
          <div>
            <label>패스워드</label>
            <div className="form-field">
              <Input
                type="password"
                placeholder="PASSWORD"
                onChange={onPasswordHandler}
              />
            </div>
          </div>
          <Button title="로그인" type="submit">로그인하기</Button>
        </LoginForm>
          <span onClick={()=> navigate('/user/signup')}> &gt; 회원가입하러 가기</span>
        </TextBox>
      </LoginBox>
      <Modal
        open={errModalOpen}
        onClose={handleErrModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            로그인 실패
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            회원정보를 확인해 주세요.
          </Typography>
          <Button style={{margin: '20px 0 0 0'}} onClick={handleErrModalClose}>확인</Button>
        </Box>
      </Modal>
    </Container>
  );
}


const MainTitle = styled.div`
  width: 35%;
  font-weight: 700;
  font-size: 4vmin;
  margin: 0 0 2% 0;
  display: flex;
  justify-content: center;
`;


const LoginForm = styled.form`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  div {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .form-field {
      width: 80%;
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

const LoginBox = styled.div`
  height: 50vh;
  width: 50%;
  text-align: center;
  border-radius: 15px;
  background: rgba(236, 233, 233, 1);
`;

const UpperColor = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 15px 15px 0 0;
  background: rgba(242, 190, 91, 1);
  display: flex;
  justify-content: center;
  flex-direction: column;

    p {
      font-size: 15px;
      font-weight: 600;
    }
`;

const TextBox = styled.div`
  height: 87%;
  width: 100%;
  border-radius: 0 0 15px 15px;
  margin: 0px 0 0 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

    span {
      &:hover {
        cursor: pointer;
      }
    }
`;

export default LoginPage;