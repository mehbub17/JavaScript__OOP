class Employee{
    setEmployeeDetails(name,id,phone)
    {
        this.name = name;
        this.id = id;
        this.phone = phone;
    }

    getEmployeeName()
    {
        return this.name;
    }
    getEmployeeId()
    {
        return this.id;
    }
    getEmployeeContact()
    {
        return this.phone;
    }
}


const emp1 = new Employee();
emp1.setEmployeeDetails('Mehbub',26,9011938085);
console.log(emp1.getEmployeeName());