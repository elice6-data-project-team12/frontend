import React, { useState } from 'react';

function BookMarkButton({ bookmarks, setBookmarks, color, info }) {
  const [isClicked, setIsClicked] = useState(false);

  // 북마크 추가/제거 함수
  function toggleBookmark(info) {
    const index = bookmarks.findIndex(bookmark => {
      return (
        bookmark.name === info.fac_name && bookmark.subject === info.subjcode
      );
    });
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

  const handleClick = () => {
    setIsClicked(!isClicked);

    toggleBookmark(info);
  };

  return (
    <button
      style={{ backgroundColor: isClicked ? 'red' : color }}
      onClick={handleClick}
    >
      북마크
    </button>
  );
}

export default BookMarkButton;
