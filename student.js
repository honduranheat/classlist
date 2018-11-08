function Student (name, favSubject, gpa) {
    this.name = name;
    this.favSubject = favSubject;
    this.gpa = gpa;
}

Student.prototype.printInfo = function() {
    console.log(`Students name: ${this.name} \nStudents favorite subject: ${this.favSubject} \nStudents gpa: ${this.gpa}`);
};

module.exports = Student;