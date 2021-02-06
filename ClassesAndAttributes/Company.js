class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        if (!username) {
            throw new Error('Invalid input!');
        } else if (salary <= 0) {
            throw new Error('Invalid input!');
        } else if (!position) {
            throw new Error('Invalid input!');
        } else if (!department) {
            throw new Error('Invalid input!');
        }

        let currentEmployee = {
            username: username,
            salary: Number(salary),
            position: position
        }



        if (this.departments[department] == undefined) {
            this.departments[department] = [];
        }
        this.departments[department].push(currentEmployee);


        return `New employee is hired. Name: ${username}. Position: ${position}`
    }

    bestDepartment() {
        let best = '';
        let bestAvrSel = 0;

        Object.entries(this.departments).forEach(([key, value]) => {
            let salary = 0;
            value.forEach(s => {
                salary += s.salary;
            })

            salary = salary / value.length;
            if (salary > bestAvrSel) {
                best = key;
                bestAvrSel = salary;
            }
        })

        if (best != '') {
            let result = `Best Department is: ${best}\nAverage salary: ${bestAvrSel.toFixed(2)}\n`
            this.departments[best].sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username)).forEach(e => {
                result += `${e.username} ${e.salary} ${e.position}\n`;
            });
            return result.trim();
        }
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());