import { useState } from 'react';
import styled from 'styled-components';
import CultureMap from './components/map/CultureMap';
import SelectedFilter from './components/filter/SelectedFilter';
import CultureTable from './components/table/CultureTable';
import CultureDetailModal from './components/modal/CultureDetailModal';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import AlertBox from 'common/AlertBox';

//주제분류 아이콘
import {
  ico_picker01_on,
  ico_picker02_on,
  ico_picker03_on,
  ico_picker04_on,
  ico_picker05_on,
  ico_picker06_on,
  ico_picker07_on,
} from 'assets/images/index.js';

const CulturePage = () => {
  // filter 적용할 객체 state
  const [filterObj, setFilterObj] = useState({
    reset: false,
    all: false,
    searchName: '',
    filterState: {
      addr: '',
      subject: '',
    },
  });

  // 지도 아이콘 state
  const [icons, setIcons] = useState([
    { img: ico_picker01_on, value: '공연장', name: 'subject' },
    { img: ico_picker02_on, value: '미술관', name: 'subject' },
    { img: ico_picker03_on, value: '박물관/기념관', name: 'subject' },
    { img: ico_picker04_on, value: '도서관', name: 'subject' },
    { img: ico_picker05_on, value: '문화예술회관', name: 'subject' },
    { img: ico_picker06_on, value: '문화원', name: 'subject' },
    { img: ico_picker07_on, value: '기타', name: 'subject' },
  ]);

  // 상세정보 모달 show state
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  // 상세정보 모달 info state
  const [infoModal, setInfoModal] = useState(null);

  //Alert open state
  const [isOpenAlert, setIsOpenAlert] = useState({
    open: false,
    type: 'error',
    message: 'Alert 메세지를 입력 하세요.',
  });
  return (
    <Container fixed sx={{ mt: '100px' }}>
      <AlertBox isOpenAlert={isOpenAlert} setIsOpenAlert={setIsOpenAlert} />

      <Box
        sx={{
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SectionHeader>
          <div className="section-inner">
            <div className="title-area">
              <h1 className="title-h1">
                문화여가 · 시설
                <span className="txt">
                  서울시 자역별 다양한 문화관련 시설들을 공유합니다
                </span>
              </h1>
            </div>
          </div>
        </SectionHeader>
      </Box>
      <Box>
        {showModal && (
          <CultureDetailModal
            showModal={showModal}
            closable={true}
            maskClosable={true}
            infoModal={infoModal}
            onClose={closeModal}
            setIsOpenAlert={setIsOpenAlert}
          />
        )}

        <SectionMap>
          <Paper
            elevation={3}
            sx={{
              height: '600px',
              display: 'flex',
              justifyContent: 'center',
              border: '5px solid #f2be5b',
              overflow: 'hidden',
              borderRadius: '70px',
            }}
          >
            <SelectedFilter
              filterObj={filterObj}
              setFilterObj={setFilterObj}
              icons={icons}
            />
            <CultureMap
              filterObj={filterObj}
              icons={icons}
              showModal={showModal}
              setShowModal={setShowModal}
              setInfoModal={setInfoModal}
              setIsOpenAlert={setIsOpenAlert}
            />
          </Paper>
        </SectionMap>
      </Box>
      <Box sx={{ mt: '20px' }}>
        <CultureTable
          showModal={showModal}
          setShowModal={setShowModal}
          setInfoModal={setInfoModal}
          setIsOpenAlert={setIsOpenAlert}
        />
      </Box>
    </Container>
  );
};

// content의 header
const SectionHeader = styled.div`
  height: 95px;
  .section-inner {
    padding: 0 23px;
    margin: 0 auto;
    position: relative;
    vertical-align: top;
    .title-area {
      margin-top: 2px;
      margin-bottom: 32px;
      text-align: center;
      margin: 0;
      padding: 0;
      vertical-align: top;
      word-break: keep-all;
      text-decoration: none;
    }

    .title-h1 {
      height: 97px;
      font-size: 48px;
      font-weight: 700;
      letter-spacing: -1.2px;
      line-height: 40px;
      .txt {
        height: 32px;
        margin: 25px 0 0 0;
        display: flex;
        font-size: 18px;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

// 문화여가시설
const SectionMap = styled.div``;

const AreaFacility = styled.div`
  height: 600px;
  display: flex;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  border: 5px solid #f2be5b;
  overflow: hidden;
  border-radius: 70px;
`;

export default CulturePage;
