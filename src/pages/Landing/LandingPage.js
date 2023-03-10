import { useState } from 'react';
import BarChart from './components/BarChart';
import Chart from './components/TwoChart';
import { BarData } from './Data/data.js';
import styled from 'styled-components';

const LandingPage = () => {
  const [fakeData, setFakeData] = useState({
    labels: BarData.map(data => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: BarData.map(data => data.userGain),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });

  return (
    <Wrap>
      <ContentWrap>
        <Content>
          <Title>
            <span>1인가구 증가로 인해 심화되는 사회적 고립</span>
          </Title>
          <ChartWrap>
            <div>
              <BarChart chartData={fakeData} />
            </div>
            <div>
              <BarChart chartData={fakeData} />
            </div>
          </ChartWrap>
        </Content>
        <Content>
          <Title>
            <span>특히 높은 중~장년층 세대의 비율</span>
          </Title>
          <div className="content-chart-age">
            <Chart />
          </div>
        </Content>
        <Content>
          <Title>
            <span>이제,부모님이 외롭지 않게 도와주세요.</span>
            <p>중장년층을 위한 문화여가시설 지도를 통해 외출을 장려하고</p>
            <p>커뮤니케이션을 통해 정보를 공유하세요!</p>
          </Title>
          <ImgWrap>
            <div>
              <Btn>문화여가시설 찾으러 가기</Btn>
              <Btn>효도챌린지 하러 가기</Btn>
            </div>
          </ImgWrap>
        </Content>
      </ContentWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 300vh;
  width: 100%;
  border: 1px solid red;
`;

const ContentWrap = styled.div`
  height: 90%;
`;

const Content = styled.div`
  height: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .content-chart-age {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.div`
  height: 30%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChartWrap = styled.div`
  height: 70%;
  border: 1px dotted red;
  display: flex;
  align-items: center;

  div {
    height: 80%;
    width: 50%;
    display: flex;
    align-items: center;
    padding: 5%;

    &:nth-child(1) {
      background-color: #f16565;
      border-bottom-left-radius: 20%;
    }
    &:nth-child(2) {
      background-color: #d9d9d9;
      border-top-right-radius: 20%;
    }
  }
`;

const ImgWrap = styled.div`
  height: 70%;
  border: 1px dotted red;
  display: flex;
  justify-content: center;
  background-image: url('images/MaskGroup.png');
  background-size: 100% 100%;
  opacity: 0.7;

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 80%;
  }
`;

const Btn = styled.button`
  height: 40px;
  width: 200px;
  background-color: #f2be5b;
  border: none;
  border-radius: 10px;
  margin: 50px;
  z-index: 5;
  opacity: 1;
`;
export default LandingPage;
