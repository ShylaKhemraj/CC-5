//U20026580

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;

        console.log('Name: ${this.name}');
        console.log('Monthly Salary: ${this.salary}');
    }

    //Calculating annual salary
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super (name, salary);
        this.department = department;
    }

    //Override annual salary with 15% bonus
    calculateAnnualSalary() {
        const annualSalary = super.calculateAnnualSalary();
        const bonus = annualSalary * 0.15;
        const totalAnnualSalary = annualSalary + bonus;
        console.log('Bonus: ${bonus');
        console.log('Total Annual Salary (including bonus): $totalAnnualSalary}');
        return totalAnnualSalary;
    }
}
 //Test Data

 const manager1 = new Manager("Bob Ross", 6600, "Digital Marketing");
 const manager2 = new Manager("Debbie Little", 7205, "Finance");

 //Calculate test data annual salaries including bonuses

 console.log('Annual Salary for ${manager1.name}: ${manager1.calculateAnnualSalary()}');
 console.log('Annual Salary for ${manager2.name}: ${manager2.calculateAnnualSalary()}');

 return totalAnnualSalary.manager1;
 return totalAnnualSalary.manager2;

 