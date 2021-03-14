import { html, render } from '../node_modules/lit-html/lit-html.js'

async function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const url = 'http://localhost:3030/jsonstore/advanced/table';
   const response = await fetch(url);
   const data = await response.json();

   if (!response.ok) {
      return alert(data.message);
   }

   const table = Object.values(data);

   const final = createTable(table, '');
   const tbody = document.querySelector('tbody');
   render(final, tbody)

   function onClick() {
      const input = document.getElementById('searchField');
      const searchFor = input.value;
      input.value = '';

      const final = createTable(table, searchFor);
      render(final, tbody)
   }
}

function createTable(data, searct) {
   const create = (data, search) => html`
   ${data.map(t => html`
   <tr class=${search && (t.email.toLowerCase().includes(search.toLowerCase())
      || t.firstName.toLowerCase().includes(search.toLowerCase())
      || t.lastName.toLowerCase().includes(search.toLowerCase())
      || t.course.toLowerCase().includes(search.toLowerCase())) ? 'select' : ''}>
      <td>${t.firstName} ${t.lastName}</td>
      <td>${t.email}</td>
      <td>${t.course}</td>
   </tr>`)}
   `;

   return create(data, searct)
}


solve()