import delay from './delay';
import axios from 'axios';

const employees = [
  {
    name: 'Abhik Roy',
    gender: 'Man',
    employeeId: 20312,
    currentProject: 'Beach',
    homeOffice: 'Hyderabad',
    role: 'Developer',
    avtarData: ''
  }, {
    name: 'Amrita Roy',
    employeeId: 20314,
    gender: 'Woman',
    currentProject: 'Core',
    homeOffice: 'Hyderabad',
    role: 'Developer',
    avtarData: ''
  }
];

const homeOffices = ["Hyderabad-India", "Bangalore-India", "Chennai-India", "Pune-India", "Gurgaon-India"];
const gender = ['Male', 'Female'];

const skillsAndAbilities = [
  {Technical: [{'AWS': 3}, {'Java': 4}]},
  {Consulting: [{'Communication': 3}, {'Executive Advisory': 2}, {'Facilitation': 3}]},
  {Domain: [{'Business Services': 1}, {'Computers & Electronics': 3}, {'Consumer Services': 5, 'Education': 4}]},
  {Testing: [{'Capybara': 2}, {'Cucumber': 5}, {'Fitnesse': 4}]}
];

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
        if (employee.name.length < minEmployeeTitleLength) {
          reject(`Title must be at least ${minEmployeeTitleLength} characters.`);
        }
        axios.post('http://localhost:8080/employee', employee).then(res => {
          resolve(employee);
        }).catch(error => {
        });
      }, delay);
    });
  }

  static saveRating(rating, title) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({rating: rating, title: title});
      }, delay);
    });
  }

  static getRatingList() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve(Object.assign([], rating));
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

  static saveAvatar(avatar) {
    // avatar = Object.assign({}, avatar);
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
