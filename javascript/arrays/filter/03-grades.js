const { STUDENTS } = require('../data');

/**
 * @param {Array} students
 * @param {number} minGrade
 */
const approvedStudents = (students, minGrade) => students.filter((student) => student.grade >= minGrade);

console.log(approvedStudents(STUDENTS, 90));
