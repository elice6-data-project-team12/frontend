import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SignupForm from './components/SignupForm';

function SignupPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <MainTitle>회원가입</MainTitle>
      <SignupBox>
        <UpperColor>
          <p>이메일로 회원가입</p>
        </UpperColor>
        <TextBox>
          <SignupForm />
          <Link className="link-to-login" to="/user/login">
            {'>'} 로그인하러 가기
          </Link>
          <Link className="link-to-home" to="/">
            {'>'} 홈으로 이동
          </Link>
        </TextBox>
      </SignupBox>
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
`;

const MainTitle = styled.div`
  width: 35%;
  font-weight: 700;
  font-size: 4vmin;
  margin: 0 0 2% 0;
  display: flex;
  justify-content: center;
`;

const SignupBox = styled.div`
  height: 80vh;
  width: 50%;
  text-align: center;
  border-radius: 15px;
  background: rgba(236, 233, 233, 1);

  .error-msg {
    color: red;
    font-size: 12px;
    padding-top: 0px;
  }
  form {
    height: 75%;
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
  }

  .link-to-login,
  .link-to-home {
    font-size: 15px;
    margin: 10px 0 0 0;
  }
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

  span {
    &:hover {
      cursor: pointer;
    }
  }
`;

export default SignupPage;
