import styled from 'styled-components';
import CultureMap from './components/map/CultureMap';
import { useState } from 'react';
import { seoul } from 'pages/Landing/Data/map/valueData';
import {
  ico_picker01_on,
  ico_picker02_on,
  ico_picker03_on,
  ico_picker04_on,
  ico_picker05_on,
  ico_picker06_on,
  ico_picker07_on,
} from 'assets/images/index.js';

import CultureTable from './components/table/CultureTable';

const CulturePage = () => {
  // 주제 분류 리스트
  const selectList = [
    '문화원',
    '공연장',
    '도서관',
    '문화예술회관',
    '미술관',
    '박물관/기념관',
    '기타',
  ];

  const addrList = seoul.map(data => data.name);

  const [selected, setSelected] = useState('');

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

  // filter 적용할 객체 state
  const [filterObj, setFilterObj] = useState({
    reset: false,
    all: false,
    filterState: {
      addr: '',
      subject: '',
    },
  });
  // 필터 정보 저장 함수 (select)
  const handleFilterSelect = e => {
    const name = e.target.value;
    const tag = e.target.id;
    setSelected(name);
    e.preventDefault();
    return setFilterObj({
      reset: false,
      all: false,
      filterState: {
        ...filterObj.filterState,
        [tag]: name,
      },
    });
  };

  // 필터 정보 저장 함수 (초기화 Btn)
  const handleFilterReset = e => {
    e.preventDefault();
    return setFilterObj({
      reset: true,
      all: false,
      filterState: {
        addr: '',
        subject: '',
      },
    });
  };

  // 필터 정보 저장 함수 (전체보기 Btn)
  const handleFilterShowAll = e => {
    e.preventDefault();
    return setFilterObj({
      reset: false,
      all: true,
      filterState: {
        addr: '',
        subject: '',
      },
    });
  };

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
            <FacilityFilter>
              <Filter>
                <div className="filter-subject">
                  <select
                    id="subject"
                    onChange={handleFilterSelect}
                    value={selected}
                  >
                    {selectList.map(item => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <hr />
                </div>
                <div className="filter-subject">
                  <select
                    id="addr"
                    onChange={handleFilterSelect}
                    value={selected}
                  >
                    {addrList.map(item => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <hr />
                </div>
                <button id="all" onMouseDown={handleFilterShowAll}>
                  전체보기
                </button>
                <hr />
                <input placeholder="이름 검색" />
                <button id="reset" onMouseDown={handleFilterReset}>
                  초기화
                </button>
                <IconWrap>
                  {icons.map(i => (
                    <div className="icon" key={i.value}>
                      <img src={i.img} alt={i.value} />
                      <span className="icon-title">{i.value}</span>
                    </div>
                  ))}
                </IconWrap>
              </Filter>
            </FacilityFilter>
            <FacilityMap>
              <CultureMap filterObj={filterObj} icons={icons} />
            </FacilityMap>
          </AreaFacility>
        </SectionMap>
        <SectionFacilityResult>
          <AreaUtil></AreaUtil>
          <CultureTable />
        </SectionFacilityResult>
      </ContentInner>
    </Content>
  );
};
// 문화여가시설 찾기 페이지 전체영역
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 소개 페이지 기준 현재 페이지 상대 위치
const Location = styled.div`
  height: 84px;
  width: 1380px;
  margin: 0 148px;
  padding: 32px 0;
  max-width: 1280px;
`;

// Main, Map, Table 담기는 영역
const ContentInner = styled.div`
  /* height: 1100px; */
  width: 1380px;
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

// 문화여가시설 필터와 지도 영역
const SectionMap = styled.div`
  .section-inner {
  }
`;
const AreaFacility = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border: 2px solid black;

  .wrap-facility-menu {
  }
`;
const FacilityFilter = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
`;

const Filter = styled.div`
  width: 100%;

  .filter-subject {
    height: 70px;
  }
`;

const IconWrap = styled.div`
  height: 283px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .icon {
    height: 100px;
    width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .icon-title {
      margin-top: 10px;
      font-size: 10px;
      font-weight: 700;
    }
  }
`;

const FacilityMap = styled.div`
  width: 50%;
  height: 660px;
  display: flex;
`;

// 필터링된 리스트 결과 테이블
const SectionFacilityResult = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  .section-inner {
    width: 1280px;
    border: 1px solid red;
    overflow: visible;
  }
`;

const AreaUtil = styled.div`
  height: 40px;
  border: 1px solid black;
`;

const AreaTable = styled.div`
  height: 740px;
  border: 1px solid green;
`;

// 공간 차지용 div
const Block = styled.div`
  height: 200px;
  width: 100%;
`;

export default CulturePage;
