import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SignupForm from './components/SignupForm'


function SignupPage() {

    const navigate = useNavigate();

    return(
    <Container>
      <MainTitle>
        <span>회원가입</span>
      </MainTitle>
      <UserInputBox>
      <SignupForm />
        <button
          onClick={() => {
            navigate('/user/login');
          }}
        >
          로그인하러 가기
        </button>
        <Link className="link-to-home" to="/">
          {'>'} 홈으로 이동
        </Link>
      </UserInputBox>
    </Container>
    )
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

const UserInputBox = styled.div`
  width: 50%;
  height: 75vh;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .error-msg {
    color: red;
    font-size: 12px;
    padding-top: 0px;
    border: 4px groove red;
  }
  form {
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 4px groove red;
     div {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 4px groove red;
       .form-field {
        width: 70%;
         input {
          width: 100%;
          background-color: inherit;
        }
      }
    }
  }
`;


export default SignupPage;