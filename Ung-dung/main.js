class Employee {
    constructor(name, code, email, telephone) {
        this.name = name;
        this.code = code;
        this.email = email;
        this.telephone = telephone;
    }
}

const employee1 = new Employee("Nguyễn Văn A", 10001, "Nguyevana@gmail.com", 1234567);
const employee2 = new Employee("Nguyễn Văn B", 10002, "Nguyevanb@gmail.com", 1134567);

const employeeList = [];
employeeList.push(employee1, employee2);

function displayEmployee() {
    let table = document.getElementById("table");
    let data = ''
    for (let i = 0; i < employeeList.length; i++) {
        data += `<tr>
    <td>${i+1}</td>
    <td>${employeeList[i].name}</td>
    <td>${employeeList[i].code}</td>
    <td>${employeeList[i].email}</td>
    <td>${employeeList[i].telephone}</td>
    <td><button onclick="editEmployee(${i})">Sửa</button>  <button onclick="deleteEmployee(${i})">Xóa</button></td>
</tr>`
    }
    table.innerHTML = data;
}
displayEmployee();

let employeeIndex = -1;

function save() {
    let name = document.getElementById("name").value;
    let code = document.getElementById("code").value;
    let email = document.getElementById("email").value;
    let telephone = document.getElementById("telephone").value;
    let employeeForm = document.getElementById("employeeForm").value
    if (employeeForm !== " ") {
        if (employeeIndex !== -1) {
            employeeList[employeeIndex].name = name;
            employeeList[employeeIndex].code = code;
            employeeList[employeeIndex].email = email;
            employeeList[employeeIndex].telephone = telephone;
        } else {
            const newEmployee = new Employee(name, code, email, telephone);
            employeeList.push(newEmployee);
        }
        displayEmployee();
        document.getElementById("employeeForm").reset();
        employeeIndex = -1;
    }
}

function editEmployee(index) {
    employeeIndex = index;
    document.getElementById("name").value = employeeList[index].name;
    document.getElementById("code").value = employeeList[index].code;
    document.getElementById("email").value = employeeList[index].email;
    document.getElementById("telephone").value = employeeList[index].telephone;
    displayEmployee();
}

function deleteEmployee(index) {
    if (confirm("Bạn có chắc muốn xóa nhân viên này không?")) {
        employeeList.splice(index, 1);
    }
    displayEmployee();
}



