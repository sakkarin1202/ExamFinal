
class University {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.departments = [];
        this.professors = [];
    }

    addDepartment(department) {
        this.departments.push(department);
    }

    addStudent(student) {
        this.students.push(student);
    }

    addProfessor(professor) {
        this.professors.push(professor);
    }

    removeDepartment(department) {
        const index = this.departments.indexOf(department);
        if (index !== -1) {
            this.departments.splice(index, 1);
        }
    }

    removeStudent(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }

    removeProfessor(professor) {
        const index = this.professors.indexOf(professor);
        if (index !== -1) {
            this.professors.splice(index, 1);
        }
    }

    getDepartments() {
        return this.departments;
    }

    getStudents() {
        return this.students;
    }

    getProfessors() {
        return this.professors;
    }

    toString() {
        return ` University${this.name} (Location: ${this.location});` 
    }
}

// Class Department
class Department {
    constructor(name) {
        this.name = name;
        this.courses = [];
        this.students = [];
        this.professors = [];
    }

    addCourse(course) {
        this.courses.push(course);
    }

    removeCourse(course) {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            this.courses.splice(index, 1);
        }
    }

    addStudent(student) {
        this.students.push(student);
    }

    removeStudent(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }

    addProfessor(professor) {
        this.professors.push(professor);
    }

    removeProfessor(professor) {
        const index = this.professors.indexOf(professor);
        if (index !== -1) {
            this.professors.splice(index, 1);
        }
    }

    getCourses() {
        return this.courses;
    }

    getStudents() {
        return this.students;
    }

    getProfessors() {
        return this.professors;
    }

    toString() {
        return ` Department${this.name};` 
    }
}

// Class Course
class Course {
    constructor(code, title) {
        this.code = code;
        this.title = title;
        this.students = [];
        this.professor = null;
    }

    addStudent(student) {
        this.students.push(student);
    }

    removeStudent(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }

    setProfessor(professor) {
        this.professor = professor;
    }

    getProfessor() {
        return this.professor;
    }

    getStudents() {
        return this.students;
    }

    toString() {
        return `Course ${this.code},${this.title}` ;
    }
}

//Class Professor
class Professor {
    constructor(staffId) {
        this.staffId = staffId;
        this.courses = [];
    }

    techCourse(course){
        this.courses.push(course);
        course.setProfessor(this);
    }

    stopTechingCouse(course){
        const index =this.courses.indexOf(course);
        if(index !== -1){
            this.students.splice(index, 1);
        }
    }

    getCourses(){
        return this.courses
    }

    Course(){

    }

    toString(){
        return `Prosesors${this.staffId},${this.courses}`
    }
}



class Student {
    constructor(name, studentId, year) {
        this.name = name;
        this.studentId = studentId;
        this.year = year;
        this.courses = [];
    }

    registerCourse(course) {
        this.courses.push(course);
    }

    dropCourse(courseCode) {
        this.courses = this.courses.filter(course => course.code !== courseCode);
    }

    getCourses() {
        return this.courses
    }

    toString() {
        return  `Student ${this.name}`
    }
}

class Person {
    constructor(name, address, email) {
        this.name = name;
        this.address = address;
        this.email = email;
    }

    toString() {
        return `person[name = ${this.name},address = ${this.address},email = ${this.email}] `
    }
}


const main = () => {
    const university = new University("Nakhon Pathom Rajabhat University", "85 Malaiman Road, Nakhon Pathom, Thailand");
    console.log(university.toString());

    const computerScience = new Department("Computer Science");
    const softwareEngineering = new Department("Software Engineering");
    university.addDepartment(computerScience);
    university.addDepartment(softwareEngineering);
    console.log(computerScience.toString());
    console.log(softwareEngineering.toString());

    const alice = new Student("Alice", "S001", 1);
    const bob = new Student("Bob", "S002", 2);
    console.log(alice.toString());
    console.log(bob.toString());

    const worachet = new Professor("Dr. Worachet Uttha", "P001");
    const udsanee = new Professor("Dr. Udsanee Pakdeetrakulwong", "P002");
    console.log(worachet.toString());
    console.log(udsanee.toString());

    computerScience.addStudent(alice);
    softwareEngineering.addStudent(bob);
    console.log("Added Alice to Computer Science department");
    console.log("Added Bob to Software Engineering department");
    console.log(computerScience.getStudents());
    console.log(softwareEngineering.getStudents());

    computerScience.addProfessor(worachet);
    softwareEngineering.addProfessor(udsanee);
    console.log("Added Professor Worachet to Computer Science department");
    console.log("Added Professor Udsanee to Software Engineering department");
    console.log(computerScience.getProfessors());
    console.log(softwareEngineering.getProfessors());

     const csCourse = new Course("CS101", "Introduction to Programming");
     const seCourse = new Course("SE101", "Introduction to Database Design");
     console.log("Created CS101 - Introduction to Programming course");
     console.log("Created SE101 - Introduction to Database Design course");

    
}

main();