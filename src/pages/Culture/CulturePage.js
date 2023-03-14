import styled from 'styled-components';
import CultureMap from './components/CultureMap';
import { useState } from 'react';
import { seoul } from 'pages/Landing/Data/map/valueData';
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

  // 서울 자치구 리스트
  const addrList = seoul.map(data => data.name);

  const [selected, setSelected] = useState('');

  // filter 적용할 객체 state
  const [filterObj, setFilterObj] = useState({
    reset: false,
    all: false,
    filterState: {
      addr: '',
      subject: '',
    },
  });
  // select 필터 함수
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

  // 초기화 필터 버튼 함수
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

  //전체보기 필터 버튼 함수
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
    <Wrap>
      <Block />
      <Header>
        <h1 className="header-title"> 문화여가시설찾기 </h1>
        <br />
        <p className="header-content">
          서울시 행정구역별 다양한 문화관련 시설들을 공유합니다.
        </p>
      </Header>
      <MapWrap>
        <MapInfo>
          <Filter>
            <div className="filter-subject">
              <select id="subject" onChange={handleFilterSelect} value={selected}>
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
            <button id="reset" onMouseDown={handleFilterReset}>
              초기화
            </button>
          </Filter>
        </MapInfo>
        <Map>
          <CultureMap filterObj={filterObj} />
        </Map>
      </MapWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 1200px;
  width: 100%;
`;

const Header = styled.div`
  height: 10%;
  border: 5px solid red;
  padding: 10px 0;

  .header-title {
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -1.2px;
    line-height: 39.84px;
    text-decoration: none solid rgb(34, 34, 34);
    text-align: center;
    vertical-align: top;
    word-spacing: 0px;
  }

  .header-content {
    font-size: 18px;
    letter-spacing: -0.45px;
    line-height: 32.04px;
    text-decoration: none solid rgb(102, 102, 102);
    text-align: center;
    vertical-align: top;
    word-spacing: 0px;
  }
`;

const MapWrap = styled.div`
  height: 70%;
  border: 5px solid orange;
  padding: 20px;
  display: flex;
`;
const MapInfo = styled.div`
  width: 40%;
  border: 5px solid blue;
  display: flex;
  justify-content: flex-end;
`;

const Filter = styled.div`
  width: 70%;
  height: 100%;
  border: 2px dotted purple;

  .filter-subject {
    width: 70%;
    height: 70px;
  }
`;

const Map = styled.div`
  width: 60%;
  border: 5px solid green;
  display: flex;
`;

const Block = styled.div`
  height: 10%;
  width: 100%;
`;

export default CulturePage;
