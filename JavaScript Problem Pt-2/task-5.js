/* For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

const employees = [
           { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
           { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
           { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
           { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
       ]; */

function salaryCalculator(employees) {
  let perMonthSalary = 0;
  for (let employee of employees) {
    const singlePersonPerMonthSalary =
      employee.experience * employee.increment + employee.starting;
    perMonthSalary += singlePersonPerMonthSalary;
  }
  return perMonthSalary;
}

/**Optional Getting highest paid employee salary*/

function getHighestPaidEmployee(employees) {
  let highestPaidEmployee = employees[0];
  for (let employee of employees) {
    const regularEmployeeSalary =
      employee.increment * employee.experience + employee.starting;

    const highestPaidEmployeeSalary =
      highestPaidEmployee.increment * highestPaidEmployee.experience +
      highestPaidEmployee.starting;

    if (regularEmployeeSalary > highestPaidEmployeeSalary) {
      highestPaidEmployee = employee;
    }
  }
  const totalSalaryHighestPaid =
    highestPaidEmployee.increment * highestPaidEmployee.experience +
    highestPaidEmployee.starting;
  return {
    ...highestPaidEmployee,
    totalSalaryHighestPaid: totalSalaryHighestPaid,
  };
}

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

/* Optional: Highest paid Employees salary Output */
const highestPaidEmployeeSalary = getHighestPaidEmployee(employees);
console.log("The highest paid employee salary is:", highestPaidEmployeeSalary);

const totalSalaryEachMonth = salaryCalculator(employees);
console.log(
  "Total Salary For All Employees per month is:",
  totalSalaryEachMonth,
);
