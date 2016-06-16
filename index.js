'use strict';
const  student = {
    id: '562115036',
    name: 'nep'
};

const  student1 = {
    id: '562115037',
    name: 'que'
};

const  student2 = {
    id: '562115038',
    name: 'toey'
};

const  student3 = {
    id: '562115039',
    name: 'who'
};
const students = [student,student2,student3]
const getstudentById = (id,name) => {
 switch (id){
     case '562115036':
         return 'good';
     case '562115037':
         return'bad';
 }
};

console.log(getstudentById('562115036'));