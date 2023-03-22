//회원정보 조회 & 수정

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../../API';
import styled from 'styled-components';

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
    API.put('/api/user', inputValue).then(res => {
      alert('성공');
      })
      .catch(err => {
        alert('다시 시도해 주세요.');
        console.log(err)
      });
    console.log(inputValue);

  };


  return (
    <div>
      <div>
        <form onSubmit={handleUpdateInfo}>
          <div>
            <label htmlFor="email">이메일</label>
            <div className="form-field">
              <input
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
              <input
                required
                id="password"
                type="password"
                name="password"
                value={inputValue.password}
                onChange={pwValidation}
                onBlur={() => {
                  pwErr('');
                }}
              />
              {pwErr && <p className="error-msg">{pwErr}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="name">이름</label>
            <div className="form-field">
              <input
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
              <input
                required
                id="contact"
                type="text"
                name="phone"
                value={inputValue.phone}
                onChange={inputhandler}
              />
            </div>
          </div>
          <button type="submit">변경사항 저장하기</button>
        </form>
      </div>
    </div>
  );
}
