import { useState } from 'react';
import { seoul } from 'pages/Landing/Data/map/valueData';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import SearchNameInput from 'pages/Culture/components/filter/SearchNameInput';
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

  const [selectedAddr, setSelectedAddr] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [searchName, setSearchName] = useState('');

  // 필터 정보 저장 함수 (select)
  const handleFilterSelect = e => {
    e.preventDefault();

    let name;
    let tag;

    //아이콘 클릭 시 필터 조건
    if (e.target.alt) {
      name = e.target.alt;
      tag = 'subject';

      // select 선택 시 필터 조건
    } else {
      name = e.target.value;
      tag = e.target.name;
    }

    if (tag === 'subject') {
      setSelectedSubject(name);
    } else if (tag === 'addr') {
      setSelectedAddr(name);
    }

    return setFilterObj({
      reset: false,
      all: false,
      searchName: '',
      filterState: {
        ...filterObj.filterState,
        [tag]: name,
      },
    });
  };

  // 필터 정보 저장 함수 (초기화 Btn)
  const handleFilterReset = e => {
    e.preventDefault();
    setSelectedAddr('');
    setSelectedSubject('');
    setSearchName('');
    return setFilterObj({
      reset: true,
      all: false,
      searchName: '',
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
      searchName: '',
      filterState: {
        addr: '',
        subject: '',
      },
    });
  };
  const handleFilterNameSearch = e => {
    e.preventDefault();
    setSearchName('');
    return setFilterObj({
      reset: false,
      all: false,
      searchName: searchName,
      filterState: {
        addr: '',
        subject: '',
      },
    });
  };

  const handleFilterNameKeyDown = e => {
    e.preventDefault();

    if (e.key === 'Enter') {
      setSearchName('');
      return setFilterObj({
        reset: false,
        all: false,
        searchName: searchName,
        filterState: {
          addr: '',
          subject: '',
        },
      });
    }
  };
  return (
    <Box
      className="container"
      sx={{ width: '40%', padding: '40px', borderRight: '5px solid #F2BE5B' }}
    >
      <Box className="filter" sx={{ height: '55%' }}>
        <Stack direction="row" spacing={1}>
          <Chip
            label="전체보기"
            name="all"
            sx={{ backgroundColor: '#F2BE5B' }}
            onClick={handleFilterShowAll}
          />
          <Chip
            label="초기화"
            name="reset"
            sx={{ backgroundColor: '#F2BE5B' }}
            onClick={handleFilterReset}
          />
        </Stack>
        <Box sx={{ minWidth: 120, mb: '20px', mt: '20px' }}>
          <FormControl fullWidth>
            <InputLabel id="subject-label">시설분류</InputLabel>
            <Select
              labelId="subject-label"
              id="subject"
              value={selectedSubject}
              label="subject"
              name="subject"
              onChange={handleFilterSelect}
            >
              {selectList.map(item => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ minWidth: 120, mb: '20px' }}>
          <FormControl fullWidth>
            <InputLabel id="addr-label">지역</InputLabel>
            <Select
              labelId="addr-label"
              id="addr"
              value={selectedAddr}
              label="addr"
              name="addr"
              onChange={handleFilterSelect}
            >
              {addrList.map(item => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}
        >
          <SearchNameInput
            setSearchName={setSearchName}
            handleFilterNameSearch={handleFilterNameSearch}
            handleFilterNameKeyDown={handleFilterNameKeyDown}
            searchName={searchName}
          />
        </Box>
      </Box>
      <Box className="icons">
        <Grid
          sx={{ height: '100px' }}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {icons.map((i, index) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={handleFilterSelect}
            >
              <img src={i.img} alt={i.value} />
              <Box sx={{ mt: '5px' }}>
                <span className="icon-title">{i.value}</span>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SelectedFilter;
