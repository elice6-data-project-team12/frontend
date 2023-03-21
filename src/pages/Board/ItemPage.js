import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Modal() {
  return (
    <div>
      <div>새 글 등록</div>
      <form>
        <div>
          <label>내용</label>
          <input />
        </div>
        <div>
          <label>
            태그 선택
            <button>효도템</button>
            <button>생신</button>
            <button>선물</button>
          </label>
        </div>
        <button type="submit">제출</button>
      </form>
    </div>
  );
}

function ItemPage() {
  const [content, setContent] = useState([]);
  // filter 적용할 객체 state
  const [filterObj, setFilterObj] = useState({
    all: false,
    filterState: {
      hashtag_id: '',
    },
  });
  // filter 적용된 리스트 state
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setContent(data);
        console.log(content);
      });
  }, []);

  // 적용할 필터 버튼 함수
  const handleFilterButton = e => {
    const btnId = e.target.id;
    e.preventDefault();
    setFilterObj({
      all: false,
      filterState: {
        hashtag_id: btnId,
      },
    });
    console.log(filterObj);
  };

  //전체보기 필터 버튼 함수
  const handleFilterShowAll = e => {
    e.preventDefault();
    return setFilterObj({
      all: true,
      filterState: {
        hashtag_id: '',
      },
    });
  };

  //전체 데이터에 필터 걸기
  const filterData = () => {
    const { hashtag_id } = filterObj.filterState;
    console.log(hashtag_id);
    let x = [];
    // 1 필터
    if (hashtag_id === 'all') {
      x = [...content];
      console.log(content);
    } else if (hashtag_id === '1') {
      x = [content.filter(data => data.hashtag_id === 1)[0]];
      console.log(x);
    }
    // 2 필터
    else if (hashtag_id === '2') {
      x = [content.filter(data => data.hashtag_id === hashtag_id)];
      console.log(x.length);
    }
    // 1+ 2 둘다 필터
    else if (hashtag_id === '1' && hashtag_id === '2') {
      x = [
        ...content.filter(
          data =>
            data.hashtag_id === hashtag_id && data.hashtag_id === hashtag_id
        ),
      ];
      console.log(x.length);
    }

    console.log(x);
    return x;
  };

  useEffect(() => {
    setFilteredList(filterData);
  }, [filterObj]);

  // const filterHandler = () => {

  //     content.map(i => {
  //       if (i.category === "효도템") {
  //         console.log(i)
  //       }
  //     })
  //     //state 만들어서 setState로 조건맞는컨텐츠 넣고 useeffect로 렌더링하기 (핸들링함수안에)
  // }

  return (
    <Container>
      <Modal />
      <div>
        <button id="all" onMouseDown={handleFilterButton}>
          전체
        </button>
        <button id="1" onMouseDown={handleFilterButton}>
          효도템
        </button>
        <button id="2" onMouseDown={handleFilterButton}>
          생신
        </button>
        <button id="3">선물</button>
      </div>
      <div>
        {filteredList.map((data, idx) => {
          return (
            <ul key={idx}>
              <li>hashtag_id: {data.hashtag_id}</li>
            </ul>
          );
        })}
      </div>
      {/* {JSON.stringify(content)} */}
      {content.map(i => (
        <UserInputContainer key={i.post_id}>{i.content}</UserInputContainer>
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 90px;
  width: 100%;
  height: max-content;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserInputContainer = styled.div`
  width: 35%;
  height: 70vh;
  background-color: #e8e8e8;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
`;

export default ItemPage;
