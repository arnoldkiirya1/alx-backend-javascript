// 101-iterateThroughObject.js

export default function iterateThroughObject(reportWithIterator) {
  const resultArray = [];
  for (const employee of reportWithIterator) {
    resultArray.push(employee.value);
  }
  return resultArray.join(' | ');
}
