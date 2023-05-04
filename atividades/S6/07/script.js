// departmentList[0].employees[0].age

const departmentList = [
    {
        departmentName: 'Financial',
        employees:
            [
                {
                    name: 'Rose',
                    age: 26,
                    responsibility: 'Financial director',
                    salary: 5600
                },
                {
                    name: 'Stevem',
                    age: 32,
                    responsibility: 'Financial manager',
                    salary: 4200
                },
                {
                    name: 'Beca',
                    age: 26,
                    responsibility: 'Financial analyst',
                    salary: 2800
                }
            ],
        working: true
    },
    {
        departmentName: 'Expedition',
        employees:
            [
                {
                    name: 'Rooper',
                    age: 35,
                    responsibility: 'Expedition director',
                    salary: 5600
                },
                {
                    name: 'Maggie',
                    age: 22,
                    responsibility: 'Expedition manager',
                    salary: 4200
                },
                {
                    name: 'Thompson',
                    age: 41,
                    responsibility: 'Expedition analyst',
                    salary: 2800
                }
            ],
        working: true
    },
    {
        departmentName: 'Capitation',
        employees:
            [
                {
                    name: 'Saory',
                    age: 35,
                    responsibility: 'Capitation director',
                    salary: 5600
                },
                {
                    name: 'Silvia',
                    age: 22,
                    responsibility: 'Capitation manager',
                    salary: 4200
                },
                {
                    name: 'Sonem',
                    age: 41,
                    responsibility: 'Capitation analyst',
                    salary: 2800
                },
                {
                    name: 'Havi',
                    age: 41,
                    responsibility: 'Trainee Capitation manager',
                    salary: 1500
                },
                {
                    name: 'Margie',
                    age: 25,
                    responsibility: 'Capitation analyst',
                    salary: 2800
                },
                {
                    name: 'Victoria',
                    age: 18,
                    responsibility: 'Trainee Capitation analyst',
                    salary: 1500
                }
            ],
        working: true
    },
]

function howManyDepartments() {
    return departmentList.length
}
// console.log(howManyDepartments());


function changeDepartmentName(oldName, newName) {

    for (let i = 0; i < departmentList.length; i++) {

        if (oldName.toLowerCase() === departmentList[i].departmentName.toLowerCase()) {
            departmentList[i].departmentName = newName
            return `Department name changed to "${newName}"`
        }
    }
    return "Department not found."
}

// console.log(changeDepartmentName('capitation', 'Money'));

function giveTheDepartmentABreak(departmentToChange) {

    for (let i = 0; i < departmentList.length; i++) {

        if (departmentList[i].departmentName.toLowerCase() === departmentToChange.toLowerCase()) {
            departmentList[i].working = !departmentList[i].working
            if (departmentList[i].working == true) {
                return `The status of department "${departmentList[i].departmentName}" is "Working"`
            }
            return `The status of department "${departmentList[i].departmentName}" is "Not Working"`
        }
    }
    return "Department not found."
}

// console.log(giveTheDepartmentABreak('financial'));

function howManyEmployeesInDepartment(departmentToCount) {

    for (let i = 0; i < departmentList.length; i++) {

        if (departmentList[i].departmentName.toLowerCase() === departmentToCount.toLowerCase()) {
            return `This departmen has ${departmentList[i].employees.length} employees.`
        }
    }
    return "Departament not found."
}

// console.log(howManyEmployeesInDepartment('financial'));
// console.log(howManyEmployeesInDepartment('aaa'));
// console.log(howManyEmployeesInDepartment('capitation'));

function insertNewEmployeeInDepartment(departmentToInsert, newEmployee) {
    for (let i = 0; i < departmentList.length; i++) {
        if (departmentList[i].departmentName.toLowerCase() === departmentToInsert.toLowerCase()) {
            departmentList[i].employees.push(newEmployee);
            return departmentList[i]
        }
    }
    return "Departament not found."
}

console.log(insertNewEmployeeInDepartment('financial', {
    name:'Rosemary',
    age: 44,
    responsibility: 'Financial expedition director',
    salary: 1560
  }))