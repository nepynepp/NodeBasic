'use strict';

const  student1 = {
    id: '562115036',
    name: 'nep',
    grade: '4.00'
};

const  student2 = {
    id: '562115038',
    name: 'toey',
    grade: '1.98'
};

const  student3 = {
    id: '562115039',
    name: 'who',
    grade: '2.45'
};
const students = [student1,student2,student3]

const getStudentById = (id) => {
    console.log(students
        .filter(student => student.id == id)
        .map(student => 'This is student number : ' + student.id)
        .pop());
};

const isSomeStudentHasGradeGreaterThan2 = () => {
    return students.some(student => student.grade > 2.0);
}
//getStudentById('562115038');
//console.log(isSomeStudentHasGradeGreaterThan2());

const  numbers = [1,2,3];
const  sum = numbers.reduce((total,nextValue) => total+nextValue,10);
console.log(sum);