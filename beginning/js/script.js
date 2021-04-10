// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm');
let newEmp = document.querySelector('#employees');
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = document.querySelector('#empCount');
let counting = document.querySelector('#employees');
counting.getElementsByTagName('tr').length;
count.appendChild(document.createTextNode("(" + counting + ")"));




// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let empId = document.querySelector('#id').value;
    let empName = document.querySelector('#name').value;
    let empExt = document.querySelector('#extension').value;
    let empEmail = document.querySelector('#email').value;
    let empDept = document.querySelector('#department').value;
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = employees.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellExt = row.insertCell(2);
    let cellEmail = row.insertCell(3);
    let cellDept = row.insertCell(4);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(empId));
    cellName.appendChild(document.createTextNode(empName));
    cellExt.appendChild(document.createTextNode(empExt));
    cellEmail.appendChild(document.createTextNode(empEmail));
    cellDept.appendChild(document.createTextNode(empDept));
    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    row.appendChild(deleteBtn);
    // RESET THE FORM
    document.querySelector('#id').value = '';
    document.querySelector('#name').value = '';
    document.querySelector('#extension').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#department').value = '';

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
   

});

// DELETE EMPLOYEE
newEmp.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if(confirm('Are you sure you want to delete?')) {
            newEmp.deleteRow(e.target.classList.contains('delete'));
        }
    }
});