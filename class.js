let Student = require("./student");
const inquirer = require("inquirer");
//let students;
let students = [];
let classes = [];

function Class() {
  this.students = students;
  this.numStudents = students.length;
  this.prof = 'Dr Carl';
  this.roomNo = 412;

  this.printInfo = function() {
    console.log(
      `Number of Students: ${this.numStudents} \nProfessor: ${
        this.prof
      } \nRoom No: ${this.roomNo}`
    );
    console.log('\nClass List:')
    for (let i = 0; i < students.length; i++) {
        console.log(`\n${JSON.stringify(students[i])}`)
    }
  };
}

// Class.prototype.printInfo = function() {
//   console.log(
//     `Number of Students: ${this.numStudents} \nProfessor: ${
//       this.prof
//     } \nRoom No: ${this.roomNo}`
//   );
// };

function addStudent() {
  inquirer
    .prompt([
      {
        name: "name",
        message: "What is the students name?"
      },
      {
        name: "favSubject",
        message: "What is their favorite subject?"
      },
      {
        name: "gpa",
        message: "What is their gpa?"
      }
    ])
    .then(function(answers) {
      let newStudent = new Student(
        answers.name,
        answers.favSubject,
        answers.gpa
      );
      students.push(new Student(answers.name, answers.favSubject, answers.gpa));
      newStudent.printInfo();
      inquirer
        .prompt([
          {
            name: "confirm",
            type: "confirm",
            message: "Add another student?"
          }
        ])
        .then(function(answer) {
          if (answer.confirm === true) {
            addStudent();
          } else {
            // for (let i = 0; i < students.length; i++) {
            //   console.log(`\n${JSON.stringify(students[i])}`);
            // }
            let newClass = new Class();

           newClass.printInfo();
           
          }
         
        });
        // Class.printInfo();
    });

   // Class.printInfo();
}

module.exports = Class;

addStudent();
//Class.printInfo();
