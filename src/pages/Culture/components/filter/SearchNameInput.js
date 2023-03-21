import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
const SearchNameInput = ({
  setSearchName,
  searchName,
  handleFilterNameSearch,
}) => {
  return (
    <Stack sx={{ mb: '20px' }} direction="row">
      <TextField
        id="standard-basic"
        label="시설명"
        xs={{}}
        variant="standard"
        onChange={e => {
          setSearchName(e.target.value);
        }}
        value={searchName}
      />

      <Box xs={{ position: 'relative' }}>
        <SearchIcon
          sx={{
            fontSize: '35px',
            cursor: 'pointer',
            position: 'absolute',
            top: 15,
          }}
          name="name"
          variant="outlined"
          onClick={e => {
            handleFilterNameSearch(e);
            setSearchName('');
          }}
        />
      </Box>
    </Stack>
  );
};

export default SearchNameInput;
