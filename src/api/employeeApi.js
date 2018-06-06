/* eslint-disable no-undef,import/namespace,import/default,no-unreachable */
import delay from './delay';
import axios from 'axios';
import _ from 'lodash';

import avatar from '../resources/images/avatar.svg';

const employees = [
  {
    name: 'Abhik Roy',
    gender: 'Male',
    employeeId: 21322,
    currentProject: 'Beach',
    homeOffice: 'Hyderabad',
    role: 'Developer',

    projectExperience: {
      project: 'ThoughtWorks',
      subProject: 'step',
      projectStartDate: "10-02-2017",
      projectToDate: '02-03-2018'
    },
    leaveHistory: {leaveType: 'Annual Leave', leaveFrom: '1-03-2018', leaveTo: '14-03-2018'}
  },
  {
    name: 'Ritesh D',
    gender: 'Male',
    employeeId: 21132,
    currentProject: 'Bahmni',
    homeOffice: 'Hyderabad',
    role: 'Developer',

    projectExperience: {
      project: 'TrainLine',
      subProject: 'train',
      projectStartDate: "10-12-2016",
      projectToDate: '22-03-2017'
    },
    leaveHistory: {
      leaveType: 'Annual Leave',
      leaveFrom: '10-02-2018',
      leaveTo: '11-02-2018'
    }
  }];

const skillsAndAbilities = [
  {
    employeeId: 21322,
    technical: {'AWS': 2, 'Java': 3},
    consulting: {'communication': 4, 'planning': 2, 'questioning': 1},
    domain: {'government': 1, 'education': 2},
    testing: {'capybara': 2, 'cucumber': 0, 'fitnesse': 1}
  },
  {
    employeeId: 21132,
    technical: {'AWS': 3, 'Java': 3},
    consulting: {'communication': 3, 'planning': 2, 'questioning': 5},
    domain: {'government': 1, 'education': 2},
    testing: {'capybara': 2, 'cucumber': 0, 'fitnesse': 1}
  }
];

const technical = [{employeeId: 20132, skills: [{'AWS': 2}, {'java': 3}]}];
const consulting = [{
  employeeId: 20322,
  skills: [{'communication': 4}, {'planning': 2}, {'questioning': 1}]
}];
const domain = [{
  employeeId: 20132,
  skills: [{'government': 1}, {'education': 2}]
}];
const testing = [{employeeId: 20322, skills: [{'capybara': 2}, {'cucumber': 0}, {'fitnesse': 1}]}];

const homeOffices = ["Hyderabad-India", "Bangalore-India", "Chennai-India", "Pune-India", "Gurgaon-India"];
const gender = ['Male', 'Female'];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const generateId = (employee) => {
  return replaceAll(employee.title, ' ', '-');
};

class EmployeeApi {
  static getAllEmployees() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], employees));
      }, delay);
    });
  }

  static getSkillsAndAbilities() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], skillsAndAbilities));
      }, delay);
    });
  }

  static saveEmployee(employee) {
    employee = Object.assign({}, employee);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minEmployeeTitleLength = 1;
        if (employee.name.length < minEmployeeTitleLength) {
          reject(`Title must be at least ${minEmployeeTitleLength} characters.`);
        }
        resolve(employee);
      }, delay);
    });
  }

  static saveSkillsAndAbilities(skillsAndAbilities, id) {
    let filterSkills = skillsAndAbilities.filter(skills => skills.employeeId === id);
    let splitSkillsValues = _.groupBy(filterSkills, 'subset');
    let subset = Object.keys(splitSkillsValues);
    let skillsResult = {};

    _.each(subset, (each) => {
      let presubsetData = getSkillsRatingObjet(splitSkillsValues[each]);
      skillsResult[each] = presubsetData;
    });

    let assignEmployeeId = Object.assign({}, skillsResult, {employeeId: id});

    function getSkillsRatingObjet(skills) {
      let result = {};
      _.each(skills, function (each) {
        result = Object.assign({}, result, _.omit(each, 'subset', 'employeeId'));
      });
      return result;
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios.post('http://localhost:8080/employee/skillsAndAbilities', assignEmployeeId).then(res => {
          if (res.status == 200) {
            resolve(assignEmployeeId);
          }
        });
      }, delay);
    });
  }

  static updateRatingValue(rating, topic, id, template) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let topicWithRating = {};

        topicWithRating[topic] = rating;
        topicWithRating['subset'] = template;
        topicWithRating['employeeId'] = id;

        resolve(topicWithRating);
      }, delay);
    });
  }

  static saveAvatar(avatar) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios.post('http://localhost:8080/employee/avatar/employeeId', avatar).then(res => {
          resolve(avatar);
        })
          .catch(error => {
            throws(error);
          });
      }, delay);
    });
  }

  static loadAvatar() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{employeeId: 20322, image: avatar}]);
      }, delay);
    });
  }

  static getAllHomeOffices() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], homeOffices));
      }, delay);
    });
  }

  static getGenderList() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], gender));
      }, delay);
    });
  }

  static loadTechnicalSkills() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], technical));
      }, delay);
    });
  }

  static updateTechnicalSkills(newRating, technicalSkillsObj, id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let key = Object.keys(technicalSkillsObj)[0];
        let obj = {};
        obj[key] = newRating;
        resolve(Object.assign([], [{employeeId: id, rating: obj}]));
      }, delay);
    });
  }

  static loadConsultingSkills() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], consulting));
      }, delay);
    });
  }

  static loadTestingSkills() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], testing));
      }, delay);
    });
  }

  static loadDomainSkills() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], domain));
      }, delay);
    });
  }
}

export default EmployeeApi;
