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
const gender = ['Man', 'Woman'];
const technical = ['AWS', 'Java'];
const consulting = ['Communication', 'Executive Advisory', 'Facilitation'];
const domain = ['Business Services', 'Computers & Electronics', 'Consumer Services', 'Education'];
const testing = ['Capybara', 'Cucumber', 'Fitnesse'];

const rating = [
  {technical: 'AWS', rating: 3},
  {technical: 'Java', rating: 4},
  {consulting: 'Communication', rating: 3},
  {consulting: 'Executive Advisory', rating: 2},
  {consulting: 'Facilitation', rating: 3},
  {domain: 'Business Services', rating: 1},
  {domain: 'Computers & Electronics', rating: 3},
  {domain: 'Consumer Services', rating: 5},
  {domain: 'Education', rating: 4},
  {testing: 'Capybara', rating: 2},
  {testing: 'Cucumber', rating: 5},
  {testing: 'Fitnesse', rating: 4}

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
        resolve(Object.assign([], rating));
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

  static getTechnical() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], technical));
      }, delay);
    });
  }

  static getConsulting() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], consulting));
      }, delay);
    });
  }

  static getDomain() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], domain));
      }, delay);
    });
  }

  static getTesting() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], testing));
      }, delay);
    });
  }
}

export default EmployeeApi;
