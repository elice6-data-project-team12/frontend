//회원정보 조회 & 수정

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../../API';
import styled from 'styled-components';
import Button from '../../../common/button';

export default function MyInfoList({ datas }) {
  const navigate = useNavigate();

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
    pw.length > 7 ? setPwErr('') : setPwErr('비밀번호를 8자 이상 입력하세요.');
  };

  const emailValidation = e => {
    let email = e.target.value;
    setInputValue({ ...inputValue, email: email });
    email.includes('@') && email.includes('.')
      ? setEmailErr('')
      : setEmailErr('이메일을 확인해주세요');
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
    API.put('/api/user', inputValue)
      .then(res => {
        alert('성공');
      })
      .catch(err => {
        alert('다시 시도해 주세요.');
      });
  };

  return (
    <UserInfo>
      <ChangeInfoForm onSubmit={handleUpdateInfo}>
        <div>
          <label htmlFor="email">이메일</label>
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
    </UserInfo>
  );
}

const UserInfo = styled.div`
  width: 100%;
  height: 70vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px groove red;
`;

const ChangeInfoForm = styled.form`
  height: 100%;
  width: 100%;
  border: 4px groove pink;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  div {
    border: 4px groove blue;
    .form-field {
      width: 70%;
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
