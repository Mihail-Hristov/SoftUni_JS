function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs>textarea');


   function onClick () {

   let arr = JSON.parse(input.value);

      const restaurants = {};
      
      for (const item of arr) {
         let tokens = item.split(' - ');
         let name = tokens[0];
         let workersArr = tokens[1].split(', ');
         workers = [];
         
         for (const el of workersArr) {
            let elTokens = el.split(' ');
            let name = elTokens[0];
            let salary = Number(elTokens[1]);

            let wObj = {
               name,
               salary
            }

            workers.push(wObj)
         }

         if(restaurants[name]) {
            workers = restaurants[name].workers.concat(workers);
         }

         workers = workers.sort((a,b) => b.salary - a.salary);
         let bestSalary = workers[0].salary;
         let avarSal = (workers.reduce((sum, sal) => sum + sal.salary, 0)) / workers.length;          
         
         
         restaurants[name] = {
            workers,
            bestSalary,
            avarSal,
         }
      }

      let bestRest = {};
      let bestSalary = 0;

      for (const key in restaurants) {
         if(restaurants[key].avarSal > bestSalary) {
            bestRest = {
               name: key,
               workers: restaurants[key].workers,
               bestSalary: restaurants[key].bestSalary.toFixed(2),
               avarSal: restaurants[key].avarSal.toFixed(2),
            }

            bestSalary = restaurants[key].avarSal;
         }
      }

      let result = [];

      for (const wor of bestRest.workers) {
         result.push(`Name: ${wor.name} With Salary: ${wor.salary}`);
      }

      document.querySelector('#outputs p').textContent = `Name: ${bestRest.name} Average Salary: ${bestRest.avarSal} Best Salary: ${bestRest.bestSalary}`;

      document.querySelector('#workers p').textContent = result.join(' ');
      console.log(restaurants);
      
   }
}