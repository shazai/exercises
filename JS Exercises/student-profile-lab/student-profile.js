// ------------------------------------
// Hands-on Lab 2
// Student Profile Data
// ------------------------------------
// Student variables
const studentName = "Natassha Pauline Cua";
let studentAge = 40;
const course = "Full Stack Web Development";
const isEnrolled = true;

// Technologies to learn
const technologies = [
"HTML",
"CSS",
"JavaScript",
"Bootstrap",
"Node.js"
];

// Student object
const student = {
name: studentName,
age: studentAge,
course: course,
enrolled: isEnrolled,
technologies: technologies
};

// Display the student object
console.log(student);

// Meaningful sentences using template literals
console.log(`My name is ${student.name}.`);
console.log(`${student.name} is ${student.age} years old.`);
console.log(`${student.name} is taking the ${student.course}course.`);
console.log(`${student.name} plans to learn ${student.technologies.join(", ")}.`);

// Friendly enrollment message
const enrollmentMessage = student.enrolled
? "currently enrolled"
: "not enrolled";
console.log(`${student.name} is ${enrollmentMessage} in the ${student.course} course.`);

// Change a variable declared with let
console.log(`Original age: ${studentAge}`);
14
studentAge = 21;
console.log(`Updated age: ${studentAge}`);

// Update the age stored in the object
student.age = studentAge;
console.log(
`${student.name}'s updated age is ${student.age}.`
);