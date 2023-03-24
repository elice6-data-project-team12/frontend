import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'white',
      }}
    >
      <Typography variant="h1" style={{ color: 'black', fontSize: '300px' }}>
        404
      </Typography>
      <Typography variant="h2" style={{ color: 'black' }}>
        페이지를 찾을 수 없습니다.
      </Typography>
      <Link to="/">
        <Button
          variant="contained"
          style={{ marginTop: '30px', fontSize: '20px' }}
        >
          홈으로 돌아가기
        </Button>
      </Link>
    </Box>
  );
}
