import React, { useState } from 'react';
import API from '../../../API';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../../common/button';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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

    const { name, email, password, phone } =
      inputValue;
  
    // const activateButton =
    //   name.length >= 2 &&
    //   password.length > 7 &&
    //   confirmPassword === password &&
    //   email.includes('@' && '.') &&
    //   phone.length >= 1;
  
    const emailValidation = e => {
      let email = e.target.value;
      setInputValue({ ...inputValue, email: email });
      email.includes('@') && email.includes('.')
        ? setEmailErr('')
        : setEmailErr('! 이메일이 올바르지 않습니다.');
    };
  
    const pwValidation = e => {
      let pw = e.target.value;
      setInputValue({ ...inputValue, password: pw });
      pw.length > 7 ? setPwErr('') : setPwErr('! 영문, 숫자 포함 8자~16자');
    };
  
    const confirmPwValidation = e => {
      let confirmPw = e.target.value;
      setInputValue({ ...inputValue, confirmPassword: confirmPw });
      confirmPw === password
        ? setConfirmPwErr('')
        : setConfirmPwErr('! 비밀번호가 일치하지 않습니다.');
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
          // alert('가입완료!');
          setConfirmModalOpen(true);
        })
        .catch(error => {
          // alert('입력하신 정보를 확인해 주세요.');
          setErrModalOpen(true);

        });
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

    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const handleConfirmModalOpen = () => setConfirmModalOpen(true);
    const handleConfirmModalClose = () => {
      setConfirmModalOpen(false);
      navigate('/user/login');
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
              placeholder="010-0000-0000"
            />
          </div>
        </div>
        <Button title="회원가입" 
        // disabled={!activateButton} 
        type="submit">
          이메일로 회원가입하기
        </Button>
        <Link className="link-to-login" to="/user/login">
          {'>'} 로그인하러 가기
        </Link>
        <Link className="link-to-home" to="/">
          {'>'} 홈으로 이동
        </Link>
        <Modal
        open={errModalOpen}
        onClose={handleErrModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            회원가입 실패
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            입력하신 정보를 확인해 주세요.
          </Typography>
          <Button style={{margin: '20px 0 0 0'}} onClick={handleErrModalClose}>확인</Button>
        </Box>
      </Modal>
      <Modal
        open={confirmModalOpen}
        onClose={handleConfirmModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            가입 완료!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            효도리의 회원이 되신 것을 환영합니다.
          </Typography>
          <Button onClick={handleConfirmModalClose}>확인</Button>
        </Box>
      </Modal>
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
      div {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      .form-field {
        width: 80%;
        display: flex;
        flex-direction: column;
      }
    }

    .error-msg {
    color: red;
    font-size: 10px;
    padding-top: 5px;
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