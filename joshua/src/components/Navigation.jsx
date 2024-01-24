
import styled from 'styled-components';

const NavigationWrapper = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    background-color: #444;
  }

  li {
    margin: 0;
    padding: 10px;
    cursor: pointer;
    color: #fff;
    font-size: 1rem;

    &:hover {
      background-color: #555;
    }
  }
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <ul>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
    </NavigationWrapper>
  );
};

export default Navigation;