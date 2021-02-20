function solve() {
   let createBtn = document.getElementsByClassName('btn create')[0];

   let contentArea = document.getElementsByClassName('site-content')[0];
   let archiveArea = document.getElementsByClassName('archive-section')[0].lastElementChild;

   createBtn.addEventListener('click', create);

   function create(ev) {
      ev.preventDefault();

      let name = document.getElementById('creator').value;
      let title = document.getElementById('title').value;
      let category = document.getElementById('category').value;
      let content = document.getElementById('content').value;

      

      document.getElementById('creator').value = '';
      document.getElementById('title').value = '';
      document.getElementById('category').value = '';
      document.getElementById('content').value = '';

      let article = createEl('article');

      let h1 = createEl('h1', title);
      article.appendChild(h1);

      let strongCat = createEl('strong', category);
      let pCat = createEl('p', 'Category:');
      pCat.appendChild(strongCat);
      article.appendChild(pCat);

      let strongName = createEl('strong', name);
      let pCr = createEl('p', 'Creator:');
      pCr.appendChild(strongName)
      article.appendChild(pCr);

      let pContent = createEl('p', content);
      article.appendChild(pContent);

      let deleteBtn = createEl('button', 'Delete');
      let archiveBtn = createEl('button', 'Archive');

      deleteBtn.classList.add('btn', 'delete');
      archiveBtn.classList.add('btn', 'archive');

      archiveBtn.addEventListener('click', () => {
         let li = createEl('li', title);
         archiveArea.appendChild(li);
         article.remove();
         sortArchive();
      })

      deleteBtn.addEventListener('click', () => {
         article.remove();
      })

      let div = createEl('div', undefined, 'buttons');

      div.appendChild(deleteBtn);
      div.appendChild(archiveBtn);

      article.appendChild(div);

      contentArea.firstElementChild.firstElementChild.appendChild(article);
   }

   function sortArchive() {
      if (archiveArea.childElementCount > 1) {
         Array.from(archiveArea.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(l => archiveArea.appendChild(l));
      }
   }

   function createEl(type, text, style) {
      let element = document.createElement(type);

      if (text) {
         element.textContent = text;
      }

      if (style) {
         element.className = style;
      }

      return element;
   }
}
