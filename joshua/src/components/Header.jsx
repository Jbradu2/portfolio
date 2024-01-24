
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: red;
  color: black;
  padding: 20px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 2rem;
  }

`;


const Header = () => {
  return (
    <HeaderWrapper>
    <h1>Joshua Bradshaw</h1>
    </HeaderWrapper>
  );
};

export default Header;