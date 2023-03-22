import { useEffect, useState } from 'react';
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
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Chip from '@mui/material/Chip';
const CultureTable = ({ showModal, setShowModal, setInfoModal }) => {
  // 컬럼명과 컬럼명에 해당하는 값들 연결

  const [data, setData] = useState([]); //
  const [pageCount, setPageCount] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [index, setIndex] = useState(1);
  const [nameInput, setNameInput] = useState(null);
  const [nameSearch, setNameSearch] = useState('');

  useEffect(() => {
    // 이름 검색
    if (nameSearch.length > 0) {
      API.get(`/api/facility/list/search?query=${nameSearch}&page=${index}`)
        .then(res => {
          setPageCount(res.data.maxPage);
          setData(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
      // 전체 검색
    } else {
      API.get(`/api/facility?page=${index}&pageSize=${pageSize}`)
        .then(res => {
          setPageCount(res.data.maxPage);
          setData(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [index, pageSize, nameSearch]);

  useEffect(() => {
    setIndex(1);
  }, [pageSize]);

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
    setIndex(Number(value));
  };

  const openModal = e => {
    const { id } = e.target;

    if (id === 'detail-show') {
      setShowModal(!showModal);
    }
    setShowModal(true);
  };

  // 엔터키로 이름 검색
  const handleFilterNameKeyDown = e => {
    e.preventDefault();
    setNameInput(e.target.value);
    if (e.key === 'Enter') {
      setNameInput('');
      return setNameSearch(e.target.value);
    }
  };

  // 필터 정보 초기화 함수 (초기화 Btn)
  const handleFilterReset = e => {
    e.preventDefault();
    setNameSearch('');
    setIndex(1);
    setPageSize(10);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: '10px',
          }}
        >
          <Box sx={{ minWidth: 120, display: 'flex', alignItems: 'center' }}>
            <FormControl fullWidth>
              <InputLabel id="show-count-label">개수</InputLabel>

              <Select
                labelId="show-count-label"
                id="show-count"
                value={pageSize}
                label="count"
                onChange={e => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map(pageSize => {
                  return (
                    <MenuItem key={pageSize} value={pageSize}>
                      {pageSize}개
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <Chip
              label="초기화"
              name="reset"
              sx={{ backgroundColor: '#F2BE5B', ml: '10px' }}
              onClick={handleFilterReset}
            />
          </Box>
          <h2 style={{ fontSize: '30px' }}>목록 리스트</h2>
          <Stack sx={{ mb: '20px' }} direction="row">
            <TextField
              id="standard-basic"
              label="시설명"
              sx={{ display: 'flex', alignItems: 'center' }}
              variant="standard"
              onChange={e => {
                setNameInput(e.target.value);
              }}
              onKeyDown={e => {
                handleFilterNameKeyDown(e);
              }}
              value={nameInput || ''}
            />

            <Box sx={{ display: 'flex', alignItems: 'end' }}>
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
              <StyledTableCell align="center">시설분류</StyledTableCell>
              <StyledTableCell align="right">지역&nbsp;</StyledTableCell>
              <StyledTableCell align="right">전화번호&nbsp;</StyledTableCell>
              <StyledTableCell align="right">
                상세정보&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <StyledTableRow key={row.facility_id}>
                <StyledTableCell component="th" scope="row">
                  {row.fac_name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.subjcode}</StyledTableCell>
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
                      sx={{ mr: '5px' }}
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
        page={index}
      />
    </div>
  );
};

export default CultureTable;
