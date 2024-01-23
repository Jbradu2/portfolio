import React from 'react';
import styled from 'styled-components';


const ProjectWrapper = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid;
`;
//diffrent links/info
const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <ProjectWrapper className="project">
      {/*project dets */}
    </ProjectWrapper>
  );
};

export default Project;
