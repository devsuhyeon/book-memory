import { PrevButton } from './Buttons';
import { TbChevronLeft } from 'react-icons/tb';
import styled from 'styled-components';

const Header = styled.header`
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #ecc778;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
`;

const MyHeader = ({ text }) => {
  return (
    <Header>
      <PrevButton>
        <TbChevronLeft />
      </PrevButton>
      {text}
    </Header>
  );
};

export default MyHeader;
