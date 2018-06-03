/* eslint-disable no-undef,import/namespace,import/default,no-unreachable */
import delay from './delay';
import axios from 'axios';
import _ from 'lodash';

import avatar from '../resources/images/avatar.svg';
const employees = [
  {
    basicDetails:
      {
        name: 'Abhik Roy',
        gender: 'Male',
        employeeId: 21322,
        currentProject: 'Beach',
        homeOffice: 'Hyderabad',
        role: 'Developer'
      },
    avatar: '',
    skillsAndAbilities: [
      {technical: [{'AWS': 2}, {'Java': 3}]},
      {consulting: [{'communication': 4}, {'planning': 2}, {'questioning': 1}]},
      {domain: [{'government': 1}, {'education': 2}]},
      {testing: [{'capybara': 2}, {'cucumber': 0}, {'fitnesse': 1}]}
    ],
    projectExperience: [{project: 'ThoughtWorks', subProject: 'step', from: "10-02-2017", to: '02-03-2018'}],
    leaveHistory: [{type: 'Annual Leave', from: '1-03-2018', to: '14-03-2018'}]
  },
  {
    basicDetails:
      {
        name: 'Ritesh D',
        gender: 'Male',
        employeeId: 21132,
        currentProject: 'Bahmni',
        homeOffice: 'Hyderabad',
        role: 'Developer'
      },
    avatar: '',
    skillsAndAbilities: [
      {technical: [{'AWS': 3}, {'Java': 4}]},
      {consulting: [{'communication': 4}, {'planning': 3}, {'questioning': 2}]},
      {domain: [{'government': 1}, {'education': 3}]},
      {testing: [{'capybara': 2}, {'cucumber': 0}, {'fitnesse': 2}]}
    ],
    projectExperience: [{project: 'TrainLine', subProject: 'train', from: "10-12-2016", to: '22-03-2017'}],
    leaveHistory: [{type: 'Annual Leave', from: '10-02-2018', to: '11-02-2018'}]
  }];

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

  static saveEmployee(employee) {
    employee = Object.assign({}, employee);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minEmployeeTitleLength = 1;
        if (employee.basicDetails.name.length < minEmployeeTitleLength) {
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

    function getSkillsRatingObjet(skills) {
      let result = {};
      _.each(skills, function (each) {
        result = Object.assign({}, result, _.omit(each, 'subset', 'employeeId'));
      });
      return result;
    }

    //
    // let technical = splitSkillsValues.Technical.length >0 && getSkillsRatingObjet(splitSkillsValues.Technical);
    // let testing = splitSkillsValues.Testing.length > 0 && getSkillsRatingObjet(splitSkillsValues.Testing);
    // let consulting =splitSkillsValues.Consulting.length > 0 && getSkillsRatingObjet(splitSkillsValues.Consulting);
    // let domain =splitSkillsValues.Domain.length > 0 && getSkillsRatingObjet(splitSkillsValues.Domain);


    // return getOnlychild(domain);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        _.each(subset, (eachSubset) => {
          let presubsetData = getSkillsRatingObjet(splitSkillsValues[eachSubset]);
          let subsetData = Object.assign(presubsetData, {employeeId: id});
          axios.post('http://localhost:8080/employee/' + eachSubset, subsetData).then(res => {
            console.log(res);
          })
        });
        resolve(skillsAndAbilities);
      }, delay);
    });
  }

  static updateRatingValue(rating, title, id, template) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let key = Object.keys(title)[0];
        let obj = {};
        obj[key] = rating;
        obj['subset'] = template;
        obj['employeeId'] = id;
        title = Object.assign({}, title, obj);
        resolve(title);
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
