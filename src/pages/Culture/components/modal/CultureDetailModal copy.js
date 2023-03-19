import styled from 'styled-components';
import { useEffect, useState } from 'react';

const CultureDetailModal = ({
  infoModal,
  showModal,
  children,
  className,
  onClose,
  maskClosable,
  closable,
}) => {
  const [selectedModalInfo, setSelectedModalInfo] = useState({});

  useEffect(() => {
    setSelectedModalInfo(infoModal.row.original);
  }, [infoModal]);

  const onMaskClick = e => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = e => {
    if (onClose) {
      onClose(e);
    }
  };
  console.log(selectedModalInfo);
  return (
    <>
      <ModalOverlay visible={showModal} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={showModal}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          {closable && (
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
              <button className="modal-close" onClick={close}>
                닫기
              </button>
            </div>
          )}
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

CultureDetailModal.defaultProps = {
  closable: true,
  maskClosable: true,
  visible: false,
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 600px;
  max-width: 700px;
  height: 600px;
  max-height: 700px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

export default CultureDetailModal;
