import { useEffect, useState } from 'react';
// import styled from 'styled-components';
import API from 'API';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import BookMarkButton from 'common/BookMarkButton';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
const CultureTable = ({ showModal, setShowModal, setInfoModal }) => {
  // 컬럼명과 컬럼명에 해당하는 값들 연결

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

  // Table
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontSize: 20,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const handlePageChange = (event, value) => {
    setIndex(`page=${value}`);
  };

  const openModal = e => {
    const { id } = e.target;

    if (id === 'detail-show') {
      setShowModal(!showModal);
    }
    setShowModal(true);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pageSize}
                label="Age"
                onChange={e => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map(pageSize => (
                  <MenuItem key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <h2 style={{ fontSize: '30px' }}>목록 리스트</h2>
          <Stack sx={{ mb: '20px' }} direction="row">
            <TextField
              id="standard-basic"
              label="시설명"
              xs={{}}
              variant="standard"
              onChange={e => {
                setNameInput(e.target.value);
              }}
              value={nameInput || ''}
            />

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <SearchIcon
                name="name"
                variant="outlined"
                onClick={e => {
                  setNameSearch(nameInput);
                  setNameInput('');
                }}
              />
            </Box>
          </Stack>
        </Box>

        <Table
          sx={{
            minWidth: 700,
          }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>시설명</StyledTableCell>
              <StyledTableCell align="right">시설분류</StyledTableCell>
              <StyledTableCell align="right">지역&nbsp;</StyledTableCell>
              <StyledTableCell align="right">전화번호&nbsp;</StyledTableCell>
              <StyledTableCell align="right">상세정보&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <StyledTableRow key={row.facility_id}>
                <StyledTableCell component="th" scope="row">
                  {row.fac_name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.subjcode}</StyledTableCell>
                <StyledTableCell align="right">{row.district}</StyledTableCell>
                <StyledTableCell align="right">{row.phne}</StyledTableCell>
                <StyledTableCell align="right">
                  <ButtonGroup
                    variant="outlined"
                    aria-label="outlined button group"
                  >
                    <Button
                      id="detail-show"
                      onClick={e => {
                        setInfoModal(row.facility_id);
                        openModal(e);
                      }}
                    >
                      자세히보기
                    </Button>
                    <BookMarkButton info={row.facility_id} />
                  </ButtonGroup>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: '20px',
          mb: '20px',
        }}
        count={pageCount}
        size="large"
        variant="text"
        shape="rounded"
        onChange={handlePageChange}
      />
    </div>
  );
};

// const Styles = styled.div`
//   table {
//     border-spacing: 0;
//     border: 1px solid black;
//     width: 1270px;
//     tr {
//       :last-child {
//         td {
//           border-bottom: 0;
//         }
//       }
//     }
//     th,
//     td {
//       margin: 0;
//       padding: 0.5rem;
//       border-bottom: 1px solid black;
//       border-right: 1px solid black;

//       :last-child {
//         border-right: 0;
//       }
//     }
//   }

//   .pagination {
//     padding: 0.5rem;
//   }
// `;

export default CultureTable;
