function solve() {
   let addButtons = document.querySelectorAll('.add-product');
   let check = document.querySelector('.checkout');

   for (const iterator of addButtons) {
      iterator.addEventListener('click', add);
   }
   
   check.addEventListener('click', checkout);
   let allBtn = document.querySelectorAll('button');

   let prices = [];
   let names = new Set;

   function add(ev) {
      let parent = ev.target.parentNode.parentNode;
      let name = parent.querySelector('.product-title').textContent;
      let price = Number(parent.querySelector('.product-line-price').textContent);
      prices.push(price);
      price = price.toFixed(2);
      let text = `Added ${name} for ${price} to the cart.\n`;
      names.add(name);

      document.querySelector('textarea').textContent += text;
   }

   function checkout(ev) {
      let sum = prices.reduce((sum, el) => sum + el, 0);
      sum = sum.toFixed(2);
      let n = '';
      for (const el of names) {
         n += el + ', ';
      }
      n = n.slice(0, -2);
      let result = `You bought ${n} for ${sum}.`
      document.querySelector('textarea').textContent += result;
      disableBtn();
   }

   function disableBtn() {
      for (const btn of allBtn) {
         btn.disabled = true;
      }
   }
}
