function search() {
   let cities = document.querySelectorAll("#towns li");
   let searchFor = document.getElementById('searchText').value;

   for (const item of cities) {
      item.style.fontWeight = 'normal';
      item.style.textDecoration = 'none';
   }

   let count = 0;

   for (let i = 0; i < cities.length; i++) {
      if(cities[i].textContent.includes(searchFor)) {
         count += 1;
         cities[i].style.fontWeight = 'bold';
         cities[i].style.textDecoration = 'underline';
      }
   }

   document.getElementById('result').textContent = `${count} matches found`;
}
