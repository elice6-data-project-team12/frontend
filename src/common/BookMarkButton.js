import API from 'API';
import { useState } from 'react';

function BookMarkButton({ info }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log(info);
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

  return <button onClick={handleClick}>북마크</button>;
}

export default BookMarkButton;
