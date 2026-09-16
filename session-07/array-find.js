const students = [
    {id: 101, studentName:"Domar"}, 
    {id: 102, studentName:"Peter"},  
    {id: 103, studentName:"Iris"},   
];

const student = students.find(student =>{
    return student.id === 101;
});

console.log(student);