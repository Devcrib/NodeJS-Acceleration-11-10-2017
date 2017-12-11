const LOWER_QUARTILE = 1;
const MEDIAN_QUARTILE = 2;
const UPPER_QUARTILE = 3;
const students = require('./data.json');

class GradeSystem{
  constructor(students){
    this.students = students || [];
  }

  classifyByGrades(){
    let grades = {
      'A' : [],
      'B' : [],
      'C' : [],
      'D' : [],
      'E' : [],
      'F' : []
     }
    this.students.map( function(student){
      if(student.score >= 0 < 40) {grades.F.push(student); return;}
      if(student.score < 45) {grades.E.push(student); return;}
      if(student.score < 50) {grades.D.push(student); return;}
      if(student.score < 60) {grades.C.push(student); return;}
      if(student.score < 75) {grades.B.push(student); return;}
      if(student.score >= 75 <= 100) {grades.A.push(student); return;}
      return;
    });
    return grades;
  }

  quartile(type){
    let scores = this.students
                      .map( (student) => student.score )
                      .sort( (a,b) => a - b );

    if(type === LOWER_QUARTILE) return LowerQuatile();
    if(type === MEDIAN_QUARTILE) return medianQuratile();
    if(type === UPPER_QUARTILE) return upperQuartile();
    if(type === undefined) return null;
    function LowerQuatile(){
      return scores[Math.round((scores.length + 1) / 4)];
    }

    function upperQuartile(){
      return scores[Math.round( ( 3 * (scores.length + 1)  ) / 4)]; 
    }

    function medianQuratile(){
      return scores[Math.round((scores.length + 1) / 2)];
    }

  }

  predominantGrade(){
    let grades = this.classifyByGrades();
    let highestGrade = null;
    for (const grade in grades) {
      if (grades.hasOwnProperty(grade)) {
        if(highestGrade === null) highestGrade = grade;
        else if(grades[grade].length > grades[highestGrade].length) highestGrade = grade;
      }
    }

    return highestGrade;
  }

}



var school = new GradeSystem(students);

console.log(school.quartile(UPPER_QUARTILE));
