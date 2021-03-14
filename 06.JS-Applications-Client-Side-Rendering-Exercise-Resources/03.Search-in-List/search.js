import { towns } from './towns.js'
import { html, render } from '../node_modules/lit-html/lit-html.js'


const loadTowns = (data, searchFor) => html`
   <article>   
   <div id="towns">
            <ul>
            ${data.map(t => html`<li class=${searchFor && (t.toLowerCase().includes(searchFor.toLowerCase())) ? 'active' : ''}>${t}</li>`)}
            </ul>
      </div>
      <input type="text" id="searchText" />
      <button @click="${search}">Search</button>
      <div id="result">${count(data, searchFor)}</div>
      </article>
   `;


const body = document.querySelector('body');
load();

function load(searchFor = '') {
   const list = loadTowns(towns, searchFor);
   render(list, body);
}

function search(ev) {
   const field = document.getElementById('searchText');
   const searchFor = field.value;
   field.innerHTML = '';

   load(searchFor);
}

function count(towns, searchFor) {
   const matches = towns.filter(t => searchFor && (t.toLowerCase().includes(searchFor.toLowerCase()))).length;
   if (matches) {
      return `${matches} matches found`;
   }else {
      return '';
   }
}


