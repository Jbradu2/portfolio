
import styled from 'styled-components';


const ProjectWrapper = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;

  img {
    max-width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  a {
    margin-right: 10px;
    color: #333;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
//diffrent links/info
const Project = () => {
  return (
    <ProjectWrapper className="project">
      {/*project dets */}
    </ProjectWrapper>
  );
};

export default Project;
