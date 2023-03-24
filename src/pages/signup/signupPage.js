import React from 'react';
import styled from 'styled-components';
import SignupForm from './components/SignupForm'
import Container from '@mui/material/Container';


function SignupPage() {

    return(
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
      <MainTitle>
        회원가입
      </MainTitle>
      <SignupBox>
        <UpperColor><p>이메일로 회원가입</p></UpperColor>
        <TextBox>
      <SignupForm />
        </TextBox>
      </SignupBox>
    </Container>
    )
}


const MainTitle = styled.div`
  width: 35%;
  font-weight: 700;
  font-size: 4vmin;
  margin: 0 0 2% 0;
  display: flex;
  justify-content: center;
`;

const SignupBox = styled.div`
  height: 75vh;
  width: 50%;
  text-align: center;
  border-radius: 15px;
  background: rgba(236, 233, 233, 1);

  .error-msg {
    color: red;
    font-size: 12px;
    padding-top: 5px;
  }

  form {
    height: 85%;
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
        width: 70%;
         input {
          width: 100%;
          background-color: inherit;
        }
      }
    }
  }

  .link-to-login, .link-to-home{
    font-size: 15px;
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