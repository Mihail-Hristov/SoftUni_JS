function solve() {

  let generatebtn = document.querySelectorAll('button')[0];
  let buyBtn = document.querySelectorAll('button')[1];

  let generateArea = document.querySelectorAll('textarea')[0];
  let buyArea = document.querySelectorAll('textarea')[1];

  let table = document.querySelector('tbody');

  generatebtn.addEventListener('click', generate)
  buyBtn.addEventListener('click', buy);

  function generate(ev) {
    let input = JSON.parse(generateArea.value);


    for (let i = 0; i < input.length; i++) {
      let tr = document.createElement('tr');

      let tdForImg = document.createElement('td');
      let img = document.createElement('img');
      img.src = input[i].img;
      tdForImg.appendChild(img);
      tr.appendChild(tdForImg);

      let tdForName = document.createElement('td');
      let pForName = document.createElement('p');
      pForName.textContent = input[i].name;
      tdForName.appendChild(pForName);
      tr.appendChild(tdForName)

      let tdForPrice = document.createElement('td');
      let pForPrice = document.createElement('p');
      pForPrice.textContent = input[i].price;
      tdForPrice.appendChild(pForPrice);
      tr.appendChild(tdForPrice);

      let tdForFac = document.createElement('td');
      let pForFac = document.createElement('p');
      pForFac.textContent = input[i].decFactor;
      tdForFac.appendChild(pForFac);
      tr.appendChild(tdForFac);

      let tdForCheck = document.createElement('td');
      let inputForCheck = document.createElement('input');
      inputForCheck.type = 'checkbox';
      tdForCheck.appendChild(inputForCheck);
      tr.appendChild(tdForCheck);

      table.appendChild(tr);
    }
  }

  function buy(ev) {
    let names = [];
    let result = 'Bought furniture: '
    let totalPrice = 0;
    let totalFac = 0;
    let checkboxes = document.querySelectorAll('tbody input[type=checkbox]:checked');
    
    for (const check of checkboxes) {
      names.push(check.parentNode.parentNode.childNodes[1].textContent);
      totalPrice += Number(check.parentNode.parentNode.childNodes[2].textContent);
      totalFac += Number(check.parentNode.parentNode.childNodes[3].textContent);
    }

    totalPrice = totalPrice.toFixed(2);
  
    result += names.join(', ');
    result += `\nTotal price: ${totalPrice}`;
    result += `\nAverage decoration factor: ${totalFac / names.length}`;

    buyArea.textContent = result;


  }

}