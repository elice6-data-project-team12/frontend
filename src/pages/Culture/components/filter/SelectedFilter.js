import styled from 'styled-components';
import { useState } from 'react';
import { seoul } from 'pages/Landing/Data/map/valueData';

const SelectedFilter = ({ filterObj, setFilterObj, icons }) => {
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
    <FacilityFilter>
      <FilterWrap>
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
      </FilterWrap>
    </FacilityFilter>
  );
};
const FacilityFilter = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
`;

const FilterWrap = styled.div`
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

export default SelectedFilter;
