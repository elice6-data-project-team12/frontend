import styled from 'styled-components';

const Footer = () => {
  return (
  <Wrap>
    <div>HYODORI</div>
    <div>
    (주)효도리(12팀) | 서울특별시 성동구 아차산로 17길 48 2층
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
  justify-content: center;
  align-items: center;
  /* bottom:0; */
  /* transform : translateY(400%); */
`;

export default Footer;
