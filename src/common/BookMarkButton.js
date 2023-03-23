import API from 'API';
import { useState } from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Box from '@mui/material/Box';

function BookMarkButton({ info }) {
  const [isClicked, setIsClicked] = useState(false);
  // 북마크 추가/제거 함수
  function toggleBookmark(info) {
    API.post(`/api/user/facility/${info}`)
      .then(res => {
        alert('북마크 추가');
      })
      .catch(err => alert('로그인 필요', err));
  }

  const handleClick = () => {
    setIsClicked(!isClicked);

    toggleBookmark(info);
  };

  return (
    <Box
      sx={{
        color: '#F2BE5B',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <BookmarkIcon sx={{ color: '#F2BE5B' }} onClick={handleClick}>
        북마크
      </BookmarkIcon>
    </Box>
  );
}

export default BookMarkButton;
