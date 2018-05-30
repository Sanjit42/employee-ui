import delay from './delay';
import axios from 'axios';

const employees = [
  {
    basicDetails:
      {
        name: 'Abhik Roy',
        gender: 'Male',
        employeeId: 20312,
        currentProject: 'Beach',
        homeOffice: 'Hyderabad',
        role: 'Developer'
      },
    avatar: '',
    skillsAndAbilities: [{technical: [{'AWS': 4}, {'Java': 2}]}],
    projectExperience: [{project: 'ThoughtWorks', subProject: 'step', from: "10-02-2017", to: '02-03-2018'}],
    leaveHistory: [{type: 'Annual Leave', from: '1-03-2018', to: '14-03-2018'}]
  },
  {
    basicDetails:
      {
        name: 'Ritesh D',
        gender: 'Man',
        employeeId: 20332,
        currentProject: 'Bahmni',
        homeOffice: 'Hyderabad',
        role: 'Developer'
      },
    avatar: '',
    skillsAndAbilities: [{technical: [{'AWS': 3}, {'Java': 5}]}],
    projectExperience: [{project: 'TrainLine', subProject: 'train', from: "10-12-2016", to: '22-03-2017'}],
    leaveHistory: [{type: 'Annual Leave', from: '10-02-2018', to: '11-02-2018'}]
  }];

const homeOffices = ["Hyderabad-India", "Bangalore-India", "Chennai-India", "Pune-India", "Gurgaon-India"];
const gender = ['Man', 'Woman'];

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
