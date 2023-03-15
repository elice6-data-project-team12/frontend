import styled from 'styled-components';
import CultureMap from './components/CultureMap';
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
              <select id="addr" onChange={handleFilterSelect} value={selected}>
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
        </MapInfo>
        <Map>
          <CultureMap filterObj={filterObj} icons={icons} />
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

const Map = styled.div`
  width: 100%;
  border: 5px solid green;
  display: flex;
`;

const Block = styled.div`
  height: 10%;
  width: 100%;
`;

export default CulturePage;
