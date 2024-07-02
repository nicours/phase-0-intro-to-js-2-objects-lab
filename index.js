// Initialize employee object
let employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
};

// Function to update employee non-destructively
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Function to update employee destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to delete property from employee non-destructively
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to delete property from employee destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// Testing
console.log('Initial employee:', employee);

// Test updateEmployeeWithKeyAndValue()
employee = updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Smith');
console.log('After updateEmployeeWithKeyAndValue:', employee);

// Test destructivelyUpdateEmployeeWithKeyAndValue()
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Elm St');
console.log('After destructivelyUpdateEmployeeWithKeyAndValue:', employee);

// Test deleteFromEmployeeByKey()
let newEmployee = deleteFromEmployeeByKey(employee, 'name');
console.log('After deleteFromEmployeeByKey (non-destructive):', newEmployee);
console.log('Original employee:', employee);

// Test destructivelyDeleteFromEmployeeByKey()
destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
console.log('After destructivelyDeleteFromEmployeeByKey:', employee);

