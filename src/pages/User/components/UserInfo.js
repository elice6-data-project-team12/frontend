//회원정보 조회 & 수정

import { useState } from 'react';
import API from '../../../API';
import styled from 'styled-components';
import Button from '../../../common/button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function MyInfoList({ datas }) {

  const [emailErr, setEmailErr] = useState('');
  const [pwErr, setPwErr] = useState('');
  const [inputValue, setInputValue] = useState({
    email: datas.email,
    password: '',
    name: datas.name,
    phone: datas.phone,
  });

  const pwValidation = e => {
    let pw = e.target.value;
    setInputValue({ ...inputValue, password: pw });
    pw.length > 7 ? setPwErr('') : setPwErr('! 영문, 숫자 포함 8자~16자');
  };

  const emailValidation = e => {
    let email = e.target.value;
    setInputValue({ ...inputValue, email: email });
    email.includes('@') && email.includes('.')
      ? setEmailErr('')
      : setEmailErr('! 이메일이 올바르지 않습니다.');
  };

  const inputhandler = e => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  // 회원정보 업데이트
  const handleUpdateInfo = e => {
    e.preventDefault();
    API.put('/api/user', inputValue).then(res => {
      setConfirm('회원정보를 변경했습니다.');
      setConfirmModalOpen(true);
      })
      .catch(err => {
        setConfirm('회원정보 변경에 실패했습니다.');
        setConfirmModalOpen(true);
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


  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [confirm, setConfirm] = useState('');
  const handleConfirmModalOpen = () => setConfirmModalOpen(true);
  const handleConfirmModalClose = () => {
    setConfirmModalOpen(false);
    window.location.replace('/user');
  };

  return (
    <UserInfo>
        <ChangeInfoForm onSubmit={handleUpdateInfo}>
          <div>
            <label className="label" htmlFor="email">이메일</label>
            <div className="form-field">
              <Input
                required
                id="email"
                type="email"
                name="email"
                value={inputValue.email}
                onChange={emailValidation}
                onBlur={() => {
                  setEmailErr('');
                }}
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
                value={inputValue.password}
                onChange={pwValidation}
                onBlur={() => {
                  setPwErr('');
                }}
              />
              {pwErr && <p className="error-msg">{pwErr}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="name">이름</label>
            <div className="form-field">
              <Input
                required
                id="name"
                type="text"
                name="name"
                value={inputValue.name}
                onChange={inputhandler}
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact">연락처</label>
            <div className="form-field">
              <Input
                required
                id="contact"
                type="text"
                name="phone"
                value={inputValue.phone}
                onChange={inputhandler}
              />
            </div>
          </div>
          <Button type="submit">변경사항 저장하기</Button>
        </ChangeInfoForm>
        <Modal
        open={confirmModalOpen}
        onClose={handleConfirmModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={modalStyle}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {confirm}
          </Typography>
          <Button style={{margin: '20px 0 0 0'}} onClick={handleConfirmModalClose}>확인</Button>
        </Box>
      </Modal>
    </UserInfo>
  );
}

const UserInfo = styled.div`
  width: 100%;
  height: 50vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChangeInfoForm = styled.form`
height: 100%;
width: 75%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  .form-field {
    width: 70%;
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