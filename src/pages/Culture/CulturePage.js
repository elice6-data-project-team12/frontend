import styled from 'styled-components';

const CulturePage = () => {
  return (
    <Wrap>
      <Block />
      <Header>
        <h1 className="header-title"> 문화여가시설찾기 </h1>
        <br />
        <p className="header-content">
          서울시 행정구역별 다양한 문화관련 시설들을 공유합니다.
        </p>
      </Header>
      <MapWrap>
        <MapInfo></MapInfo>
        <Map></Map>
      </MapWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 1200px;
  width: 100%;
`;

const Header = styled.div`
  height: 10%;
  border: 5px solid red;
  padding: 10px 0;

  .header-title {
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -1.2px;
    line-height: 39.84px;
    text-decoration: none solid rgb(34, 34, 34);
    text-align: center;
    vertical-align: top;
    word-spacing: 0px;
  }

  .header-content {
    font-size: 18px;
    letter-spacing: -0.45px;
    line-height: 32.04px;
    text-decoration: none solid rgb(102, 102, 102);
    text-align: center;
    vertical-align: top;
    word-spacing: 0px;
  }
`;

const MapWrap = styled.div`
  height: 70%;
  border: 5px solid orange;
  display:flex;
`;
const MapInfo = styled.div`
  width: 30%;
  border: 5px solid blue;
`;

const Map = styled.div`
  width: 70%;
  border: 5px solid green;
  display:flex;
`;

const Block = styled.div`
  height: 10%;
  width: 100%;
`;

export default CulturePage;
