import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import API from '../../API';
import jwt_decode from 'jwt-decode';
import Button from '../../common/button';

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

      if (!localStorage.getItem('userId')) {
        navigate('/signup');
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
  /* border: 4px groove red; */
`;

const MainTitle = styled.div`
  width: 35%;
  font-weight: 700;
  font-size: 4vmin;
  margin: 0 0 2% 0;
  display: flex;
  justify-content: center;
  /* border: 4px groove red; */
`;

// const LoginBox = styled.div`
//   background-color: rgba(217, 217, 217, 1);
//   height: 50vh;
//   width: 50%;
//   border-radius: 20px;
//   margin: 0px 0 0 0px;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   border: 4px groove red;
// `;

const LoginForm = styled.form`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* border: 4px groove blue; */
  div {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .form-field {
      width: 80%;
      /* input {
        width: 100%;
        background-color: inherit;
        
      } */
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
  /* border: 4px groove green; */
`;

const UpperColor = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 15px 15px 0 0;
  background: rgba(242, 190, 91, 1);
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* border: 4px groove red; */

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
  /* border: 4px groove red; */

    span {
      &:hover {
        cursor: pointer;
      }
    }
`;

export default LoginPage;