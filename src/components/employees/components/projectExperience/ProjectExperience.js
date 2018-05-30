import React, {PropTypes} from 'react';

const ProjectExperience = ({projectExperience}) => {

  return (
    <div>
      <h1>Project Experience</h1>
      {projectExperience.map(project =>
        <div>
          <h4>{project.project}</h4>
          <h5>{project.subProject}</h5>
          <div>{project.from}</div>
          <div>{project.to}</div>
        </div>
      )}
    </div>
  );
};

ProjectExperience.propTypes = {
  projectExperience: PropTypes.array
};

export default ProjectExperience;
