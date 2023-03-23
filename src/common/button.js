import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: rgba(195, 155, 78, 1);
  color: rgba(71, 59, 59, 1);
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  padding-block: 10px;
  padding-inline: 40px;
  text-align: center;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    background-color: #f2be5b;
  }
`;

export default StyledButton;
