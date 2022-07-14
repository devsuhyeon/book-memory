import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  color: white;
  background-color: ${(props) => {
    switch (props.type) {
      case 'positive':
        return '#79adbd';
      case 'negative':
        return '#de8d81';
      default:
        return;
    }
  }};
  font-size: 16px;
  padding: 6px 12px;
  cursor: pointer;
`;

export const PrevButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  position: absolute;
  left: 60px;
  font-size: 28px;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;
