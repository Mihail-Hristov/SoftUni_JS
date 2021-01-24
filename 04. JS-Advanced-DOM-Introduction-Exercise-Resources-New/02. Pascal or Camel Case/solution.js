function solve() {
  let text = document.getElementById('text').value;
  let change = document.getElementById('naming-convention').value;

  let result = '';
  let temp = [];

  //const types = {
    //'Pascal Case': function(currentText) {
      //temp.push(currentText.split(' ').forEach(element => element.toLowerCase()).map(e => e.charAt(0).toUpperCase() + e.slice(1)));
  //}

  switch (change) {
    case 'Pascal Case':
      current = text.split(' ');
      for (const element of current) {
        let transform = element.toLowerCase();
        transform = transform.charAt(0).toUpperCase() + transform.slice(1);
        temp.push(transform);
        
      }
      
      result = temp.join('');

      break;
    case 'Camel Case':
      current = text.split(' ');
      let temp2 = []
      for (const element of current) {
        temp2.push(element.toLowerCase());
      }

      temp.push(temp2[0]);
      for (let i = 1; i < temp2.length; i++) {
        temp2[i] = temp2[i].charAt(0).toUpperCase() + temp2[i].slice(1);
        temp.push(temp2[i])
      }
      
      result = temp.join('');

      break;
    default: result = 'Error!';
  }

  document.getElementById('result').textContent += result;
}