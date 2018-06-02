/* eslint-disable no-undef,import/namespace,import/default */
import delay from './delay';
import axios from 'axios';

import avatar from '../resources/images/avatar.svg';

const employees = [
  {
    basicDetails:
      {
        name: 'Abhik Roy',
        gender: 'Male',
        employeeId: 20322,
        currentProject: 'Beach',
        homeOffice: 'Hyderabad',
        role: 'Developer'
      },
    projectExperience: [{project: 'ThoughtWorks', subProject: 'step', from: "10-02-2017", to: '02-03-2018'}],
    leaveHistory: [{type: 'Annual Leave', from: '1-03-2018', to: '14-03-2018'}]
  },
  {
    basicDetails:
      {
        name: 'Ritesh D',
        gender: 'Male',
        employeeId: 20132,
        currentProject: 'Bahmni',
        homeOffice: 'Hyderabad',
        role: 'Developer'
      },
    projectExperience: [{project: 'TrainLine', subProject: 'train', from: "10-12-2016", to: '22-03-2017'}],
    leaveHistory: [{type: 'Annual Leave', from: '10-02-2018', to: '11-02-2018'}]
  }];

const technical = [{employeeId: 20132, skills: [{'AWS': 2}, {'Java': 3}]}];
const consulting = [{
  employeeId: 20322,
  skills: [{'Communication': 4}, {'Executive Advisory': 2}, {'Facilitation': 1}]
}];
const domain = [{
  employeeId: 20132,
  skills: [{'Business Services': 1}, {'Computers & Electronics': 3}, {'Consumer Services': 3, 'Education': 2}]
}];
const testing = [{employeeId: 20322, skills: [{'Capybara': 2}, {'Cucumber': 0}, {'Fitnesse': 1}]}];

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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(skillsAndAbilities);
      }, delay);
    });
  }

  static updateRating(rating, title) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let key = Object.keys(title)[0];
        let obj = {};
        obj[key] = rating;
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
