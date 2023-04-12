//complete this code
class Person {
	Constructo(name,age){
	this.name=name;
	this.age=age;
	}

	get getName(name){
		console.log(this.name);
	}

	set setAge(age){
		console.log(this.age);
	}
}

class Student extends Person {
	study(){
		console.log(this.name + " is studying");
	}
}

class Teacher extends Person {
	teach(){
		console.log(this.name+ " is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
