import styled from 'styled-components';
import { useEffect, useState } from 'react';

const CultureDetailModal = ({ infoModal }) => {
  const [selectedModalInfo, setSelectedModalInfo] = useState({});

  useEffect(() => {
    setSelectedModalInfo(infoModal.row.original);
  }, [infoModal]);

  console.log(selectedModalInfo);
  return (
    <ModalWrap>
      <div className="info">
        <div>시설명:{selectedModalInfo.fac_name}</div>
        <div>주제분류:{selectedModalInfo.subjcode}</div>
        <div>이미지 X</div>
        <div>
          주소:
          {`서울특별시 ${selectedModalInfo.district} ${selectedModalInfo.addr}`}
        </div>
        <div>전화번호: {selectedModalInfo.phne}</div>
        <div>홈페이지: {selectedModalInfo.homepage}</div>
        <div>소개: X</div>
      </div>
    </ModalWrap>
  );
};

const ModalWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eee;
  height: 600px;
  width: 600px;
  z-index: 9999;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      font-size: 20px;
    }
  }
`;

export default CultureDetailModal;
