import { useState } from 'react';
import styled from 'styled-components';
import CultureMap from './components/map/CultureMap';
import SelectedFilter from './components/filter/SelectedFilter';
import CultureTable from './components/table/CultureTable';

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
    filterState: {
      addr: '',
      subject: '',
    },
  });

  // 지도 아이콘 state
  const [icons, setIcons] = useState([
    { img: ico_picker01_on, value: '공연장' },
    { img: ico_picker02_on, value: '미술관' },
    { img: ico_picker03_on, value: '박물관/기념관' },
    { img: ico_picker04_on, value: '도서관' },
    { img: ico_picker05_on, value: '문화예술회관' },
    { img: ico_picker06_on, value: '문화원' },
    { img: ico_picker07_on, value: '기타' },
  ]);

  return (
    <Content>
      <Block />
      <Location>소개-&gt; 문화여가시설 찾기</Location>
      <ContentInner>
        <SectionHeader>
          <div className="section-inner">
            <div className="title-area">
              <h1 className="title-h1">
                문화여가 · 단체
                <span className="txt">
                  지역별 다양한 문화관련 시설들을 공유합니다
                </span>
              </h1>
            </div>
          </div>
        </SectionHeader>
        <SectionMap>
          <AreaFacility>
            <SelectedFilter
              filterObj={filterObj}
              setFilterObj={setFilterObj}
              icons={icons}
            />
            <CultureMap filterObj={filterObj} icons={icons} />
          </AreaFacility>
        </SectionMap>
        <SectionShowAllTable>
          <AreaUtil></AreaUtil>
          <CultureTable />
        </SectionShowAllTable>
      </ContentInner>
    </Content>
  );
};
// 문화여가시설 찾기 페이지 전체영역
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 소개 페이지 기준 현재 페이지 상대 위치
const Location = styled.div`
  height: 84px;
  width: 1280px;
  padding: 32px 0;
`;

// Main, Map, Table 담기는 영역
const ContentInner = styled.div`
  /* height: 1100px; */
  width: 1280px;
`;

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
  border: 2px solid black;
`;

// 필터링된 리스트 결과 테이블
const SectionShowAllTable = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  width: 1280px;
  border: 1px solid red;
`;

const AreaUtil = styled.div`
  height: 40px;
  border: 1px solid black;
`;

// 공간 차지용 div
const Block = styled.div`
  height: 200px;
  width: 100%;
`;

export default CulturePage;
