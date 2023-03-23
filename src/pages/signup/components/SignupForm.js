import React, { useState } from 'react';
import API from '../../../API';
import { useNavigate } from 'react-router-dom';
import Button from '../../../common/button';
import styled from 'styled-components';

function SignupForm() {
    const [emailErr, setEmailErr] = useState('');
    const [pwErr, setPwErr] = useState('');
    const [confirmPwErr, setConfirmPwErr] = useState('');
  
    const navigate = useNavigate();
  
    const [inputValue, setInputValue] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
    });

    const { name, email, password, confirmPassword, phone } =
      inputValue;
  
    const activateButton =
      name.length >= 2 &&
      password.length > 7 &&
      confirmPassword === password &&
      email.includes('@' && '.') &&
      phone.length >= 1;
  
    const emailValidation = e => {
      let email = e.target.value;
      setInputValue({ ...inputValue, email: email });
      email.includes('@') && email.includes('.')
        ? setEmailErr('')
        : setEmailErr('이메일이 올바르지 않습니다');
    };
  
    const pwValidation = e => {
      let pw = e.target.value;
      setInputValue({ ...inputValue, password: pw });
      pw.length > 7 ? setPwErr('') : setPwErr('비밀번호를 8자 이상 입력하세요.');
    };
  
    const confirmPwValidation = e => {
      let confirmPw = e.target.value;
      setInputValue({ ...inputValue, confirmPassword: confirmPw });
      confirmPw === password
        ? setConfirmPwErr('')
        : setConfirmPwErr('비밀번호가 일치하지 않습니다.');
    };
  
    const inputhandler = e => {
      const { name, value } = e.target;
      setInputValue({
        ...inputValue,
        [name]: value,
      });
    };
  
    const handleSignup = e => {
      e.preventDefault();
      API.post('/api/user/signup', {
        email: email,
        name: name,
        password: password,
        phone: phone,
      })
        .then(res => {
          alert('가입완료!');
          navigate('/user/login');
        })
        .catch(error => {
          console.log(error.response.data.err);
        });
    };
  
    return (
      <Signup onSubmit={handleSignup}>
        <div>
          <label htmlFor="name">이름</label>
          <div className="form-field">
            <Input
              required
              id="name"
              type="text"
              name="name"
              onChange={inputhandler}
              placeholder="엘리스"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <div className="form-field">
            <Input
              required
              id="email"
              type="email"
              name="email"
              onChange={emailValidation}
              onBlur={() => {
                setEmailErr('');
              }}
              placeholder="abc@elice.com"
            />
            {emailErr && <p className="error-msg">{emailErr}</p>}
          </div>
        </div>
  
        <div>
          <label htmlFor="password">비밀번호</label>
          <div className="form-field">
            <Input
              required
              id="password"
              type="password"
              name="password"
              onBlur={() => {
                setPwErr('');
              }}
              onChange={pwValidation}
            />
            {pwErr && <p className="error-msg">{pwErr}</p>}
          </div>
        </div>
  
        <div>
          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <div className="form-field">
            <Input
              required
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              onBlur={() => {
                setConfirmPwErr('');
              }}
              onChange={confirmPwValidation}
            />
            {confirmPwErr && <p className="error-msg">{confirmPwErr}</p>}
          </div>
        </div>
  
        <div>
          <label htmlFor="phone">휴대폰</label>
          <div className="form-field">
            <Input
              required
              id="phone"
              type="text"
              name="phone"
              onChange={inputhandler}
              placeholder="휴대폰번호를 입력해주세요"
            />
          </div>
        </div>
        <Button title="회원가입" disabled={!activateButton} type="submit">
          이메일로 회원가입하기
        </Button>
      </Signup>
    );
  }

  const Signup = styled.form`
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


  export default SignupForm;