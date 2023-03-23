import API from 'API';
import { useState } from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Box from '@mui/material/Box';

function BookMarkButton({ info, setIsOpenAlert }) {
  const [isClicked, setIsClicked] = useState(false);
  // 북마크 추가/제거 함수
  function toggleBookmark(info) {
    API.post(`/api/user/facility/${info}`)
      .then(res => {
        setIsOpenAlert({
          open: true,
          type: 'success',
          message: '내 장소에 추가 되었습니다.',
        });
      })
      .catch(err => {
        setIsOpenAlert({
          open: true,
          type: 'info',
          message: '로그인이 필요한 서비스 입니다.',
        });
      });
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
