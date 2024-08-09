// Using var to declare students array
var studentList = [];
// Function to add a new student
function addNewStudent() {
// Create a new student object using let
let newStudent = {
studentId: studentList.length + 1,
studentName: "Student " + (studentList.length + 1)
};
// Add the new student to the studentList array
studentList.push(newStudent);
// Display the updated student list
showStudents();
// Perform math operations using the new student's ID
calculateMathOperations(newStudent.studentId);
}
// Function to display students
function showStudents() {
var container = document.getElementById('studentContainer');
container.innerHTML = '';
// Loop through studentList array and display each student
for (let i = 0; i < studentList.length; i++) {
    let student = studentList[i];
    container.innerHTML += '<p>Student ID: ' + student.studentId + ', Name: ' + student.studentName + '</p>';
}
}
// Function to perform math operations
function calculateMathOperations(id) {
// Define a constant value for operations
var constantValue = 4;
// Perform arithmetic operations
var sum = id + constantValue;            // Addition
var difference = id - constantValue;     // Subtraction
var product = id * constantValue;        // Multiplication
var quotient = id / constantValue;       // Division
var remainder = id % constantValue;      // Modulus
// Display results
var resultsDiv = document.getElementById('mathResults');
resultsDiv.innerHTML = `
    <p>Addition (ID + constantValue): ${sum}</p>
    <p>Subtraction (ID - constantValue): ${difference}</p>
    <p>Multiplication (ID * constantValue): ${product}</p>
    <p>Division (ID / constantValue): ${quotient}</p>
    <p>Modulus (ID % constantValue): ${remainder}</p>
`;
// Trigger animation
resultsDiv.classList.add("visible");
}