function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = document.querySelectorAll("table tbody tr");
      let searchingText = document.getElementById('searchField').value;

      for (const element of rows) {
         element.classList.remove('select');
      }

      for (const element of rows) {
         let cells = element.childNodes;

         for (const el of cells) {
            if (el.textContent.includes(searchingText)) {
               element.classList.add('select');
            }
         }
      }
   }
}