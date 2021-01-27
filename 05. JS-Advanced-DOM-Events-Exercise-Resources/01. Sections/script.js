function create(words) {
   
   let parentDiv = document.getElementById('content');
   document.getElementById('content').addEventListener('click', show);

   for (const word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      parentDiv.appendChild(div);
   }

   function show(ev) {
      ev.target.firstChild.style.display = '';
   }
}