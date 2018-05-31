import delay from './delay';
import axios from 'axios';

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
    avatar: '',
    skillsAndAbilities: [
      {technical: [{'AWS': 2}, {'Java': 3}]},
      {consulting: [{'Communication': 4}, {'Executive Advisory': 2}, {'Facilitation': 1}]},
      {domain: [{'Business Services': 1}, {'Computers & Electronics': 3}, {'Consumer Services': 3, 'Education': 2}]},
      {testing: [{'Capybara': 2}, {'Cucumber': 0}, {'Fitnesse': 1}]}
    ],
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
    avatar: '',
    skillsAndAbilities: [
      {technical: [{'AWS': 3}, {'Java': 4}]},
      {consulting: [{'Communication': 3}, {'Executive Advisory': 2}, {'Facilitation': 3}]},
      {domain: [{'Business Services': 1}, {'Computers & Electronics': 3}, {'Consumer Services': 5}, {'Education': 4}]},
      {testing: [{'Capybara': 2}, {'Cucumber': 5}, {'Fitnesse': 4}]}
    ],
    projectExperience: [{project: 'TrainLine', subProject: 'train', from: "10-12-2016", to: '22-03-2017'}],
    leaveHistory: [{type: 'Annual Leave', from: '10-02-2018', to: '11-02-2018'}]
  }];

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
        // axios.post('http://localhost:8080/employee', employee).then(res => {
        //   resolve(employee);
        // })
        //   .catch(error => {
        // });
        resolve(employee);
      }, delay);
    });
  }

  static saveSkillsAndAbilities(skillsAndAbilities, id) {
    // skillsAndAbilities = Object.assign({}, skillsAndAbilities);
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
        resolve(avatar);
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
}

export default EmployeeApi;
