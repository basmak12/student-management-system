import inquirer from "inquirer"

class school {
    name:string;

    students: student[]=[];
    teachers: teacher[]=[];

    addStudent(studObj:student){
        this.students.push(studObj)
    }
    addTeacher(tObj:teacher){
        this.teachers.push(tObj)
    }
    constructor(name:string) {
        this.name = name;
    }
}

class student{
    name: string;
    age:number;
    schoolName:string;
    constructor(name:string,age:number,schoolName:string) {
    this.name = name;
    this.age = age;
    this.schoolName = schoolName;
    }
}
class teacher extends student{}

let school1 = new school("Happy Place")
let school2 = new school("Karachi Academy")
let school3 = new school("PakLand")


let student1 = new student("Ayan", 6, school1.name)
let student2 = new student("Brishna", 8, school2.name)
let student3 = new student("Sadia", 13, school3.name)



let teacher1 = new teacher("Ashraf", 25, school1.name)
let teacher2 = new teacher("Parveen", 30, school2.name)
let teacher3 = new teacher("Kabir", 28, school3.name)


school1.addStudent(student1)
school2.addStudent(student2)
school3.addStudent(student3)

school1.addTeacher(teacher1)
school2.addTeacher(teacher2)
school3.addTeacher(teacher3)

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

console.log(school1);
console.log(school2);
console.log(school3);


