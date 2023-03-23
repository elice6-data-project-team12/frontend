import styled from 'styled-components';
import { useEffect, useState } from 'react';
import API from 'API';
import Chip from '@mui/material/Chip';
import BookMarkButton from 'common/BookMarkButton';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
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
    API.get(`/api/facility/${infoModal}`)
      .then(Response => {
        setSelectedModalInfo(Response.data.data);
      })
      .catch(Error => {
        console.log(Error);
      });
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
          <ModalHeader>
            <div className="imgWrap">
              <img src={selectedModalInfo.main_img} alt="시설이미지" />
            </div>
            <div className="screen"></div>
            <div className="infoWrap">
              <div className="info-title">{selectedModalInfo.fac_name}</div>

              <Chip
                sx={{ bgcolor: '#F2BE5B', margin: '10px 0', fontSize: '12px' }}
                label={selectedModalInfo.subjcode}
              />
              <BookMarkButton info={selectedModalInfo.facility_id} />
              <div className="block"></div>
              <div className="info-body">
                <div className="info-icon">
                  <FmdGoodIcon />
                  <span>{`서울특별시 ${selectedModalInfo.district} ${selectedModalInfo.addr}`}</span>
                </div>
                <div className="info-icon">
                  <LocalPhoneIcon />
                  <span>{selectedModalInfo.phne}</span>
                </div>
                <div className="info-icon">
                  <a href={selectedModalInfo.homepage}>
                    <div className="info-link">
                      <HomeIcon />
                      <span>공식 홈페이지</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="body-header">소개</div>
            <div className="body-content">{selectedModalInfo.fac_desc}</div>
          </ModalBody>
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
  border-radius: 20px;
  width: 600px;
  max-width: 700px;
  height: 700px;
  max-height: 700px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
`;

const ModalHeader = styled.div`
  height: 280px;
  max-height: 300px;
  border-bottom: 5px solid #f2be5b;
  background-color: #ece9e9;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  padding: 20px;

  .imgWrap {
    width: 47%;
    height: 100%;
    padding: 5%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .screen {
    width: 1%;
    height: 100%;
    background-color: #909090;
    border-radius: 7px;
  }
  .infoWrap {
    width: 50%;
    height: 100%;
    padding-top: 5%;
    padding-bottom: 4%;
    padding-left: 1%;
    padding-right: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .block {
      height: 10px;
    }

    .info-title {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 900;
      font-size: 16px;
      line-height: 25px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: -0.1em;
      color: #000000;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .info-body {
      display: flex;
      flex-direction: column;
      .info-icon {
        display: flex;
        align-items: center;
        margin-top: 7px;
        span {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          letter-spacing: -0.1em;
          margin-left: 5px;
        }
        .info-link {
          display: flex;
          align-items: center;
          &:hover {
            color: #f2be5b;
          }
        }
      }
    }
  }
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 420px;

  .body-header {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: -0.1em;
    padding: 30px;
    padding-bottom: 5px;
    height: 20%;
  }

  .body-content {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    line-height: 30px;
    font-size: 14px;
    padding: 30px;
    padding-top: 0%;
    height: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    text-align: justify;
    color: grey;
  }
`;

export default CultureDetailModal;
