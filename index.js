// Write your solution in this file!
const employee = {
	name: "Sam",
	streetAddress: "11 Broadway",
};


let updateEmployeeWithKeyAndValue = (employee, key, value) => Object.assign({}, employee, { [key]: value })


let destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => { employee[key] = value; return employee; }

let deleteFromEmployeeByKey = (employee, key) => {
	const newEmployee = Object.assign({}, employee);
	delete newEmployee[key];
	return newEmployee;
}

let destructivelyDeleteFromEmployeeByKey = (employee, key) => {
	delete employee[key];
	return employee;
}
