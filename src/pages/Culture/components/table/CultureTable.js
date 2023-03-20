import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Table from './Table';
import API from 'API';
const CultureTable = ({ showModal, setShowModal, setInfoModal }) => {
  // 컬럼명과 컬럼명에 해당하는 값들 연결
  const columns = useMemo(
    () => [
      {
        Header: '전체리스트',
        columns: [
          {
            Header: '시설명',
            accessor: 'fac_name',
          },
          {
            Header: '문화시설',
            accessor: 'subjcode',
          },
          {
            Header: '시설위치',
            accessor: 'district',
          },
          {
            Header: '전화번호',
            accessor: 'phne',
          },
          {
            Header: '상세정보',
            accessor: '자세히 보기',
          },
        ],
      },
    ],
    []
  );

  const [data, setData] = useState([]); //
  const [pageCount, setPageCount] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [index, setIndex] = useState('page=1');
  const [nameInput, setNameInput] = useState(null);
  const [nameSearch, setNameSearch] = useState('');

  useEffect(() => {
    // 이름 검색
    if (nameSearch.length > 0) {
      API.get(
        `http://localhost:4000/api/facility/list/search?query=${nameSearch}&${index}`
      )
        .then(res => {
          //TODO 백앤드 수정 필요
          setPageCount(res.data.maxPage);
          setData(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
      // 전체 검색
    } else {
      API.get(`/api/facility?${index}&pageSize=${pageSize}`) // 백앤드 API (정상작동)
        .then(res => {
          setPageCount(res.data.maxPage);
          setData(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [index, pageSize, nameSearch]);
  return (
    <Styles>
      <Table
        columns={columns}
        data={data}
        pageCount={pageCount}
        setIndex={setIndex}
        setPageSize={setPageSize}
        pageSize={pageSize}
        showModal={showModal}
        setShowModal={setShowModal}
        setInfoModal={setInfoModal}
        nameSearch={nameSearch}
      />
      <input
        placeholder="이름검색"
        value={nameInput || ''}
        onChange={e => {
          setNameInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setNameSearch(nameInput);
        }}
      >
        검색
      </button>
    </Styles>
  );
};

const Styles = styled.div`
  table {
    border-spacing: 0;
    border: 1px solid black;
    width: 1270px;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;

export default CultureTable;
