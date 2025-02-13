class Bank {
    constructor(nameOfTheCompany, oborot, place) {
        this.nameOfTheCompany = nameOfTheCompany;
        this.oborot = oborot;
        this.place = place;
    }
}

class Company extends Bank {
    constructor(nameOfTheCompany, oborot, place, department, popular) {
        super(nameOfTheCompany, oborot, place);
        this.department = department;
        this.popular = popular;
    }
}

class Employees extends Bank {
    constructor(nameOfTheCompany, oborot, place,department, experience, salary) {
        super(nameOfTheCompany, oborot, place); 
        this.department=department
        this.experience = experience; 
        this.salary = salary;
    }
}

const saima = new Bank('Saima', 700000, 'str Chui 12');
console.log(saima);

const beeline = new Company('Beeline', 900000, 'str Kurmanjan Datka 18', 'IT', true);
console.log(beeline);

const employee = new Employees('Mega', 50000, 'mikro-raion','Managment','five years', 100000); 
console.log(employee);

