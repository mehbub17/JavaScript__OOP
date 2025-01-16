// Hiding the implementation and showing only the functionality to the user or only essential.


function Employee(name,age,bSalary)
{
    this.name = name;
    this.age = age;
    this.bSalary = bSalary;
    let bonus = 100000;

    this.getEmployeeDetails = function()
    {
        console.log(`Name : ${this.name} \n Age : ${this.age} \n Final Salary :${this.bSalary+bonus}`);
    }
}



const emp1 = new Employee('Mehbub',26,1600000);
// emp1.bonus = 400000;// should not be accessed

emp1.getEmployeeDetails();