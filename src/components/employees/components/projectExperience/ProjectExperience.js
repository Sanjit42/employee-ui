import React, {PropTypes} from 'react';

const ProjectExperience = ({projectExperience}) => {

  return (
    <div>
      <h1>Project Experience</h1>
      <div>
        <h4>{projectExperience.project}</h4>
        <h5>{projectExperience.subProject}</h5>
        <div>{projectExperience.projectStartDate}</div>
        <div>{projectExperience.projectToDate}</div>
      </div>
    </div>
  );
};

ProjectExperience.propTypes = {
  projectExperience: PropTypes.object
};

export default ProjectExperience;
