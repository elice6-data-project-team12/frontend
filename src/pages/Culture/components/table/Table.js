import React from 'react';
import { useEffect, useState } from 'react';
import { useTable, usePagination } from 'react-table';
const Table = ({
  columns,
  data,
  // fetchData,
  pageCount: controlledPageCount,
  setIndex,
  pageSize,
  setPageSize,
  showModal,
  setShowModal,
  setInfoModal,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,

    // Get the state from the instance
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      manualPagination: true,
      pageCount: controlledPageCount,
    },
    usePagination
  );

  // 페이지번호가 바뀔때마다 쿼리를 변경
  useEffect(() => {
    setIndex(`?page=${pageIndex + 1}`);
  }, [pageIndex]);

  const openModal = e => {
    const { id } = e.target;

    if (id === 'detail-show') {
      setShowModal(!showModal);
    }
    setShowModal(true);
  };

  // 북마크에 저장할 데이터
  const [bookmarks, setBookmarks] = useState([]);

  // 컴포넌트가 마운트될 때, 로컬 스토리지에서 북마크 목록, 아이콘 이미지를 불러오기
  useEffect(() => {
    const storedBookmarks = localStorage.getItem('bookmarks');
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  // 북마크 추가/제거 함수
  function toggleBookmark(info, e) {
    const index = bookmarks.findIndex(bookmark => {
      return (
        bookmark.name === info.fac_name && bookmark.subject === info.subjcode
      );
    });

    if (info.facility_id === Number(e.target.id)) {
      if (index === -1) {
        const newBookmarks = [
          ...bookmarks,
          { name: info.fac_name, subject: info.subjcode },
        ];
        setBookmarks(newBookmarks);
        localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
        alert('북마크 추가');
      } else {
        const newBookmarks = [...bookmarks];
        newBookmarks.splice(index, 1);
        setBookmarks(newBookmarks);
        localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
        alert('북마크 제거');
      }
    }
  }

  return (
    <>
      <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2
          )}
        </code>
      </pre>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, idx) => (
            <tr key={idx} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, idx) => (
                <th key={idx} {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, idx) => {
            prepareRow(row);
            return (
              <tr key={idx} {...row.getRowProps()}>
                {row.cells.map((cell, idx) => {
                  if (idx === 4) {
                    return (
                      <td key={idx}>
                        <button
                          id="detail-show"
                          onClick={e => {
                            setInfoModal(cell.row.original.facility_id);
                            openModal(e);
                          }}
                        >
                          자세히보기.
                        </button>
                        <button
                          id={cell.row.original.facility_id}
                          onClick={e => {
                            toggleBookmark(cell.row.original, e);
                          }}
                        >
                          북마크
                        </button>
                      </td>
                    );
                  }
                  return (
                    <td key={idx} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Table;
