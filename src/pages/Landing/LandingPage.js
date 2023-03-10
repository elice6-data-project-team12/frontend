import { useState } from 'react';
import BarChart from './components/BarChart';
import Chart from './components/TwoChart';
import { BarData } from './Data/data.js';
import styled from 'styled-components';
import DoughnutChart from './components/DoughnutChart';

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
        <Block />
        <Content>
          <Title>
            <h1 className="title-header">
              1인가구 증가로 인해 심화되는 사회적 고립
            </h1>
            <p>1인가구 증가~ 외로움 증가</p>
          </Title>
          <ChartWrap>
            <div>
              <BarChart chartData={fakeData} />
            </div>
            <div>
              <DoughnutChart />
            </div>
          </ChartWrap>
        </Content>
        <Content>
          <Title>
            <h1 className="title-header">특히 높은 중~장년층 세대의 비율</h1>
            <p>사회적 접촉이 40대 이후 지속적 감소~~~ 해결책~~~~ </p>
          </Title>
          <div className="content-chart-age">
            <Chart />
          </div>
        </Content>
        <Content>
          <Title>
            <h1 className="title-header">
              이제,부모님이 외롭지 않게 도와주세요.
            </h1>
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
`;

const Block = styled.div`
  height: 5%;
  width: 100%;
`;

const ContentWrap = styled.div`
  display: block;
  height: 100%;
`;

const Content = styled.div`
  height: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .content-chart-age {
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`;

const Title = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title-header {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 5%;
  }
`;

const ChartWrap = styled.div`
  height: 70%;
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
  height: 40%;
  display: flex;
  justify-content: center;
  background-image: url('images/MaskGroup.png');
  background-size: 100% 100%;

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 80%;
  }
`;

const Btn = styled.button`
  margin: 0;
  border: none;
  cursor: pointer;
  width: 300px;
  margin-bottom: 100px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  background: var(--button-bg-color, #f2be5b);
  color: var(--button-color, black);
  font-weight: 700;

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #bc8721);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #bc8721);
  }
`;
export default LandingPage;
