// 100-createIteratorObject.js

export default function createIteratorObject(report) {
  let departments = Object.values(report.allEmployees);
  let employees = [];
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentEmployeeIndex < departments[currentDepartmentIndex].length) {
        const result = {
          value: departments[currentDepartmentIndex][currentEmployeeIndex],
          done: false,
        };
        currentEmployeeIndex++;
        return result;
      } else if (currentDepartmentIndex < departments.length - 1) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
        return this.next();
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
