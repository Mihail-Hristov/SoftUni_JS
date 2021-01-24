function solve() {
  let text = document.getElementById('input').value;

  let sentences = text.split('. ');

  let result = '<p>';
  let count = 0;

  for (let i = 0; i < sentences.length; i++) {
    if (count % 3 == 0 && i != 0) {
      result += '</p>';
      result += '<p>';
    }
    if (sentences[i].length > 0) {
      result += sentences[i] + '. ';
      count ++;
    }
  }
  result = result.slice(0, -2);
  result += '</p>';

  document.getElementById('output').innerHTML = result;
}