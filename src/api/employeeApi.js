import delay from './delay';

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

const technical = ['AWS', 'Java', 'Ansible', 'C#', 'C++'];

const homeOffices = ["Hyderabad-India", "Bangalore-India", "Chennai-India", "Pune-India", "Gurgaon-India"];
const gender = ['Man', 'Woman'];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
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
        resolve(employee);
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
}

export default EmployeeApi;
