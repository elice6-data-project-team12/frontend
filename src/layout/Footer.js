import styled from 'styled-components';

const Footer = () => {
  return (
  <Wrap>
    <div className="main">HYODORI</div>
    <div>
    (주)효도리 | 12팀 | 서울특별시 성동구 아차산로 17길 48 2층
    © HYODORI, Inc.
    </div>
  </Wrap>
  );
};

const Wrap = styled.div`
  height: 100px;
  background-color: #f2be5b;
  opacity: 0.9;
  position : relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div{
    padding: 0 0 5px 0;
  }

  .main{
    font-weight: 600;
  }
`;

export default Footer;
