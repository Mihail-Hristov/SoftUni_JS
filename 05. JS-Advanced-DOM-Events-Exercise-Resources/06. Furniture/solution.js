function solve() {

  let generatebtn = document.querySelectorAll('button')[0];
  let buyBtn = document.querySelectorAll('button')[1];

  let generateArea = document.querySelectorAll('textarea')[0];
  let buyArea = document.querySelectorAll('textarea')[1];

  generatebtn.addEventListener('click', generate)

  function generate(ev) {
    let input = generateArea.value;
    console.log(input[0]);
    let tr = document.createElement('tr');

    for (let i = 0; i < 4; i++) {
      let td = document.createElement('td');
      let child
      if (i == 0) {
        child = document.createElement('img');
        child.textContent = '7';
      } else {
        child = document.createElement('p');
        child.textContent = 5
      }
      td.appendChild(child)
      tr.appendChild(td);
    }
  
    document.querySelector('tbody').appendChild(tr);

  }
}