export const getUpdatedSkills = (rating, skills, id) => {
  let newSkillSet = {...rating};
  skills.forEach(r => {
    const key = Object.keys(r)[0];
    newSkillSet = {...newSkillSet, [key]: {...newSkillSet[key], ...r[key]}};
  });

  return {...newSkillSet, employeeId: id}
};
