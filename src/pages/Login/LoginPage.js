import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import API from '../../API';
import jwt_decode from 'jwt-decode';

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
        email,
        password,
      });
      const user = res.data;
      const jwtToken = user.token;
      localStorage.setItem('userToken', jwtToken);
      const decodedJwt = jwt_decode(jwtToken);
      localStorage.setItem('userData', JSON.stringify(decodedJwt));
      if (!localStorage.getItem('userData')){
        navigate('/signup')
      }
      navigate('/');
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <Container>
      <MainTitle>로그인</MainTitle>
      <LoginBox>
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
            <button title="로그인" type="submit" padding="100px">
              로그인
            </button>
        </LoginForm>
      </LoginBox>
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

const MainTitle = styled.div`
  width: 35%;
  font-weight: 600;
  font-size: 25px;
  display: flex;
  justify-content: center;
  border: 4px groove red;
`;


const LoginBox = styled.div`
  background-color: rgba(217, 217, 217, 1);
  height: 50vh;
  width: 50%;
  border-radius: 20px;
  margin: 0px 0 0 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 4px groove red;
/* 
  form {
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
     div {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
       .form-field {
        width: 70%;
         input {
          width: 100%;
          background-color: inherit;
        }
      }
    }
  } */
`;

const LoginForm = styled.form`
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 4px groove blue;
     div {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 4px groove red;
       .form-field {
        width: 80%;
         input {
          width: 100%;
          background-color: inherit;
        }
      }
    }
`;

const Input = styled.input`
  width: 100%;
  background-color: inherit;
  border: 4px groove red;
`;

export default LoginPage;
